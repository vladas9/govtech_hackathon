package models

type DateFinanciare struct {
	ID                 uint    `json:"id" gorm:"primaryKey;autoIncrement"`
	PersoanaJuridicaID int     `json:"persoana_juridica_id"`
	CifraAfacerilor    float64 `json:"cifra_afacerilor"` // venituri 12 luni
	ProfitNet          float64 `json:"profit_net"`       // profit/pierdere
	NumarAngajati      int     `json:"numar_angajati"`
	FaraDatoriiLaBuget bool    `json:"fara_datorii_la_buget"` // true dacă și-a achitat obligațiile fiscale
	CategorieContrib   string  `json:"categorie_contrib"`     // ex: "microîntreprindere"
	IMM                bool    `json:"imm"`                   // calculat pe baza cifrei + angajați
}
