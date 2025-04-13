package utils

import (
	"fmt"
	"strconv"

	"govtech/internal/models"

)

// CalculateIndicators computes financial ratios based on the company's financial data.
func CalculateIndicators(fin models.DateFinanciare) map[string]float64 {
	indicators := make(map[string]float64)

	get := func(s string) float64 {
		val, err := strconv.ParseFloat(s, 64)
		if err != nil {
			return 0
		}
		return val
	}

	activeCirculante := get(fin.TotalActiveCirculante)
	active := get(fin.TotalActive)
	capitalPropriu := get(fin.CapitalPropriu)
	datoriiTotale := get(fin.TotalDatorii)
	venituri := get(fin.VenituriDinVinzari)
	profit := fin.ProfitNet // este deja float64

	// 1. Rata activelor circulante
	if active != 0 {
		indicators["Rata activelor circulante"] = activeCirculante / active
	}

	// 2. Rata capitalului propriu
	if active != 0 {
		indicators["Rata capitalului propriu"] = capitalPropriu / active
	}

	// 3. Gradul de îndatorare
	if capitalPropriu != 0 {
		indicators["Gradul de îndatorare"] = datoriiTotale / capitalPropriu
	}

	// 4. Rentabilitatea vânzărilor
	if venituri != 0 {
		indicators["Rentabilitatea vânzărilor"] = profit / venituri
	}

	return indicators
}

// FormatIndicators makes a prompt-ready string with indicator descriptions
func FormatIndicators(indicators map[string]float64) string {
	prompt := "\n📊 Financial Indicators:\n"
	for name, value := range indicators {
		prompt += fmt.Sprintf("  - %s: %.2f\n", name, value)
	}
	prompt += "Use these values when evaluating grant suitability.\n"
	return prompt
}
