package repository

import (
	"gorm.io/gorm"

	"govtech/internal/database"
	"govtech/internal/models"

)

type EligibleActivityDomainRepo struct {
	tx *gorm.DB
}

func NewEligibleActivityDomainRepo() *EligibleActivityDomainRepo {
	return &EligibleActivityDomainRepo{tx: database.DB}
}

func (r *EligibleActivityDomainRepo) GetAll() ([]models.EligibleActivityDomain, error) {
	var domains []models.EligibleActivityDomain
	err := r.tx.Find(&domains).Error
	return domains, err
}
