package models

type SettlementAccount struct {
	ID                 uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaJuridicaID int    `json:"persoana_juridica_id"`
	SettlementAccount  string `json:"settlement_account"`
	BankCode           string `json:"bank_code"`
	Bank               string `json:"bank"`
}
