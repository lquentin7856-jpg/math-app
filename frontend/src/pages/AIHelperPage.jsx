import { useState } from 'react';
import { api } from '../api/client.js';

export const AIHelperPage = () => {
  const [question, setQuestion] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [response, setResponse] = useState(null);

  const ask = async () => {
    const { data } = await api.post('/ai/ask', { question, topic, difficulty });
    setResponse(data);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">AI Helper (Basic)</h2>
      <div className="card space-y-2">
        <textarea className="h-24 w-full rounded border p-2" placeholder="Ask a math question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <div className="grid gap-2 md:grid-cols-3">
          <input className="rounded border p-2" placeholder="Topic (optional)" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <select className="rounded border p-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button className="rounded bg-indigo-600 p-2 text-white" onClick={ask}>Ask</button>
        </div>
      </div>
      {response && (
        <div className="card">
          <p className="mb-2">{response.message}</p>
          {response.payload && (
            <div className="rounded bg-slate-50 p-3 dark:bg-slate-700">
              <p><strong>Question:</strong> {response.payload.question}</p>
              <p><strong>Answer:</strong> {response.payload.answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
