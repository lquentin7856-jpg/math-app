import { useState } from 'react';
import api from '../api/client';

export default function ExercisesPage() {
  const [topic, setTopic] = useState('Algebra');
  const [difficulty, setDifficulty] = useState('Easy');
  const [exercise, setExercise] = useState(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null);

  const generate = async () => {
    const { data } = await api.post('/exercises/generate', { topic, difficulty });
    setExercise(data);
    setResult(null);
    setAnswer('');
  };

  const submit = async () => {
    const { data } = await api.post('/exercises/submit', {
      topic,
      difficulty,
      question: exercise.question,
      expectedAnswer: exercise.answer,
      userAnswer: answer
    });
    setResult(data.isCorrect ? '✅ Correct' : '❌ Incorrect');
  };

  return (
    <div className="space-y-4">
      <div className="card grid gap-3 md:grid-cols-3">
        <select className="input" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {['Algebra', 'Calculus', 'Geometry', 'Probability'].map((t) => <option key={t}>{t}</option>)}
        </select>
        <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          {['Easy', 'Medium', 'Hard'].map((d) => <option key={d}>{d}</option>)}
        </select>
        <button className="btn" onClick={generate}>Generate Exercise</button>
      </div>
      {exercise && (
        <div className="card space-y-3">
          <p className="font-semibold">{exercise.question}</p>
          <input className="input" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Your answer" />
          <div className="flex gap-3">
            <button className="btn" onClick={submit}>Submit</button>
            <button className="rounded border px-4 py-2" onClick={() => alert(exercise.answer)}>Show solution</button>
          </div>
          {result && <p>{result}</p>}
        </div>
      )}
    </div>
  );
}
