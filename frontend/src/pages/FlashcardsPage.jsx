import { useEffect, useState } from 'react';
import api from '../api/client';

export default function FlashcardsPage() {
  const [form, setForm] = useState({ front: '', back: '', category: 'General' });
  const [cards, setCards] = useState([]);

  const loadDue = () => api.get('/flashcards/due').then((res) => setCards(res.data));
  useEffect(() => { loadDue(); }, []);

  const addCard = async () => {
    await api.post('/flashcards', form);
    setForm({ front: '', back: '', category: 'General' });
    loadDue();
  };

  const review = async (id, quality) => {
    await api.patch(`/flashcards/${id}/review`, { quality });
    loadDue();
  };

  return (
    <div className="space-y-4">
      <div className="card space-y-2">
        <h3 className="font-bold">Create Flashcard</h3>
        <input className="input" placeholder="Front" value={form.front} onChange={(e) => setForm({ ...form, front: e.target.value })} />
        <input className="input" placeholder="Back" value={form.back} onChange={(e) => setForm({ ...form, back: e.target.value })} />
        <input className="input" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <button className="btn" onClick={addCard}>Save card</button>
      </div>
      <div className="space-y-3">
        {cards.map((card) => (
          <div key={card._id} className="card">
            <p><strong>Q:</strong> {card.front}</p>
            <p><strong>A:</strong> {card.back}</p>
            <div className="mt-2 flex gap-2">
              <button className="rounded border px-3 py-1" onClick={() => review(card._id, 1)}>Hard</button>
              <button className="rounded border px-3 py-1" onClick={() => review(card._id, 2)}>Good</button>
              <button className="rounded border px-3 py-1" onClick={() => review(card._id, 3)}>Easy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
