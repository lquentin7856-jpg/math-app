import { Router } from 'express';
import { createFlashcard, getDueFlashcards, reviewFlashcard } from '../controllers/flashcardController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/due', protect, getDueFlashcards);
router.post('/', protect, createFlashcard);
router.patch('/:id/review', protect, reviewFlashcard);

export default router;
