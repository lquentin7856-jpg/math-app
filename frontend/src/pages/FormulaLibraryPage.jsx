import { useEffect, useState } from 'react';
import { api } from '../api/client.js';
import { defaultFormulas } from '../data/defaultFormulas.js';

export const FormulaLibraryPage = () => {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [formulas, setFormulas] = useState(defaultFormulas);

  useEffect(() => {
    api
      .get('/formulas', { params: { q, category } })
      .then((res) => setFormulas(res.data.length ? res.data : defaultFormulas))
      .catch(() => setFormulas(defaultFormulas));
  }, [q, category]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Formula Library</h2>
      <div className="card grid gap-2 md:grid-cols-2">
        <input className="rounded border p-2" placeholder="Search formula" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className="rounded border p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          <option>Derivatives</option>
          <option>Integrals</option>
          <option>Identities</option>
        </select>
      </div>
      <div className="space-y-2">
        {formulas.map((formula, i) => (
          <div key={`${formula.title}-${i}`} className="card">
            <p className="text-xs uppercase text-indigo-500">{formula.category}</p>
            <h3 className="font-semibold">{formula.title}</h3>
            <p>{formula.expression}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
