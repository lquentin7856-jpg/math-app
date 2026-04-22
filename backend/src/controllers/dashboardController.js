import { ExerciseResult } from '../models/ExerciseResult.js';
import { Note } from '../models/Note.js';

export const getDashboard = async (req, res) => {
  const userId = req.user.id;

  const [exerciseCount, correctCount, recentTopics, notesCount] = await Promise.all([
    ExerciseResult.countDocuments({ user: userId }),
    ExerciseResult.countDocuments({ user: userId, isCorrect: true }),
    ExerciseResult.find({ user: userId }).sort({ createdAt: -1 }).limit(5).select('topic createdAt -_id'),
    Note.countDocuments({ user: userId })
  ]);

  const progress = exerciseCount === 0 ? 0 : Math.round((correctCount / exerciseCount) * 100);

  return res.json({
    exercisesDone: exerciseCount,
    progressPercent: progress,
    lastStudiedTopics: recentTopics,
    notesCount
  });
};
