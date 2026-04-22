import { getAiResponse } from '../services/aiService.js';

export const askAiHelper = (req, res) => {
  const response = getAiResponse(req.body);
  res.json(response);
};
