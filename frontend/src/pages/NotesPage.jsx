import { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { api } from '../api/client.js';

export const NotesPage = () => {
  const [note, setNote] = useState({ title: '', content: '', category: 'General' });
  const [notes, setNotes] = useState([]);

  const load = () => api.get('/notes').then((res) => setNotes(res.data));

  useEffect(() => {
    load().catch(() => null);
  }, []);

  const save = async (e) => {
    e.preventDefault();
    await api.post('/notes', note);
    setNote({ title: '', content: '', category: 'General' });
    load();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Notes / Fiches</h2>
      <form className="card space-y-2" onSubmit={save}>
        <input className="w-full rounded border p-2" placeholder="Title" value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} required />
        <input className="w-full rounded border p-2" placeholder="Category" value={note.category} onChange={(e) => setNote({ ...note, category: e.target.value })} />
        <textarea className="h-32 w-full rounded border p-2" placeholder="Write rich text or LaTeX, e.g. x^2 + y^2 = z^2" value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} required />
        <div>
          <p className="text-sm text-slate-500">LaTeX preview</p>
          <BlockMath math={note.content || 'x^2'} />
        </div>
        <button className="rounded bg-indigo-600 px-3 py-2 text-white">Save note</button>
      </form>
      {notes.map((item) => (
        <div className="card" key={item._id}>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-xs text-slate-500">{item.category}</p>
          <p className="whitespace-pre-wrap">{item.content}</p>
        </div>
      ))}
    </div>
  );
};
