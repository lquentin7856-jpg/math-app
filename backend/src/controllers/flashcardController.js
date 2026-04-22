import { Flashcard } from '../models/Flashcard.js';
import { updateCardSchedule } from '../services/flashcardService.js';

export const createFlashcard = async (req, res) => {
  const card = await Flashcard.create({ ...req.body, user: req.user.id });
  res.status(201).json(card);
};

export const getReviewCards = async (req, res) => {
  const cards = await Flashcard.find({
    user: req.user.id,
    nextReviewDate: { $lte: new Date() }
  }).sort({ nextReviewDate: 1 });

  res.json(cards);
};

export const reviewFlashcard = async (req, res) => {
  const { qualityScore } = req.body;
  const card = await Flashcard.findOne({ _id: req.params.id, user: req.user.id });
  if (!card) return res.status(404).json({ message: 'Card not found' });

  updateCardSchedule(card, qualityScore);
  await card.save();
  return res.json(card);
};
