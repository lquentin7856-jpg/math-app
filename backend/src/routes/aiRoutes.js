import { Router } from 'express';
import { askAi, aiGenerateExercise } from '../controllers/aiController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.post('/ask', protect, askAi);
router.post('/exercise', protect, aiGenerateExercise);

export default router;
