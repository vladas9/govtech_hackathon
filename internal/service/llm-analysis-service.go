package service

import (
	"bytes"
	"fmt"
	"govtech/internal/models"
	"govtech/internal/repository"
	"text/template"

	"github.com/joho/godotenv"
	"github.com/jpoz/groq"
)

type LLMService struct{}

func NewLLMService() *LLMService {
	return &LLMService{}
}

func (ls *LLMService) PrepareRequirementsPromt(grantID uint) (string, error) {
	grant, err := repository.NewGenericRepo[models.Grant]().Get("id", grantID)
	if err != nil {
		return "", err
	}

	tmpl, err := template.ParseFiles("../promts/grant_requirements_promt.txt")
	if err != nil {
		return "", fmt.Errorf("Error parsing template file: %v", err)
	}

	var buf bytes.Buffer
	err = tmpl.Execute(&buf, grant)
	if err != nil {
		return "", fmt.Errorf("Error executing template: %v", err)
	}

	renderedOutput := buf.String()

	return renderedOutput, nil

}

func (ls *LLMService) PreparePersonPromt(data *models.PersoanaJuridica) (string, error) {
	tmpl, err := template.ParseFiles("../promts/person_suitability_promt.txt")
	if err != nil {
		return "", fmt.Errorf("Error parsing template file: %v", err)
	}

	var buf bytes.Buffer
	err = tmpl.Execute(&buf, data)
	if err != nil {
		return "", fmt.Errorf("Error executing template: %v", err)
	}

	renderedOutput := buf.String()

	return renderedOutput, nil
}

func (ls *LLMService) GetMatchingAnswer(idno string) (string, error) {
	godotenv.Load()
	promt := "I need you to return a json with the score if the person is suitable and the requirement and the true or false value if it is suitable by this requirement"

	person, err := repository.NewPersoanaJuridicaRepo().Get("id_no", idno)
	if err != nil {
		return "", nil
	}

	personPromt, err := ls.PreparePersonPromt(person)
	if err != nil {
		return "", err
	}

	promt += personPromt

	for i := 1; i < 11; i++ {
		requirementsPromt, err := ls.PrepareRequirementsPromt(uint(i))
		if err != nil {
			return "", err
		}

		promt += requirementsPromt
	}

	client := groq.NewClient()
	groqResponse, err := client.CreateChatCompletion(groq.CompletionCreateParams{
		Model:          "llama-3.3-70b-versatile",
		ResponseFormat: groq.ResponseFormat{Type: "json"},
		Messages: []groq.Message{
			{
				Role:    "user",
				Content: promt,
			},
		},
	})

	if err != nil {
		return "", err
	}

	return groqResponse.Choices[0].Message.Content, nil
}
