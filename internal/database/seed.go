package database

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"

	"github.com/brianvoe/gofakeit/v6"

	"govtech/internal/models"

)

func SeedDatabase() error {
	gofakeit.Seed(time.Now().UnixNano())

	for i := 1; i <= 100; i++ {
		pj := models.PersoanaJuridica{
			IDNO:                 strconv.Itoa(gofakeit.Number(1002600000000, 1002600999999)),
			FiscalCode:          strconv.Itoa(gofakeit.Number(10000000, 99999999)),
			CuiioCode:           strconv.Itoa(gofakeit.Number(100000, 999999)),
			Name:                gofakeit.Company(),
			ShortName:           gofakeit.BuzzWord(),
			RegistrationDate:    gofakeit.DateRange(time.Now().AddDate(-10, 0, 0), time.Now().AddDate(-1, 0, 0)).Format("2006-01-02"),
			State:               1,
			StateDate:           gofakeit.Date().Format("2006-01-02"),
			PrevState:           0,
			PrevStateDate:       "",
			SuperiorOrganization: 0,
			LegalFormCode:       "SRL",
			LegalStatusCode:     "A",
			FinancingSourceCode: "B",
			PropertyFormCode:    "PF",
			AuthorizedCapital:   gofakeit.Price(10000, 500000),
			StateCapital:        0,
			MunicipalCapital:    0,
			PrivateCapital:      gofakeit.Price(10000, 500000),
			ResidentRMCapital:   gofakeit.Price(10000, 500000),
			ForeignCapital:      gofakeit.Price(0, 50000),
			ForeinValutaCode:    "EUR",
			LiquidationCauseCode: "",
			OrganizationType:    1,
			MotiveCode:          0,
		}

		err := DB.Create(&pj).Error
		if err != nil {
			return fmt.Errorf("failed to insert persoana juridica #%d: %v", i, err)
		}

		addr := models.AddressData{
			PersoanaID:           int(pj.ID),
			Country:              "Moldova",
			Region:               gofakeit.State(),
			Locality:             gofakeit.City(),
			StreetFromDictionary: gofakeit.StreetName(),
			Street:               gofakeit.StreetName(),
			House:                gofakeit.StreetNumber(),
			Block:                string(rune(gofakeit.Number(65, 70))),
			Flat:                 strconv.Itoa(gofakeit.Number(1, 100)),
			Post:                 gofakeit.Zip(),
			AdministrativeCode:   gofakeit.Number(1000, 9999),
			StreetType:           1,
			Phone:                gofakeit.Phone(),
			Fax:                  gofakeit.Phone(),
		}
		_ = DB.Create(&addr)

		act := models.Activity{
			PersoanaJuridicaID: int(pj.ID),
			ActivityCode:       gofakeit.Number(1000, 9999),
			OrderNumber:        1,
			ActivityType:       1,
		}
		_ = DB.Create(&act)

		sacc := models.SettlementAccount{
			PersoanaJuridicaID: int(pj.ID),
			SettlementAccount:  fmt.Sprintf("MD12EX%010d", rand.Intn(1000000000)),
			BankCode:           "EXMDMD22",
			Bank:               gofakeit.Company(),
		}
		_ = DB.Create(&sacc)

		df := models.DateFinanciare{
			PersoanaJuridicaID: int(pj.ID),
			CifraAfacerilor:    gofakeit.Price(100000, 3000000),
			ProfitNet:          gofakeit.Price(-10000, 500000),
			NumarAngajati:      gofakeit.Number(1, 50),
			FaraDatoriiLaBuget: gofakeit.Bool(),
			CategorieContrib:   "microîntreprindere",
			IMM:                gofakeit.Bool(),
		}
		_ = DB.Create(&df)

		admin := models.FondatorAdmin{
			PersoanaJuridicaID: int(pj.ID),
			Nume:               gofakeit.Name(),
			Functie:            "Administrator",
		}
		_ = DB.Create(&admin)

		mod := models.Modificare{
			PersoanaJuridicaID: int(pj.ID),
			Data:               gofakeit.Date().Format("2006-01-02"),
			Descriere:          "Modificare de statut",
		}
		_ = DB.Create(&mod)

		contact := models.ContactIdentifier{
			PhoneNumber: gofakeit.Phone(),
			Type:        "IDNO",
			Number:      pj.IDNO,
		}
		_ = DB.Create(&contact)
	}

	return nil
}