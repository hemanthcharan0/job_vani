# 🇮🇳 Job Vani – Public Sector Opportunities Portal

> **A modern, full-stack government recruitment, internship, and entrance examination portal with a secure Django Admin management backend and live REST API synchronization.**

---

## 📌 Overview

**Job Vani** is designed to provide job seekers, students, and aspirants across India with real-time, verified notifications for:
- **Government Jobs (Central & State):** Railway, SSC, Banking, UPSC, Defence, Police, State PSCs, Teaching, and PSUs.
- **National Internships:** NITI Aayog, RBI, ISRO, DRDO, MEA, and research fellowships.
- **Entrance Examinations:** JEE, NEET, GATE, CAT, CLAT, CTET, CUET, NDA, UGC NET.
- **Live Urgent Alerts:** Breaking news tickers, urgent deadline warnings, and notification broadcasts.

The architecture combines a **lightning-fast, lightweight frontend** with a **robust Django Admin backend** that automatically exports real-time JSON snapshots via Django database signals.

---

## ✨ Features

- 🏛️ **Verified Official Sources:** Direct links to verified `.gov.in` and official recruitment portals.
- 🎯 **Strict State/UT Filter:** Filter recruitments strictly available in specific States/UTs without generic national noise.
- ⏳ **Dynamic Deadline Engine:** Real-time countdowns (`3 days left`, `Closing Soon`, `Active`) calculated dynamically.
- 🔒 **Secure Django Admin Panel:** Add, update, or archive recruitments with search, filters, and custom fieldsets.
- ⚡ **Real-Time Data Sync:** Django model signals (`post_save`, `post_delete`) automatically update `backend/all_data.json` on every admin action.
- 🌐 **RESTful API with CORS:** Clean JSON endpoints (`/api/all/`, `/api/jobs/`, `/api/internships/`, `/api/entrance/`).
- 🛡️ **Offline Resilient:** If the backend is ever restarted or offline, the frontend seamlessly falls back to cached data.

---

## 📁 Project Structure

```text
job_vani/
├── index.html                   # Public portal landing page and UI views
├── styles.css                   # Responsive design, animations, theme variables
├── app.js                       # Frontend state management & API sync engine
├── start_all.bat                # Windows 1-click startup script (Frontend + Backend)
├── README.md                    # Project documentation & setup guide
├── .gitignore                   # Git ignore rules (cache, env, bytecode)
│
├── icons/                       # 27 verified SVG logos for ministries & departments
│   ├── railway.svg
│   ├── ssc.svg
│   ├── upsc.svg
│   ├── banking.svg
│   └── ...
│
└── backend/                     # Django 6.0+ Backend Application
    ├── manage.py                # Django CLI tool
    ├── requirements.txt         # Production Python dependencies
    ├── db.sqlite3               # SQLite database (48 Jobs, 10 Interns, 12 Exams, 8 Alerts)
    ├── all_data.json            # Auto-synchronized JSON backup snapshot
    ├── create_admin_and_seed.py # Admin user reset & credential management script
    │
    ├── jobvani_admin/           # Django project configuration
    │   ├── settings.py          # Settings (CORS, WhiteNoise, Security)
    │   ├── urls.py              # Root router (`/admin/` and `/api/`)
    │   └── wsgi.py              # WSGI entry point for production servers
    │
    └── portal/                  # Core recruitment portal application
        ├── models.py            # Job, Internship, EntranceExam, LiveAlert models + signals
        ├── admin.py             # Custom Django Admin panel branding & layouts
        ├── views.py             # REST API endpoints with CORS headers
        └── urls.py              # App-level API routing (`/api/...`)
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites
Make sure you have installed on your computer:
1. **Python 3.10+** (Python 3.11, 3.12, or 3.13 recommended) – [Download Python](https://www.python.org/)
2. **Node.js** (Optional, recommended for frontend static serving) – [Download Node.js](https://nodejs.org/)
3. **Git** – [Download Git](https://git-scm.com/)

---

### Option 1: One-Click Startup (Windows)
If you are on Windows, simply double-click:
```bash
start_all.bat
```
This automatically starts both the Django backend (`:8000`) and the frontend server (`:3000`), and launches your browser!

---

### Option 2: Manual Setup (Windows / macOS / Linux)

#### 1. Clone the Repository
```bash
git clone https://github.com/polampallihemanthcharan/job_vani.git
cd job_vani
```

#### 2. Setup the Backend
Navigate to the `backend` folder, install dependencies, and run migrations:

```bash
cd backend

# (Optional) Create and activate virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations (already applied by default)
python manage.py migrate

# Start Django development server
python manage.py runserver 127.0.0.1:8000
```
Backend will be live at: **http://127.0.0.1:8000/**

#### 3. Setup the Frontend
Open a **new terminal window**, navigate back to the root `job_vani` folder, and serve the static files:

```bash
cd job_vani

# Using Node.js (Recommended):
npx serve -l 3000 .

# OR using Python's built-in HTTP server:
python -m http.server 3000
```
Public Portal will be live at: **http://localhost:3000/**

---

## 🔐 Admin Credentials

To manage jobs, internships, entrance tests, and alerts:

* **Admin URL:** [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
* **Username:** `Lucky`
* **Password:** `hemanth@143`

*(To change or reset admin credentials at any time, run `python backend/create_admin_and_seed.py`)*

---

## 📡 REST API Reference

All endpoints support `GET` and include `Access-Control-Allow-Origin: *` headers:

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/api/all/` | `GET` | Returns all active Jobs, Internships, Exams, and Alerts in one payload |
| `/api/jobs/` | `GET` | Returns all active government job listings |
| `/api/internships/` | `GET` | Returns all active government internships |
| `/api/entrance/` | `GET` | Returns all active entrance examinations |
| `/api/stats/` | `GET` | Returns summary counts across all categories |

---

## ☁️ Deployment Guide

### Deploying the Backend (e.g., Render / Railway)
1. In `backend/jobvani_admin/settings.py`, verify `STATIC_ROOT` and `WhiteNoiseMiddleware` (already configured).
2. Set Build Command:
   ```bash
   pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput
   ```
3. Set Start Command:
   ```bash
   gunicorn jobvani_admin.wsgi:application
   ```

### Deploying the Frontend (e.g., Vercel / Netlify / GitHub Pages)
1. In `app.js` (Line 1836), update `DJANGO_API_BASE` from `http://127.0.0.1:8000/api` to your live deployed backend domain:
   ```javascript
   const DJANGO_API_BASE = 'https://your-backend-domain.onrender.com/api';
   ```
2. Deploy the root static files (`index.html`, `styles.css`, `app.js`, `icons/`).

---

## 👤 Author & Credits

* **Developer:** [Hemanth Charan Polampalli](https://github.com/polampallihemanthcharan)
* **Email:** p.hemanthcharan0@gmail.com
* **Project Name:** Job Vani

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
