import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const createToken = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: 'Email already in use' });

  const user = await User.create({ name, email, password, lastActiveAt: new Date() });
  return res.status(201).json({
    token: createToken(user),
    user: { id: user._id, name: user.name, email: user.email }
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  user.lastActiveAt = new Date();
  await user.save();

  return res.json({
    token: createToken(user),
    user: { id: user._id, name: user.name, email: user.email, streak: user.streak }
  });
};
