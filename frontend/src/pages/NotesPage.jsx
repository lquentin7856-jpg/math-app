import { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import api from '../api/client';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', category: 'General', content: '' });

  const load = () => api.get('/notes').then((res) => setNotes(res.data));
  useEffect(() => { load(); }, []);

  const save = async () => {
    await api.post('/notes', form);
    setForm({ title: '', category: 'General', content: '' });
    load();
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="card space-y-2">
        <h3 className="font-bold">Create Note</h3>
        <input className="input" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="input" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <textarea className="input min-h-48" placeholder="Write note (supports LaTeX in $$ $$ blocks)" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <button className="btn" onClick={save}>Save note</button>
      </div>
      <div className="space-y-3">
        {notes.map((note) => (
          <div key={note._id} className="card">
            <h4 className="font-semibold">{note.title} ({note.category})</h4>
            <p className="text-sm mb-2">{note.content}</p>
            {note.content.includes('$$') && <BlockMath math={note.content.replace(/\$\$/g, '')} />}
          </div>
        ))}
      </div>
    </div>
  );
}
