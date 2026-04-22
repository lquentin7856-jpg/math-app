import ExerciseResult from '../models/ExerciseResult.js';
import User from '../models/User.js';
import { generateExercise } from '../services/exerciseService.js';
import { updateStreak } from '../utils/streak.js';

export const createExercise = async (req, res) => {
  const { topic, difficulty } = req.body;
  const exercise = generateExercise(topic, difficulty);
  res.json(exercise);
};

export const submitExercise = async (req, res) => {
  const { topic, difficulty, question, expectedAnswer, userAnswer } = req.body;

  const normalize = (value) => String(value).trim().toLowerCase().replace(/\s+/g, '');
  const isCorrect = normalize(userAnswer) === normalize(expectedAnswer);

  const result = await ExerciseResult.create({
    user: req.userId,
    topic,
    difficulty,
    question,
    expectedAnswer,
    userAnswer,
    isCorrect,
    score: isCorrect ? 1 : 0
  });

  const user = await User.findById(req.userId);
  updateStreak(user);
  await user.save();

  res.status(201).json(result);
};
