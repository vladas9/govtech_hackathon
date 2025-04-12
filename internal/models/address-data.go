package models

type AddressData struct {
	ID                   int    `json:"id"`
	PersoanaID           int    `json:"persoana_juridica_id"`
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
