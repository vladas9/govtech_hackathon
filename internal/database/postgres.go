package database

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	m "govtech/internal/models"

)

var DB *gorm.DB

func Init_DB() error {
	if err := godotenv.Load(); err != nil {
		return fmt.Errorf("Error loading .env file")
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return fmt.Errorf("Failed to init db: %v", err)
	}

	err = DB.AutoMigrate(
		&m.PersoanaJuridica{},
		&m.Activity{},
		&m.SettlementAccount{},
		&m.AddressData{},
		&m.DateFinanciare{},
		&m.FondatorAdmin{},
		&m.Modificare{},
		&m.Grant{},
		&m.Requirement{})

	if err != nil {
		return fmt.Errorf("Failed to migrate database: %v", err)
	}

	return nil
}
