import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { createNote, getNotes } from '../controllers/noteController.js';

const router = Router();

router.post('/', authMiddleware, createNote);
router.get('/', authMiddleware, getNotes);

export default router;
