package models

type AddressData struct {
	ID                   uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaFizicaID     uint   `json:"persoana_fizica_id"`     // poate fi NULL
	PersoanaJuridicaID   uint   `json:"persoana_juridica_id"`   // poate fi NULL
	Country              string `json:"country"`
	Region               string `json:"region"`
	Locality             string `json:"locality"`
	StreetFromDictionary string `json:"streetfromdictionary"`
	Street               string `json:"street"`
	House                string `json:"house"`
	Block                string `json:"block"`
	Flat                 string `json:"flat"`	
	Post                 string `json:"post"`
	AdministrativeCode   int    `json:"administrativecode"`
	StreetType           int    `json:"streettype"`
	Phone                string `json:"phone"`
	Fax                  string `json:"fax"`
}
