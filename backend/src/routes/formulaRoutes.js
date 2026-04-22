import { Router } from 'express';
import { getFormulas } from '../controllers/formulaController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/', protect, getFormulas);

export default router;
