import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import {
  createFlashcard,
  getReviewCards,
  reviewFlashcard
} from '../controllers/flashcardController.js';

const router = Router();

router.post('/', authMiddleware, createFlashcard);
router.get('/review', authMiddleware, getReviewCards);
router.patch('/:id/review', authMiddleware, reviewFlashcard);

export default router;
