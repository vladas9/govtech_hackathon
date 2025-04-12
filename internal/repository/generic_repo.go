package repository

import (
	"fmt"
	"govtech/internal/database"

	"gorm.io/gorm"
)

type GenericRepo[T any] struct {
	tx *gorm.DB
}

// NewGenericRepo creates a new instance of the generic repository.
func NewGenericRepo[T any]() *GenericRepo[T] {
	tx := database.DB
	return &GenericRepo[T]{tx: tx}
}

// Get queries the database for a record of type T based on the given key and value.
// It returns a pointer to the found record or an error.
func (r *GenericRepo[T]) Get(key string, value any) (*T, error) {
	var element T
	// Construct a query using the key and value
	if err := r.tx.Where(fmt.Sprintf("%s = ?", key), value).First(&element).Error; err != nil {
		return nil, err
	}
	return &element, nil
}

// Create inserts a new record of type T into the database.
// It accepts a pointer to T so that GORM can properly track the record.
func (r *GenericRepo[T]) Create(data *T) error {
	if err := r.tx.Create(data).Error; err != nil {
		return err
	}
	return nil
}

// Delete removes a record of type T from the database by its primary key id.
func (r *GenericRepo[T]) Delete(id uint) error {
	var model T
	if err := r.tx.Delete(&model, id).Error; err != nil {
		return fmt.Errorf("failed to delete: %w", err)
	}
	return nil
}
