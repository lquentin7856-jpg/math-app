import mongoose from 'mongoose';

const formulaSchema = new mongoose.Schema(
  {
    category: { type: String, enum: ['Derivatives', 'Integrals', 'Identities'], required: true },
    title: { type: String, required: true },
    expression: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true }
);

export const Formula = mongoose.model('Formula', formulaSchema);
