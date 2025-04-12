package models

type Requirement struct {
	ID                      uint              `json:"id" gorm:"primaryKey;autoIncrement"`
	Name     string `json:"name"`      // Descrierea cerinței
	GrantID  int    `json:"grant_id"`  // Legătură cu grantul părinte
}
