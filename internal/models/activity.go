package models

type Activity struct {
	ID                 int `json:"id"`
	PersoanaJuridicaID int `json:"persoana_juridica_id"`
	ActivityCode       int `json:"activity_code"`
	OrderNumber        int `json:"order_number"`
	ActivityType       int `json:"activity_type"`
}
