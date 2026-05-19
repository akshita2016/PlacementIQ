import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  overallScore: {
    type: Number,
    required: true,
  },
  sections: {
    keywords: Number,
    formatting: Number,
    projects: Number,
    readability: Number,
  },
  missingKeywords: [String],
  foundKeywords: [String],
  strengths: [String],
  suggestions: [String],
  jdMatch: {
    matchPercentage: Number,
    matched: [String],
    missing: [String],
  },
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
