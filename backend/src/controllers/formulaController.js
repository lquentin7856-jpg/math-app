import { Formula } from '../models/Formula.js';

export const getFormulas = async (req, res) => {
  const { category, q } = req.query;
  const query = {};

  if (category) query.category = category;
  if (q) {
    query.$or = [
      { title: { $regex: q, $options: 'i' } },
      { expression: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } }
    ];
  }

  const formulas = await Formula.find(query).sort({ category: 1, title: 1 });
  res.json(formulas);
};
