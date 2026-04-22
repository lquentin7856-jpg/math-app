import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { Formula } from '../models/Formula.js';

dotenv.config();

const seedData = [
  { category: 'Derivatives', title: 'Power Rule', expression: 'd/dx (x^n) = n*x^(n-1)' },
  { category: 'Derivatives', title: 'Sine', expression: 'd/dx (sin x) = cos x' },
  { category: 'Integrals', title: 'Power Rule', expression: '∫x^n dx = x^(n+1)/(n+1) + C, n ≠ -1' },
  { category: 'Integrals', title: 'Exponential', expression: '∫e^x dx = e^x + C' },
  { category: 'Identities', title: 'Pythagorean', expression: 'sin²x + cos²x = 1' },
  { category: 'Identities', title: 'Difference of Squares', expression: 'a² - b² = (a-b)(a+b)' }
];

const run = async () => {
  await connectDB();
  await Formula.deleteMany({});
  await Formula.insertMany(seedData);
  console.log('✅ Formula library seeded');
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
