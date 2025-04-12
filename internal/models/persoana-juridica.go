package models

type PersoanaJuridica struct {
	ID                   int               `json:"id"`
	IDNO                 int               `json:"idno"`
	FiscalCode           int               `json:"fiscal_code"`
	CuiioCode            int               `json:"cuiio_code"`
	Name                 string            `json:"name"`
	ShortName            string            `json:"short_name"`
	RegistrationDate     string            `json:"registration_date"`
	State                int               `json:"state"`
	StateDate            string            `json:"state_date"`
	PrevState            int               `json:"prev_state"`
	PrevStateDate        string            `json:"prev_state_date"`
	SuperiorOrganization int               `json:"superior_organization"`
	LegalFormCode        string            `json:"legal_form_code"`
	LegalStatusCode      string            `json:"legal_status_code"`
	FinancingSourceCode  string            `json:"financing_source_code"`
	PropertyFormCode     string            `json:"property_form_code"`
	AuthorizedCapital    float64           `json:"authorized_capital"`
	StateCapital         float64           `json:"state_capital"`
	MunicipalCapital     float64           `json:"municipal_capital"`
	PrivateCapital       float64           `json:"private_capital"`
	ResidentRMCapital    float64           `json:"resident_rm_capital"`
	ForeignCapital       float64           `json:"foreign_capital"`
	ForeinValutaCode     string            `json:"forein_valuta_code"`
	LiquidationCauseCode string            `json:"liquidation_cause_code"`
	OrganizationType     int               `json:"organization_type"`
	MotiveCode           int               `json:"motive_code"`

	// Relationships
	AddressData          AddressData       `gorm:"foreignKey:PersoanaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"address_data"`
	SettlementAccount    SettlementAccount `gorm:"foreignKey:PersoanaJuridicaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"settlement_account"`
	Activity             Activity          `gorm:"foreignKey:PersoanaJuridicaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"activity"`

	DateFinanciare DateFinanciare `gorm:"foreignKey:PersoanaJuridicaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"date_financiare"`
	FondatoriAdministratori []FondatorAdmin `gorm:"foreignKey:PersoanaJuridicaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"fondatori_administratori"`
	IstoricModificari []Modificare `gorm:"foreignKey:PersoanaJuridicaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"istoric_modificari"`
}
