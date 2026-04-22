import ExerciseResult from '../models/ExerciseResult.js';
import User from '../models/User.js';

export const getDashboard = async (req, res) => {
  const [exerciseCount, correctCount, latestTopics, user] = await Promise.all([
    ExerciseResult.countDocuments({ user: req.userId }),
    ExerciseResult.countDocuments({ user: req.userId, isCorrect: true }),
    ExerciseResult.find({ user: req.userId }).sort({ createdAt: -1 }).limit(5).select('topic createdAt'),
    User.findById(req.userId).select('streak')
  ]);

  const progress = exerciseCount === 0 ? 0 : Math.round((correctCount / exerciseCount) * 100);

  res.json({
    exercisesDone: exerciseCount,
    progress,
    lastStudiedTopics: latestTopics.map((e) => e.topic),
    streak: user?.streak || 0
  });
};
