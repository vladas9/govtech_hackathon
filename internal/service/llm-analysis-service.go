package service

import (
	"bytes"
	"fmt"
	"text/template"
	"os"
	"path/filepath"

	"github.com/joho/godotenv"
	"github.com/jpoz/groq"

	"govtech/internal/models"
	"govtech/internal/repository"

)

type LLMService struct{}

func NewLLMService() *LLMService {
	return &LLMService{}
}

func (ls *LLMService) PrepareRequirementsPromt(grantID uint) (string, error) {
	grant, err := repository.NewGenericRepo[models.Grant]().GetWithPreload("id", grantID, "Requirements")
	
	if err != nil {
		return "", err
	}

	wd, err := os.Getwd()
	if err != nil {	
		return "", fmt.Errorf("could not get working directory: %v", err)
	}

	templatePath := filepath.Join(wd, "internal/promts", "grant_requirements_promt.txt")
	tmpl, err := template.ParseFiles(templatePath)
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
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("could not get working directory: %v", err)
	}

	templatePath := filepath.Join(wd, "internal/promts", "person_suitability_promt.txt")
	tmpl, err := template.ParseFiles(templatePath)
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
		return "", err
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

	fmt.Println("📤 Final prompt to LLM:\n", promt)


	client := groq.NewClient()
	groqResponse, err := client.CreateChatCompletion(groq.CompletionCreateParams{
		Model:          "llama-3.3-70b-versatile",
		ResponseFormat: groq.ResponseFormat{Type: "json_object"},
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
