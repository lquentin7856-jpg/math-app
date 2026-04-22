import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    front: { type: String, required: true },
    back: { type: String, required: true },
    easeFactor: { type: Number, default: 2.5 },
    intervalDays: { type: Number, default: 1 },
    repetitions: { type: Number, default: 0 },
    nextReviewDate: { type: Date, default: Date.now },
    category: { type: String, default: 'General' }
  },
  { timestamps: true }
);

export const Flashcard = mongoose.model('Flashcard', flashcardSchema);
