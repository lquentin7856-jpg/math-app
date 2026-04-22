import { Router } from 'express';
import { getFormulas } from '../controllers/formulaController.js';

const router = Router();

router.get('/', getFormulas);

export default router;
