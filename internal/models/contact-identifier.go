package models

type ContactIdentifier struct {
	ID          uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	PhoneNumber string `json:"phone_number"` // Ex: +37369123456
	Type        string `json:"type"`         // "IDNP" sau "IDNO"
	Number      string `json:"number"`       // Ex: 1234567890123
}
