import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Layout } from './components/Layout.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { ExercisesPage } from './pages/ExercisesPage.jsx';
import { FlashcardsPage } from './pages/FlashcardsPage.jsx';
import { NotesPage } from './pages/NotesPage.jsx';
import { FormulaLibraryPage } from './pages/FormulaLibraryPage.jsx';
import { GraphPage } from './pages/GraphPage.jsx';
import { AIHelperPage } from './pages/AIHelperPage.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('mathmaster_dark') === '1');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('mathmaster_dark', darkMode ? '1' : '0');
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode((v) => !v)} />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="exercises" element={<ExercisesPage />} />
        <Route path="flashcards" element={<FlashcardsPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="formulas" element={<FormulaLibraryPage />} />
        <Route path="graphs" element={<GraphPage />} />
        <Route path="ai-helper" element={<AIHelperPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
