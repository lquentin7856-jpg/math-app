import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const links = [
  ['/', 'Dashboard'],
  ['/exercises', 'Exercises'],
  ['/flashcards', 'Flashcards'],
  ['/notes', 'Notes'],
  ['/formulas', 'Formula Library'],
  ['/graphs', 'Graphs'],
  ['/ai-helper', 'AI Helper']
];

export const Layout = ({ darkMode, toggleDarkMode }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside className="min-h-screen border-r border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h1 className="mb-4 text-2xl font-bold text-indigo-600">MathMaster</h1>
          <p className="mb-4 text-sm">Hi, {user?.name || 'Learner'} 👋</p>
          <nav className="space-y-1">
            {links.map(([to, label]) => (
              <Link key={to} to={to} className="block rounded px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700">
                {label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggleDarkMode}
            className="mt-4 w-full rounded bg-slate-200 px-3 py-2 text-sm dark:bg-slate-700"
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
          <button onClick={logout} className="mt-2 w-full rounded bg-red-500 px-3 py-2 text-sm text-white">
            Logout
          </button>
        </aside>
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
