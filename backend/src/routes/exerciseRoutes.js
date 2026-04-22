import { Router } from 'express';
import { createExercise, submitExercise } from '../controllers/exerciseController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.post('/generate', protect, createExercise);
router.post('/submit', protect, submitExercise);

export default router;
