const exerciseBank = {
  Algebra: {
    Easy: [
      { question: 'Solve: 2x + 3 = 11', answer: '4', solution: '2x = 8 so x = 4' },
      { question: 'Simplify: 3a + 2a', answer: '5a', solution: 'Combine like terms' }
    ],
    Medium: [
      { question: 'Solve: x^2 - 5x + 6 = 0', answer: '2,3', solution: '(x-2)(x-3)=0' }
    ],
    Hard: [
      { question: 'Solve system: x+y=7 and x-y=1', answer: 'x=4,y=3', solution: 'Add equations: 2x=8' }
    ]
  },
  Calculus: {
    Easy: [{ question: 'Derivative of x^2', answer: '2x', solution: 'Power rule: d/dx x^n = nx^(n-1)' }],
    Medium: [{ question: 'Integral of 2x dx', answer: 'x^2 + C', solution: 'Reverse power rule' }],
    Hard: [{ question: 'Derivative of sin(x)cos(x)', answer: 'cos(2x)', solution: 'Product rule simplification' }]
  },
  Geometry: {
    Easy: [{ question: 'Area of rectangle 4x5', answer: '20', solution: 'A = l*w' }],
    Medium: [{ question: 'Circumference if r=3', answer: '6π', solution: 'C = 2πr' }],
    Hard: [{ question: 'Pythagoras with legs 5 and 12', answer: '13', solution: 'sqrt(25+144)=13' }]
  },
  Probability: {
    Easy: [{ question: 'Probability of heads (fair coin)', answer: '1/2', solution: 'Two equally likely outcomes' }],
    Medium: [{ question: 'Roll a 6 on die', answer: '1/6', solution: 'One favorable out of six' }],
    Hard: [{ question: 'Two heads in two flips', answer: '1/4', solution: '1/2 * 1/2' }]
  }
};

export const generateExercise = (topic, difficulty) => {
  const set = exerciseBank[topic]?.[difficulty] || [];
  if (!set.length) {
    return {
      question: `Create a ${difficulty} ${topic} exercise and solve it`,
      answer: 'N/A',
      solution: 'Custom exercise placeholder'
    };
  }
  const randomIndex = Math.floor(Math.random() * set.length);
  return set[randomIndex];
};
