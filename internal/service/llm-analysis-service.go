package service

import (
	"bytes"
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"text/template"

	"github.com/joho/godotenv"
	"github.com/jpoz/groq"
	_ "github.com/mattn/go-sqlite3"

	"govtech/internal/models"
	"govtech/internal/repository"

)

type LLMService struct {
	cache *sql.DB
}

func NewLLMService() *LLMService {
	db, err := sql.Open("sqlite3", "./cache.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS llm_cache (
		idno TEXT PRIMARY KEY,
		response TEXT
	)`)
	if err != nil {
		panic(err)
	}

	return &LLMService{cache: db}
}

func (ls *LLMService) getFromCache(idno string) (string, bool) {
	var result string
	err := ls.cache.QueryRow("SELECT response FROM llm_cache WHERE idno = ?", idno).Scan(&result)
	if err == nil {
		return result, true
	}
	return "", false
}

func (ls *LLMService) saveToCache(idno, response string) {
	_, err := ls.cache.Exec("INSERT OR REPLACE INTO llm_cache (idno, response) VALUES (?, ?)", idno, response)
	if err != nil {
		fmt.Println("Eroare salvare cache:", err)
	}
}


func (ls *LLMService) PrepareRequirementsprompt(grantID uint) (string, error) {
	grant, err := repository.NewGenericRepo[models.Grant]().GetWithPreload("id", grantID, "Requirements")
	
	if err != nil {
		return "", err
	}

	wd, err := os.Getwd()
	if err != nil {	
		return "", fmt.Errorf("could not get working directory: %v", err)
	}

	templatePath := filepath.Join(wd, "internal/prompts", "grant_requirements_prompt.txt")
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

func (ls *LLMService) PreparePersonprompt(data *models.PersoanaJuridica) (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("could not get working directory: %v", err)
	}

	templatePath := filepath.Join(wd, "internal/prompts", "person_suitability_prompt.txt")
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

func (ls *LLMService) prepareCAEMPrompt() (string, error) {
	activityRepo := repository.NewEligibleActivityDomainRepo()
	entries, err := activityRepo.GetAll()
	if err != nil {
		return "", err
	}

	codes := []string{}
	for _, entry := range entries {
		if strings.TrimSpace(entry.CodCAEM) != "" {
			codes = append(codes, entry.CodCAEM)
		}
	}

	if len(codes) == 0 {
		return "", nil
	}

	return fmt.Sprintf("\nEligible Activity Codes for the company (CAEM): %s\nOnly evaluate grants that support at least one of these codes.\n", strings.Join(codes, ", ")), nil
}

func (ls *LLMService) GetMatchingAnswer(idno string) (string, error) {
	godotenv.Load()

	if cached, found := ls.getFromCache(idno); found {
		fmt.Println("Cache hit for ID:", idno)
		return cached, nil
	}

	prompt := `
You are an eligibility analyzer. Based on the company profile, grant requirements and CAEM codes, I will give you, return a JSON object in the following format:

{
  "grant_elegibility": [
    {
      "grant_name": "Program Name",
      "grant_id": 1,
      "score": 70,
      "is_eligible": true,
      "requirements": [
        {
          "requirement_id": 1,
          "requirement": "Example Requirement",
          "is_suitable": true
        },
        ...
      ]
    },
    ...
  ]
}

A grant is considered "is_eligible": true **only if all its requirements are marked as "is_suitable": true**.

Always respond **only** in this format and do not include any extra explanation.
`

	person, err := repository.NewPersoanaJuridicaRepo().Get("id_no", idno)
	if err != nil {
		return "", err
	}

	personPrompt, err := ls.PreparePersonprompt(person)
	if err != nil {
		return "", err
	}
	prompt += personPrompt

	for i := 1; i < 11; i++ {
		reqPrompt, err := ls.PrepareRequirementsprompt(uint(i))
		if err != nil {
			return "", err
		}

		prompt += reqPrompt
	}

	caemPrompt, err := ls.prepareCAEMPrompt()
	if err != nil {
		return "", err
	}
	prompt += caemPrompt

	client := groq.NewClient()
	groqResponse, err := client.CreateChatCompletion(groq.CompletionCreateParams{
		Model:          "llama-3.3-70b-versatile",
		ResponseFormat: groq.ResponseFormat{Type: "json_object"},
		Messages: []groq.Message{
			{
				Role:    "user",
				Content: prompt,
			},
		},
	})

	if err != nil {
		return "", err
	}

	result := groqResponse.Choices[0].Message.Content
	ls.saveToCache(idno, result)

	return result, nil
}

// func isGrantEligible(requirements []Requirement) bool {
// 	for _, r := range requirements {
// 		if !r.IsSuitable {
// 			return false
// 		}
// 	}
// 	return true
// }
