package models

type FondatorAdmin struct {
	ID                 uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	Nume               string `json:"nume"`
	Functie            string `json:"functie"` // ex: Administrator, Fondator
}
