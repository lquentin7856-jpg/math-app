import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { askAiHelper } from '../controllers/aiController.js';

const router = Router();

router.post('/ask', authMiddleware, askAiHelper);

export default router;
