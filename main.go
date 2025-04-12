package main

import "github.com/gin-gonic/gin"

func main() {
	gin.ForceConsoleColor()

	postgres.Init_DB()
	r := router.NewRouter()

	r.Run()
}
