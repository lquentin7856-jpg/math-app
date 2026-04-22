# MathMaster

MathMaster is a full-stack math learning and revision web app.

## Tech Stack
- **Frontend:** React + TailwindCSS (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose

## Features
- Authentication (signup/login)
- Dashboard (exercise stats, progress %, recent topics)
- Exercise generator (Algebra, Calculus, Geometry, Probability with Easy/Medium/Hard)
- Flashcards with simple spaced repetition
- Notes/Fiches with LaTeX preview
- Formula library with category + search
- Graph visualizer for functions `f(x)`
- Basic AI helper (explanations + exercise generation)
- Dark mode, progress tracking, daily streak support

## Project Structure
```txt
math-app/
├── backend/
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── seed/
│           └── seedFormulas.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── data/
│       ├── pages/
│       └── utils/
└── README.md
```

## Local Setup

### 1) Backend setup
```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` with your MongoDB URI and JWT secret.

Run backend:
```bash
npm run dev
```

Optional: seed formula library
```bash
npm run seed
```

### 2) Frontend setup
```bash
cd ../frontend
npm install
```

(Optional) create `.env`:
```bash
VITE_API_URL=http://localhost:5000/api
```

Run frontend:
```bash
npm run dev
```

Open: `http://localhost:5173`

## API Summary
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/dashboard`
- `GET /api/exercises/generate`
- `POST /api/exercises/submit`
- `POST /api/flashcards`
- `GET /api/flashcards/review`
- `PATCH /api/flashcards/:id/review`
- `POST /api/notes`
- `GET /api/notes`
- `GET /api/formulas`
- `POST /api/ai/ask`

## Notes
- Rich text editing can be extended with libraries like TipTap or Quill.
- AI helper currently uses deterministic server logic for a safe/basic assistant.
- Exercise generation can later be upgraded with a larger question bank or AI model.
