package models

type Modificare struct {
	ID                      uint              `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	Data               string `json:"data"`
	Descriere          string `json:"descriere"`
}
