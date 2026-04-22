import { useEffect, useState } from 'react';
import { api } from '../api/client.js';

export const FlashcardsPage = () => {
  const [form, setForm] = useState({ front: '', back: '', category: 'General' });
  const [cards, setCards] = useState([]);

  const loadCards = () => api.get('/flashcards/review').then((res) => setCards(res.data));

  useEffect(() => {
    loadCards().catch(() => null);
  }, []);

  const createCard = async (e) => {
    e.preventDefault();
    await api.post('/flashcards', form);
    setForm({ front: '', back: '', category: 'General' });
    loadCards();
  };

  const review = async (id, score) => {
    await api.patch(`/flashcards/${id}/review`, { qualityScore: score });
    loadCards();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Flashcards (Spaced Repetition)</h2>
      <form className="card space-y-2" onSubmit={createCard}>
        <input className="w-full rounded border p-2" placeholder="Front (question)" value={form.front} onChange={(e) => setForm({ ...form, front: e.target.value })} required />
        <input className="w-full rounded border p-2" placeholder="Back (answer)" value={form.back} onChange={(e) => setForm({ ...form, back: e.target.value })} required />
        <input className="w-full rounded border p-2" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <button className="rounded bg-indigo-600 px-3 py-2 text-white">Create card</button>
      </form>
      <div className="space-y-2">
        {cards.map((card) => (
          <div key={card._id} className="card">
            <p className="font-semibold">Q: {card.front}</p>
            <p>A: {card.back}</p>
            <div className="mt-2 flex gap-2">
              <button className="rounded bg-red-500 px-2 py-1 text-white" onClick={() => review(card._id, 2)}>Hard</button>
              <button className="rounded bg-yellow-500 px-2 py-1 text-white" onClick={() => review(card._id, 4)}>Good</button>
              <button className="rounded bg-green-600 px-2 py-1 text-white" onClick={() => review(card._id, 5)}>Easy</button>
            </div>
          </div>
        ))}
        {!cards.length && <div className="card">No cards due for review.</div>}
      </div>
    </div>
  );
};
