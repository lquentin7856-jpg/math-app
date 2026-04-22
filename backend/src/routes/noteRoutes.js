import { Router } from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/', protect, getNotes);
router.post('/', protect, createNote);

export default router;
