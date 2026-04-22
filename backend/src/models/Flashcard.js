import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    front: { type: String, required: true },
    back: { type: String, required: true },
    category: { type: String, default: 'General' },
    intervalDays: { type: Number, default: 1 },
    nextReviewDate: { type: Date, default: Date.now },
    reviewCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Flashcard', flashcardSchema);
