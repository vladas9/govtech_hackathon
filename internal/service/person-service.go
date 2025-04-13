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

func (ps *PersonService) Login(phone string) (any, *models.ContactIdentifier, error) {
	repo := repository.NewGenericRepo[models.ContactIdentifier]()
	response, err := repo.Get("phone_number", phone)
	var user any
	if response.Type == "IDNO" {
		user, err = repository.NewPersoanaJuridicaRepo().Get("id_no", response.Number)
	} else {
		user, err = repository.NewPersonaFizicaRepo().Get("id_np", response.Number)
	}

	if err != nil {
		return nil, nil, err
	}
	return user, response, nil
}
