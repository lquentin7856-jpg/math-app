import { formulaLibrary } from '../services/formulaLibrary.js';

export const getFormulas = async (req, res) => {
  const search = req.query.search?.toLowerCase() || '';
  const category = req.query.category;

  const filtered = formulaLibrary.filter((formula) => {
    const matchesSearch =
      formula.name.toLowerCase().includes(search) ||
      formula.formula.toLowerCase().includes(search);

    const matchesCategory = category ? formula.category === category : true;
    return matchesSearch && matchesCategory;
  });

  res.json(filtered);
};
