package controller

import (
	"govtech/internal/service"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type PersonController struct {
	service *service.PersonService
}

func NewWorkerController() *PersonController {
	if err := godotenv.Load(); err != nil {
		log.Println("Error loading .env file")
	}
	return &PersonController{}
}

func (pc *PersonController) RegisterRoutes(router *gin.RouterGroup) {
	personRouter := router.Group("/person")
	{
		personRouter.POST("/login", pc.handleLogin)
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

	response, err := pc.service.Login(loginData.Phone)
	if err != nil {
		c.JSON(404, gin.H{"error": "login failed"})
		return
	}

	data := make(map[string]any)
	data[response.Type] = response.Number

	c.JSON(200, data)
}
