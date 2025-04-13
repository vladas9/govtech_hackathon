package repository

import (
	"gorm.io/gorm"

	"govtech/internal/database"
	"govtech/internal/models"

)

type PersoanaJuridicaRepo struct {
	tx *gorm.DB
}

func NewPersoanaJuridicaRepo() *PersoanaJuridicaRepo {
	return &PersoanaJuridicaRepo{tx: database.DB}
}

func (pjr *PersoanaJuridicaRepo) Get(key string, value any) (*models.PersoanaJuridica, error) {
	PersoanaJuridica := &models.PersoanaJuridica{}

	result := pjr.tx.
		Preload("AddressData").
		Preload("SettlementAccount").
		Preload("Activity").
		Preload("DateFinanciare").
		Preload("FondatoriAdministratori").
		Preload("IstoricModificari").
		First(PersoanaJuridica, key+" = ?", value)

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
