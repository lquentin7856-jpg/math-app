import Flashcard from '../models/Flashcard.js';

export const createFlashcard = async (req, res) => {
  const flashcard = await Flashcard.create({ ...req.body, user: req.userId });
  res.status(201).json(flashcard);
};

export const getDueFlashcards = async (req, res) => {
  const cards = await Flashcard.find({
    user: req.userId,
    nextReviewDate: { $lte: new Date() }
  }).sort({ nextReviewDate: 1 });
  res.json(cards);
};

export const reviewFlashcard = async (req, res) => {
  const { quality } = req.body; // quality: 1 (hard) to 3 (easy)
  const card = await Flashcard.findOne({ _id: req.params.id, user: req.userId });
  if (!card) return res.status(404).json({ message: 'Flashcard not found' });

  // Simple spaced repetition: multiply interval by quality.
  card.intervalDays = Math.max(1, Math.round(card.intervalDays * quality));
  card.reviewCount += 1;

  const next = new Date();
  next.setDate(next.getDate() + card.intervalDays);
  card.nextReviewDate = next;

  await card.save();
  res.json(card);
};
