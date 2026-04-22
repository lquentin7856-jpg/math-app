const generators = {
  Algebra: {
    Easy: () => {
      const a = rand(1, 10);
      const b = rand(1, 10);
      return make(`Solve for x: x + ${a} = ${a + b}`, `${b}`);
    },
    Medium: () => {
      const a = rand(2, 8);
      const b = rand(1, 12);
      return make(`Solve for x: ${a}x = ${a * b}`, `${b}`);
    },
    Hard: () => {
      const r1 = rand(1, 9);
      const r2 = rand(1, 9);
      return make(`Solve: x² - ${(r1 + r2)}x + ${r1 * r2} = 0 (smallest root)`, `${Math.min(r1, r2)}`);
    }
  },
  Calculus: {
    Easy: () => {
      const n = rand(1, 5);
      return make(`d/dx (x^${n})`, `${n}x^${n - 1}`);
    },
    Medium: () => {
      const a = rand(2, 6);
      return make(`∫ ${a}x dx`, `${a / 2}x^2 + C`);
    },
    Hard: () => make('Derivative of sin(x) * cos(x)', 'cos(2x)')
  },
  Geometry: {
    Easy: () => {
      const s = rand(2, 12);
      return make(`Area of a square of side ${s}`, `${s * s}`);
    },
    Medium: () => {
      const b = rand(4, 10);
      const h = rand(4, 12);
      return make(`Area of triangle with base ${b} and height ${h}`, `${(b * h) / 2}`);
    },
    Hard: () => {
      const r = rand(2, 9);
      return make(`Circumference of a circle radius ${r} (in terms of π)`, `${2 * r}π`);
    }
  },
  Probability: {
    Easy: () => make('Probability of getting heads in one fair coin toss', '1/2'),
    Medium: () => make('Probability of rolling an even number on a fair die', '1/2'),
    Hard: () => make('Probability of exactly 2 heads in 3 fair tosses', '3/8')
  }
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const make = (question, answer) => ({ question, answer: String(answer) });

export const generateExercise = (topic, difficulty) => generators[topic][difficulty]();
