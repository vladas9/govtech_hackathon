package models

type Modificare struct {
	ID                 int    `json:"id"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	Data               string `json:"data"`
	Descriere          string `json:"descriere"`
}
