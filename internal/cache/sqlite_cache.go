package cache

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"sync"

	_ "github.com/mattn/go-sqlite3"

)

type Cache struct {
	db   *sql.DB
	lock sync.Mutex
}

var instance *Cache

func InitCache() (*Cache, error) {
	if instance != nil {
		return instance, nil
	}

	if _, err := os.Stat(".cache"); os.IsNotExist(err) {
		err = os.Mkdir(".cache", 0755)
		if err != nil {
			return nil, err
		}
	}

	db, err := sql.Open("sqlite3", ".cache/llm_cache.db")
	if err != nil {
		return nil, err
	}

	createStmt := `
	CREATE TABLE IF NOT EXISTS cache (
		idno TEXT NOT NULL,
		result TEXT NOT NULL,
		PRIMARY KEY (idno)
	);`

	_, err = db.Exec(createStmt)
	if err != nil {
		return nil, err
	}

	instance = &Cache{db: db}
	return instance, nil
}

func (c *Cache) Get(idno string) (string, bool) {
	c.lock.Lock()
	defer c.lock.Unlock()

	row := c.db.QueryRow("SELECT result FROM cache WHERE idno = ?", idno)
	var result string
	err := row.Scan(&result)
	if err != nil {
		return "", false
	}
	return result, true
}

func (c *Cache) Set(idno, result string) error {
	c.lock.Lock()
	defer c.lock.Unlock()

	_, err := c.db.Exec("INSERT OR REPLACE INTO cache (idno, result) VALUES (?, ?)", idno, result)
	return err
}
