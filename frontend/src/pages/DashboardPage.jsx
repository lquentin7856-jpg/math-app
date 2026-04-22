import { useEffect, useState } from 'react';
import api from '../api/client';

export default function DashboardPage() {
  const [stats, setStats] = useState({ exercisesDone: 0, progress: 0, lastStudiedTopics: [], streak: 0 });

  useEffect(() => {
    api.get('/dashboard').then((res) => setStats(res.data));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card"><h3 className="font-bold">Exercises Done</h3><p className="text-3xl">{stats.exercisesDone}</p></div>
      <div className="card"><h3 className="font-bold">Progress</h3><p className="text-3xl">{stats.progress}%</p></div>
      <div className="card"><h3 className="font-bold">Daily Streak</h3><p className="text-3xl">🔥 {stats.streak}</p></div>
      <div className="card"><h3 className="font-bold">Last Topics</h3><p>{stats.lastStudiedTopics.join(', ') || 'No activity yet'}</p></div>
    </div>
  );
}
