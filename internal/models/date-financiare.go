package models

type DateFinanciare struct {
	ID                 uint    `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaJuridicaID int     `json:"persoana_juridica_id"`
	CifraAfacerilor    float64 `json:"cifra_afacerilor"`
	ProfitNet          float64 `json:"profit_net"`
	NumarAngajati      int     `json:"numar_angajati"`
	FaraDatoriiLaBuget bool    `json:"fara_datorii_la_buget"`
	CategorieContrib   string  `json:"categorie_contrib"`
	IMM                bool    `json:"imm"`

	TotalActive           string `json:"total_active"`             // Total Active
	TotalActiveCirculante string `json:"total_active_circulante"`  // Active circulante
	CapitalPropriu        string `json:"capital_propriu"`          // Capital propriu
	TotalDatorii          string `json:"total_datorii"`            // Total datorii
	VenituriDinVinzari    string `json:"venituri_din_vinzari"`     // Venituri
}
