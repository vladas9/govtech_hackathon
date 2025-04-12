package models

type Requirement struct {
	ID      uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Name    string `json:"name"`
	GrantID int    `json:"grant_id"`
}
