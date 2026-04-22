import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ExercisesPage from './pages/ExercisesPage';
import FlashcardsPage from './pages/FlashcardsPage';
import NotesPage from './pages/NotesPage';
import FormulasPage from './pages/FormulasPage';
import GraphsPage from './pages/GraphsPage';
import AIHelperPage from './pages/AIHelperPage';

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/auth" element={user ? <Navigate to="/" /> : <AuthPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute user={user}>
            <Layout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/exercises" element={<ExercisesPage />} />
                <Route path="/flashcards" element={<FlashcardsPage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/formulas" element={<FormulasPage />} />
                <Route path="/graphs" element={<GraphsPage />} />
                <Route path="/ai" element={<AIHelperPage />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
