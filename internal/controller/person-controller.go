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
	workerRouter := router.Group("/person")
	{
		workerRouter.POST("/login", pc.handleLogin)
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

	c.JSON(200, gin.H{
		"message": "login successful",
		"phone":   loginData.Phone,
	})
}
