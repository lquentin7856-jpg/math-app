import { ExerciseResult } from '../models/ExerciseResult.js';
import { generateExercise } from '../services/exerciseService.js';

export const getGeneratedExercise = (req, res) => {
  const { topic = 'Algebra', difficulty = 'Easy' } = req.query;
  const exercise = generateExercise(topic, difficulty);
  res.json(exercise);
};

export const submitExercise = async (req, res) => {
  const { topic, difficulty, question, expectedAnswer, userAnswer } = req.body;

  const normalizedExpected = String(expectedAnswer).toLowerCase().replace(/\s+/g, '');
  const normalizedUser = String(userAnswer).toLowerCase().replace(/\s+/g, '');
  const isCorrect = normalizedExpected === normalizedUser;

  const result = await ExerciseResult.create({
    user: req.user.id,
    topic,
    difficulty,
    question,
    expectedAnswer,
    userAnswer,
    isCorrect,
    score: isCorrect ? 10 : 0
  });

  res.status(201).json(result);
};
