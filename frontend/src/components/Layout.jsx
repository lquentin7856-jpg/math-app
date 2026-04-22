import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex bg-slate-100 dark:bg-slate-950 dark:text-slate-50 min-h-screen">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
