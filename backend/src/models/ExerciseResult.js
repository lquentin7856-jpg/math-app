import mongoose from 'mongoose';

const exerciseResultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    topic: {
      type: String,
      enum: ['Algebra', 'Calculus', 'Geometry', 'Probability'],
      required: true
    },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    question: { type: String, required: true },
    expectedAnswer: { type: String, required: true },
    userAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    score: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('ExerciseResult', exerciseResultSchema);
