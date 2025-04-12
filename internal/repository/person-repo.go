package repository

import (
	"govtech/internal/database"
	"govtech/internal/models"

	"gorm.io/gorm"
)

type PersonaJuridicaRepo struct {
	tx *gorm.DB
}

func NewJobRepo() *PersonaJuridicaRepo {
	return &PersonaJuridicaRepo{tx: database.DB}
}

func (pjr *PersonaJuridicaRepo) Get(id int) (*models.PersoanaJuridica, error) {
	PersonaJuridica := &models.PersoanaJuridica{}

	result := pjr.tx.
		Preload("AddressDate").
		Preload("SettlementAccount").
		Preload("Activity").
		First(PersonaJuridica, "id = ?", id)

	if result.Error != nil {
		return nil, result.Error
	}

	return PersonaJuridica, nil
}

func (pjr *PersonaJuridicaRepo) Insert(pj *models.PersoanaJuridica) error {
	result := pjr.tx.Create(pj)
	return result.Error
}

func (pjr *PersonaJuridicaRepo) Delete(id int) error {
	result := pjr.tx.Delete(&models.PersoanaJuridica{}, id)
	return result.Error
}
