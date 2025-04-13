package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"govtech/internal/controller"
)

type Controller interface {
	RegisterRoutes(router *gin.RouterGroup)
}

type routes struct {
	router *gin.Engine
}

func NewRouter() routes {
	r := routes{
		router: gin.Default(),
	}

	config := cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization", "X-Requested-With"},
		AllowCredentials: true,
	}

	r.router.Use(cors.New(config))

	api := r.router.Group("/api")

	controllers := []Controller{
		controller.NewPersonController(),
	}

	for _, controller := range controllers {
		controller.RegisterRoutes(api)
	}

	return r
}

func (r *routes) Run() error {
	return r.router.Run("0.0.0.0:1169")
}
