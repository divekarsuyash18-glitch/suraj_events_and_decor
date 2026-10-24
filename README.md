# Suraj Events and Decor

Responsive homepage and minimal Django foundation for a local event decoration business.

## Project structure

```text
frontend/                 React 19 + Vite + Tailwind CSS 4 homepage
  src/App.jsx             Homepage sections and interactions
  src/config.js           Business contact placeholders and WhatsApp URL helper
backend/                  Minimal Django project (SQLite defaults)
  config/                 Django settings and ASGI/WSGI entry points
  requirements.txt        Backend dependencies
```

## Prerequisites

- Node.js 20.19+ or 22.12+
- Python 3.10+

## Run the frontend

```powershell
cd frontend
pnpm install
pnpm dev
```

Open the Vite URL printed in the terminal (normally http://localhost:5173).
Run `pnpm build` to create the production bundle.

## Run the backend

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py check
python manage.py runserver
```

The Django development server runs at http://127.0.0.1:8000. The backend is a setup foundation only; there are no business APIs, models, or enquiry persistence yet.

## Business setup

Update `frontend/src/config.js` with the verified business phone and WhatsApp numbers before launch. The displayed `+91 00000 00000` is an intentionally invalid mock number, and WhatsApp links stay on the contact section until a real number is configured. The enquiry form is a labelled, validated preview and does not store submissions.

Gallery photos are remote Unsplash sample inspiration, not verified Suraj Events and Decor work. Replace these references with approved business photography when available. Contact details, prices, reviews, and social accounts have not been invented.
