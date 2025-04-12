package main

import (
	"govtech/internal/database"
	"govtech/internal/router"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.ForceConsoleColor()

	database.Init_DB()
	r := router.NewRouter()

	r.Run()
}
