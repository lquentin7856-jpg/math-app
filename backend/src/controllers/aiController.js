import { generateExercise } from '../services/exerciseService.js';

const explanations = {
  derivative: 'A derivative measures how fast a function changes with respect to x.',
  integral: 'An integral accumulates quantities, often interpreted as area under a curve.',
  algebra: 'Algebra focuses on symbols, equations, and structure of expressions.'
};

export const askAi = async (req, res) => {
  const { prompt } = req.body;
  const key = Object.keys(explanations).find((k) => prompt.toLowerCase().includes(k));

  res.json({
    answer: key
      ? explanations[key]
      : 'Try breaking your question into topic + concept. Example: "Explain chain rule in calculus".'
  });
};

export const aiGenerateExercise = async (req, res) => {
  const { topic = 'Algebra', difficulty = 'Easy' } = req.body;
  const exercise = generateExercise(topic, difficulty);
  res.json(exercise);
};
