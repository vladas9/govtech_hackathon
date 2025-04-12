package models

type PersoanaFizica struct {
	ID               uint        `json:"id" gorm:"primaryKey;autoIncrement"`
	IDNP             string      `json:"idnp" gorm:"type:varchar(13)"`          // Numărul unic de identificare al persoanei (IDNP)
	Firstname        string      `json:"firstname" gorm:"type:varchar(30)"`     // Prenumele persoanei
	Lastname         string      `json:"lastname" gorm:"type:varchar(30)"`      // Numele de familie
	Secondname       string      `json:"secondname" gorm:"type:varchar(30)"`    // Numele patronimic
	SexCode          string      `json:"sexcode"`                               // Sexul persoanei, conform clasificatorului
	Birthdate        string      `json:"birthdate"`                             // Data nașterii (format dd-mm-yyyy)
	Deathdate        string      `json:"deathdate"`                             // Data decesului (format dd-mm-yyyy)
	BirthCountryCode string      `json:"birthcountrycode"`                      // Codul ţării nașterii
	BirthLocality    string      `json:"birthlocality" gorm:"type:varchar(60)"` // Localitatea nașterii
	BirthRegion      string      `json:"birthregion" gorm:"type:varchar(60)"`   // Raionul nașterii
	CitizenCode      string      `json:"citizencode"`                           // Statutul juridic al cetățeniei
	AddressData      AddressData `gorm:"foreignKey:PersoanaID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE" json:"address_data"`
}
