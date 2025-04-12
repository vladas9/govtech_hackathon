package models

type EligibleActivityDomain struct {
	ID       uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Domeniu  string `json:"domeniu"`
	Program  string `json:"program"`
	Ajutor   string `json:"ajutor"`
	CodCAEM  string `json:"cod_caem"`
}
