# MathMaster

MathMaster is a full-stack web application for math learning and revision.

## Tech Stack
- **Frontend**: React + TailwindCSS (Vite)
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)

## Features

### 1) User System
- Sign up / Login with JWT auth
- User-specific data for exercises, notes, flashcards, dashboard stats

### 2) Dashboard
- Exercises completed
- Progress percentage (correct answers ratio)
- Last studied topics
- Daily streak

### 3) Exercises Module
- Topics: Algebra, Calculus, Geometry, Probability
- Difficulty: Easy / Medium / Hard
- Each exercise has question, answer input, and show solution
- Stores user results and score

### 4) Flashcards (Formulas)
- Create flashcards (front/back/category)
- Simple spaced repetition based on review quality
- Review due cards

### 5) Notes / Fiches
- Notes CRUD (create + list in this version)
- Category support
- LaTeX rendering for formula snippets (use `$$ ... $$`)

### 6) Formula Library
- Preloaded formulas by categories:
  - Derivatives
  - Integrals
  - Identities
- Search + category filter

### 7) Graph Visualizer
- Plot functions from user input
- Example: `x*x` for \(y=x^2\)

### 8) AI Helper (basic)
- Ask simple conceptual questions
- Generate an exercise from topic/difficulty

### 9) UI / UX
- Clean modern layout
- Sidebar navigation:
  - Dashboard
  - Exercises
  - Flashcards
  - Notes
  - Formulas
  - Graphs
  - AI Helper

### 10) Bonus
- Dark mode toggle
- Progress tracking
- Daily streak system

---

## Project Structure

```text
mathmaster/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/db.js
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
├── package.json
└── README.md
```

---

## Local Setup

### Prerequisites
- Node.js 18+
- npm 9+
- MongoDB running locally (or cloud URI)

### 1) Install dependencies
```bash
npm install
npm run install:all
```

### 2) Configure backend env
```bash
cp backend/.env.example backend/.env
```
Then update values in `backend/.env` if needed.

### 3) Run frontend + backend
```bash
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## Notes
- The AI helper in this version is intentionally basic and rule-based.
- Exercise generation is deterministic/randomized templates and can be extended.
- Graph evaluator uses JavaScript expression syntax for quick plotting.
