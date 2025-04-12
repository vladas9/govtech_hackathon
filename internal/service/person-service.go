package service

import (
	"govtech/internal/models"
	"govtech/internal/repository"
)

type PersonService struct {
}

func NewPersonService() *PersonService {
	return &PersonService{}
}

func (ps *PersonService) Login(phone string) (*models.ContactIdentifier, error) {
	repo := repository.NewGenericRepo[models.ContactIdentifier]()
	response, err := repo.Get("phone_number", phone)
	if err != nil {
		return nil, err
	}
	return response, nil
}
