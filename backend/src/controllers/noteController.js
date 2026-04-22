import Note from '../models/Note.js';

export const createNote = async (req, res) => {
  const note = await Note.create({ ...req.body, user: req.userId });
  res.status(201).json(note);
};

export const getNotes = async (req, res) => {
  const category = req.query.category;
  const query = { user: req.userId };
  if (category) query.category = category;

  const notes = await Note.find(query).sort({ updatedAt: -1 });
  res.json(notes);
};
