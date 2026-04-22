import { generateExercise } from './exerciseService.js';

export const getAiResponse = ({ question, topic, difficulty }) => {
  if (topic) {
    const exercise = generateExercise(topic, difficulty || 'Easy');
    return {
      mode: 'exercise',
      message: `Here is a ${difficulty || 'Easy'} ${topic} exercise.`,
      payload: exercise
    };
  }

  const prompt = (question || '').toLowerCase();
  if (prompt.includes('derivative')) {
    return {
      mode: 'explanation',
      message: 'A derivative measures how a function changes. Example: d/dx(x^2)=2x.'
    };
  }

  return {
    mode: 'explanation',
    message:
      'Break problems into small steps: identify known values, apply the formula, then verify units and logic.'
  };
};
