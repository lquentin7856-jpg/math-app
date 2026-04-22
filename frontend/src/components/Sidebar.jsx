import { Link } from 'react-router-dom';

const links = [
  ['Dashboard', '/'],
  ['Exercises', '/exercises'],
  ['Flashcards', '/flashcards'],
  ['Notes', '/notes'],
  ['Formulas', '/formulas'],
  ['Graphs', '/graphs'],
  ['AI Helper', '/ai']
];

export default function Sidebar({ darkMode, setDarkMode }) {
  return (
    <aside className="w-56 min-h-screen bg-slate-900 p-4 text-slate-100">
      <h1 className="text-2xl font-bold mb-6">MathMaster</h1>
      <nav className="space-y-2">
        {links.map(([label, to]) => (
          <Link key={to} to={to} className="block rounded px-3 py-2 hover:bg-slate-700">
            {label}
          </Link>
        ))}
      </nav>
      <button className="mt-8 w-full rounded bg-slate-700 px-3 py-2" onClick={() => setDarkMode((d) => !d)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </aside>
  );
}
