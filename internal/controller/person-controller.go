package controller

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"govtech/internal/models"
	"govtech/internal/service"
)

type PersonController struct {
	service    *service.PersonService
	LLMService *service.LLMService
}

func NewPersonController() *PersonController {
	if err := godotenv.Load(); err != nil {
		log.Println("Error loading .env file")
	}
	return &PersonController{service: service.NewPersonService(), LLMService: service.NewLLMService()}
}

func (pc *PersonController) RegisterRoutes(router *gin.RouterGroup) {
	personRouter := router.Group("/person")
	{
		personRouter.POST("/login", pc.handleLogin)
		personRouter.GET("/grants/:idno", pc.handleGrants)
	}
}

func (pc *PersonController) handleLogin(c *gin.Context) {
	var loginData struct {
		Phone string `json:"phone"`
	}

	if err := c.ShouldBindJSON(&loginData); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	user, response, err := pc.service.Login(loginData.Phone)
	if err != nil {
		c.JSON(404, gin.H{"error": "login failed"})
		return
	}
	data := gin.H{}

	if response.Type == "IDNO" {
		data = gin.H{
			"type":      response.Type,
			"idn_value": response.Number,
			"picture":   "https://randomuser.me/api/portraits/men/32.jpg",
			"name":      user.(*models.PersoanaJuridica).Name,
			"email":     response.Email,
			"phone":     response.PhoneNumber,
		}

	} else {
		data = gin.H{
			"type":      response.Type,
			"idn_value": response.Number,
			"picture":   "https://randomuser.me/api/portraits/men/32.jpg",
			"name":      user.(*models.PersoanaFizica).Firstname + " " + user.(models.PersoanaFizica).Lastname,
			"email":     response.Email,
			"phone":     response.PhoneNumber,
		}
	}
	c.JSON(200, data)
}

func (pc *PersonController) handleGrants(c *gin.Context) {
	idno := c.Param("idno")
	if idno == "" {
		c.JSON(400, gin.H{"error": "ID number is required"})
		return
	}

	grants, err := pc.LLMService.GetMatchingAnswer(idno)
	if err != nil {
		log.Println("❌ Eroare GetMatchingAnswer:", err)
		c.JSON(404, gin.H{"error": "failed to get grants"})
		return
	}

	c.JSON(200, grants)
}
