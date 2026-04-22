import { useEffect, useState } from 'react';
import { api } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [data, setData] = useState({ exercisesDone: 0, progressPercent: 0, lastStudiedTopics: [], notesCount: 0 });

  useEffect(() => {
    api.get('/dashboard').then((res) => setData(res.data)).catch(() => null);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="text-sm text-slate-500">Track your progress and keep your streak alive, {user?.name}.</p>
      <div className="grid gap-3 md:grid-cols-4">
        <div className="card"><p className="text-sm">Exercises done</p><p className="text-2xl font-semibold">{data.exercisesDone}</p></div>
        <div className="card"><p className="text-sm">Progress %</p><p className="text-2xl font-semibold">{data.progressPercent}%</p></div>
        <div className="card"><p className="text-sm">Notes</p><p className="text-2xl font-semibold">{data.notesCount}</p></div>
        <div className="card"><p className="text-sm">Daily streak</p><p className="text-2xl font-semibold">{user?.streak || 0} 🔥</p></div>
      </div>
      <div className="card">
        <h3 className="mb-2 text-lg font-semibold">Last studied topics</h3>
        <ul className="list-disc pl-4">
          {data.lastStudiedTopics.map((item, i) => (
            <li key={`${item.topic}-${i}`}>{item.topic}</li>
          ))}
          {!data.lastStudiedTopics.length && <li>Start practicing to see your history.</li>}
        </ul>
      </div>
    </div>
  );
};
