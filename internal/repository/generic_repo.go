package repository

import (
	"fmt"

	"gorm.io/gorm"

	"govtech/internal/database"

)

type GenericRepo[T any] struct {
	tx *gorm.DB
}

func NewGenericRepo[T any]() *GenericRepo[T] {
	tx := database.DB
	return &GenericRepo[T]{tx: tx}
}

func (r *GenericRepo[T]) Get(key string, value any) (*T, error) {
	var element T
	if err := r.tx.Where(fmt.Sprintf("%s = ?", key), value).First(&element).Error; err != nil {
		return nil, err
	}
	return &element, nil
}

func (r *GenericRepo[T]) GetWithPreload(key string, value any, relations ...string) (*T, error) {
	var element T
	query := r.tx

	for _, relation := range relations {
		query = query.Preload(relation)
	}

	if err := query.Where(fmt.Sprintf("%s = ?", key), value).First(&element).Error; err != nil {
		return nil, err
	}

	return &element, nil
}


func (r *GenericRepo[T]) Create(data *T) error {
	if err := r.tx.Create(data).Error; err != nil {
		return err
	}
	return nil
}

func (r *GenericRepo[T]) Delete(id uint) error {
	var model T
	if err := r.tx.Delete(&model, id).Error; err != nil {
		return fmt.Errorf("failed to delete: %w", err)
	}
	return nil
}
