package controller

import (
	"encoding/json"
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
		personRouter.POST("/grants", pc.handleGrants)
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

	// Image
	// image := response.ImageURL
	// if strings.TrimSpace(image) == "" {
	// 	image = "https://randomuser.me/api/portraits/men/32.jpg"
	// }

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
	var reqData struct {
		Type     string `json:"type"`
		NDNValue string `json:"idn_value"`
	}

	if err := c.ShouldBindJSON(&reqData); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	var grants string
	var err error
	if reqData.Type == "IDNO" {
		grants, err = pc.LLMService.GetMatchingAnswer(reqData.NDNValue)
		if err != nil {
			log.Println("❌ Eroare GetMatchingAnswer:", err)
			c.JSON(404, gin.H{"error": "failed to get grants"})
			return
		}
	} else {
		grants, err = pc.LLMService.GetMatchingFizica(reqData.NDNValue)
		if err != nil {
			log.Println("❌ Eroare GetMatchingAnswer:", err)
			c.JSON(404, gin.H{"error": "failed to get grants"})
			return
		}
	}

	var grantsJSON map[string]interface{}
	if err := json.Unmarshal([]byte(grants), &grantsJSON); err != nil {
		log.Println("❌ Failed to parse JSON string:", err)
		c.JSON(500, gin.H{"error": "invalid grant format"})
		return
	}

	c.JSON(200, grantsJSON)
}
