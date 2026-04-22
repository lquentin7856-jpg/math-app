import { useState } from 'react';
import api from '../api/client';

export default function AIHelperPage() {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');

  const ask = async () => {
    const { data } = await api.post('/ai/ask', { prompt });
    setReply(data.answer);
  };

  const generate = async () => {
    const { data } = await api.post('/ai/exercise', { topic: 'Calculus', difficulty: 'Medium' });
    setReply(`Generated exercise: ${data.question} | Answer: ${data.answer}`);
  };

  return (
    <div className="card space-y-3 max-w-3xl">
      <h3 className="font-bold">AI Helper (basic)</h3>
      <textarea className="input" placeholder="Ask a math question" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <div className="flex gap-3">
        <button className="btn" onClick={ask}>Ask</button>
        <button className="rounded border px-4 py-2" onClick={generate}>Generate exercise</button>
      </div>
      {reply && <p>{reply}</p>}
    </div>
  );
}
