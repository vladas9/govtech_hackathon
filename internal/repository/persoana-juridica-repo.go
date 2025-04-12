package repository

import (
	"govtech/internal/database"
	"govtech/internal/models"

	"gorm.io/gorm"
)

type PersoanaJuridicaRepo struct {
	tx *gorm.DB
}

func NewJobRepo() *PersoanaJuridicaRepo {
	return &PersoanaJuridicaRepo{tx: database.DB}
}

func (pjr *PersoanaJuridicaRepo) Get(id int) (*models.PersoanaJuridica, error) {
	PersoanaJuridica := &models.PersoanaJuridica{}

	result := pjr.tx.
		Preload("AddressDate").
		Preload("SettlementAccount").
		Preload("Activity").
		Preload("DateFinaciare").
		Preload("FondatoriAdministratori").
		Preload("IstoricModificari").
		First(PersoanaJuridica, "id = ?", id)

	if result.Error != nil {
		return nil, result.Error
	}

	return PersoanaJuridica, nil
}

func (pjr *PersoanaJuridicaRepo) Insert(pj *models.PersoanaJuridica) error {
	result := pjr.tx.Create(pj)
	return result.Error
}

func (pjr *PersoanaJuridicaRepo) Delete(id int) error {
	result := pjr.tx.Delete(&models.PersoanaJuridica{}, id)
	return result.Error
}
