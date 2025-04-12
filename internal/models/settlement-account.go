package models

type SettlementAccount struct {
	ID                 int    `json:"id"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	SettlementAccount  string `json:"settlement_account"`
	BankCode           string `json:"bank_code"`
	Bank               string `json:"bank"`
}
