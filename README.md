# 🧠 GovTech Grant Eligibility Assistant (ODA)

**Empowering Entrepreneurs • Saving Time • Enhancing Public Services**

This project is a backend platform designed to assist **Moldovan entrepreneurs** and the **Organizația pentru Dezvoltarea Antreprenoriatului (ODA)** by **automating the validation of eligibility criteria** for support grants using a combination of structured data analysis and LLM-powered logic.

---

## 🗂 Overview

The platform enables users (either **persoane juridice** or **persoane fizice**) to log in with basic identifying info (like `IDNO`, `IDNP`), and it intelligently assesses which **ODA grants** they're eligible for, explaining *why* or *why not* — based on official requirement data.

> ✅ Avoids hours of manual document reading  
> ✅ Prevents unqualified grant applications  
> ✅ Reduces evaluator workload at ODA  
> ✅ Offers personalized eligibility breakdowns per grant

---

## 🚀 Key Features

- 🔍 **LLM-based Evaluation Logic**
- ⚡️ **SQLite-backed cache** (`llm_cache`, `llm_cache_fizica`)
- 🏢 Full support for both persons juridice & fizice
- 📦 Pre-loaded grant & requirement datasets (`resources/`)
- 📬 Contact & address record syncing (via GORM)
- 📤 API endpoints for login, eligibility, grant fetching

---

## 🧠 How It Works

1. **Login** via phone number (matches ContactIdentifier table)
2. System fetches matching **person** and associated data:
   - Juridical: name, activity, financials, ownership
   - Physical: age, gender, ownership, experience
3. The data is passed to a **local LLM model** 
4. The system returns a full **grant-by-grant breakdown**, e.g.:

```json
{
  "grant_name": "Start pentru Tineri",
  "is_eligible": true,
  "requirements": [
    { "requirement": "Tânăr între 18-35 ani", "is_suitable": true },
    ...
  ]
}
```

---

## 🧱 Project Structure

```
govtech/
├── govtech-frontend/             # frontend logic
├── internal/
│   ├── controller/               # HTTP request handlers
│   ├── database/                 # DB init, seed, migrations
│   ├── models/                   # GORM model definitions
│   ├── service/                  # Business logic layer
│   ├── prompts/                  # LLM prompt templates
│   ├── repository/               # Query/ORM logic per entity
│   ├── cache/                    # Local LLM caching (sqlite)
│   └── utils/                    # Time, ID generation, etc.
├── resources/                    # CSVs: grants, requirements
├── cache.db                      # SQLite local cache (ignored in prod)
├── main.go                       # Entry point
├── .env                          # Env vars (port, api keys)
├── README.md                     # You're reading it 👋
```

---

## 🧪 How to Run

> Requires Go 1.20+, SQLite3 installed and Postgres database

```bash
# 1. Clone the repo
git clone https://github.com/vladas9/govtech_hackathon
cd govtech-oda

# 2. Setup environment
cp .env.example .env

# 3. Run the application
go run main.go
```

> By default, it will listen on: `http://localhost:1169`

---

## 🔧 Endpoints

| Method | Endpoint              | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/person/login`    | Authenticates by phone            |
| POST   | `/api/person/grants`   | Returns grants & eligibility JSON |

---

## 🌍 Scalability & Deployment

This app was designed for **flexibility and growth**:

- ✅ Local DB layer (SQLite) easily swappable to PostgreSQL
- ✅ Cleanly separated `service`, `repository`, and `router` layers
- ✅ Can run on-premise (MCabinet, EVO) or via containerized deployment
- ✅ Ready for cloud-based scaling with a plug-in LLM gateway 

For production:

```bash
# Build container
docker build -t govtech-oda .

# Or deploy in Kubernetes with volumes for caching
```

---

## 📚 Data Sources

All eligibility criteria were manually extracted from:
- [oda.md official grant pages](https://www.oda.md/ro/granturi)
- [Start pentru Tineri](https://www.oda.md/ro/granturi/start-pentru-tineri)
- [EcoIMM](https://www.oda.md/ro/granturi/ecoimm)
- and others...

Grants and their requirements are stored in:

```
resources/
├── grants.csv
└── requirements.csv
```

---

## ✨ Contribution

We welcome feature ideas and dataset improvements. This project can power other agencies and forms of digital government automation in Moldova.

---

## 🤝 Authors

This project was brought to life during the GovTech Hackathon by a passionate and multidisciplinary team from **FCIM | TUM**:

- 🎯 **Dorian Lesnic** — Product Manager & Vision Coordinator  
- 🎨 **George Mocreac** — UI/UX Designer, Visual Identity & Flow Architect  
- 🧠 **Alexandru Rudoi** — Backend Engineer & Data Analyst 
- 🧠 **Vladislav Amza** — Backend Engineer & Data Analyst  
- 💻 **Cristian Buza** — Frontend Developer, Interface & Experience Builder

Together, we aimed to simplify access to state support for Moldovan entrepreneurs through intelligent automation and accessible design.