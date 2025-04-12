package main

import (
	"github.com/gin-gonic/gin"

	"govtech/internal/database"
	"govtech/internal/router"

)

func main() {
	gin.ForceConsoleColor()

	database.Init_DB()

	// database.SeedDatabase();
	r := router.NewRouter()

	r.Run()
}
