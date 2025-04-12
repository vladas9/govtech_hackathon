package models

type Grant struct {
	ID           uint          `json:"id" gorm:"primaryKey;autoIncrement"`
	Name         string        `json:"name"` // Denumirea grantului
	Requirements []Requirement `json:"requirements" gorm:"foreignKey:GrantID;constraint:OnDelete:CASCADE,OnUpdate:CASCADE"`
}
