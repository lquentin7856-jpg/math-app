import { useEffect, useState } from 'react';
import api from '../api/client';

export default function FormulasPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);

  const load = () =>
    api
      .get('/formulas', { params: { search, category: category || undefined } })
      .then((res) => setItems(res.data));

  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-4">
      <div className="card flex gap-3">
        <input className="input" placeholder="Search formulas" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {['Derivatives', 'Integrals', 'Identities'].map((c) => <option key={c}>{c}</option>)}
        </select>
        <button className="btn" onClick={load}>Search</button>
      </div>
      {items.map((item) => (
        <div key={item.name} className="card">
          <h4 className="font-semibold">{item.name} <span className="text-xs">({item.category})</span></h4>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>
  );
}
