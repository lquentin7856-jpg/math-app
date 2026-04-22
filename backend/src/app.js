import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import exerciseRoutes from './routes/exerciseRoutes.js';
import flashcardRoutes from './routes/flashcardRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import formulaRoutes from './routes/formulaRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/formulas', formulaRoutes);
app.use('/api/ai', aiRoutes);

export default app;
