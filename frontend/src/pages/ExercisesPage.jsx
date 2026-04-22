import { useState } from 'react';
import { api } from '../api/client.js';

const topics = ['Algebra', 'Calculus', 'Geometry', 'Probability'];
const levels = ['Easy', 'Medium', 'Hard'];

export const ExercisesPage = () => {
  const [topic, setTopic] = useState('Algebra');
  const [difficulty, setDifficulty] = useState('Easy');
  const [exercise, setExercise] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const loadExercise = async () => {
    const { data } = await api.get('/exercises/generate', { params: { topic, difficulty } });
    setExercise(data);
    setAnswer('');
    setFeedback('');
    setShowSolution(false);
  };

  const submit = async () => {
    const { data } = await api.post('/exercises/submit', {
      topic,
      difficulty,
      question: exercise.question,
      expectedAnswer: exercise.answer,
      userAnswer: answer
    });

    setFeedback(data.isCorrect ? 'Correct ✅ (+10)' : 'Try again ❌');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Exercises</h2>
      <div className="card grid gap-3 md:grid-cols-3">
        <select className="rounded border p-2" value={topic} onChange={(e) => setTopic(e.target.value)}>{topics.map((t) => <option key={t}>{t}</option>)}</select>
        <select className="rounded border p-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>{levels.map((l) => <option key={l}>{l}</option>)}</select>
        <button className="rounded bg-indigo-600 p-2 text-white" onClick={loadExercise}>Generate exercise</button>
      </div>

      {exercise && (
        <div className="card space-y-3">
          <p className="font-semibold">{exercise.question}</p>
          <input className="w-full rounded border p-2" placeholder="Your answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <div className="flex gap-2">
            <button className="rounded bg-green-600 px-3 py-2 text-white" onClick={submit}>Submit</button>
            <button className="rounded bg-slate-600 px-3 py-2 text-white" onClick={() => setShowSolution((v) => !v)}>Show solution</button>
          </div>
          {showSolution && <p className="text-sm text-slate-500">{exercise.solution}</p>}
          {feedback && <p>{feedback}</p>}
        </div>
      )}
    </div>
  );
};
