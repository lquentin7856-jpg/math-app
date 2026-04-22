import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { getGeneratedExercise, submitExercise } from '../controllers/exerciseController.js';

const router = Router();

router.get('/generate', authMiddleware, getGeneratedExercise);
router.post('/submit', authMiddleware, submitExercise);

export default router;
