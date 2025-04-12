package repository

import (
	"govtech/internal/database"
	"govtech/internal/models"

	"gorm.io/gorm"
)

type PersoanaFizicaRepo struct {
	tx *gorm.DB
}

func NewPersonaFizicaRepo() *PersoanaFizicaRepo {
	return &PersoanaFizicaRepo{tx: database.DB}
}

func (pjr *PersoanaFizicaRepo) Get(id int) (*models.PersoanaFizica, error) {
	PersonaFizica := &models.PersoanaFizica{}

	result := pjr.tx.
		Preload("AddressDate").
		First(PersonaFizica, "id = ?", id)

	if result.Error != nil {
		return nil, result.Error
	}

	return PersonaFizica, nil
}

func (pjr *PersoanaFizicaRepo) Insert(pj *models.PersoanaFizica) error {
	result := pjr.tx.Create(pj)
	return result.Error
}

func (pjr *PersoanaFizicaRepo) Delete(id int) error {
	result := pjr.tx.Delete(&models.PersoanaFizica{}, id)
	return result.Error
}
