package models

type FondatorAdmin struct {
	ID                 int    `json:"id"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	Nume               string `json:"nume"`
	Functie            string `json:"functie"` // ex: Administrator, Fondator
}
