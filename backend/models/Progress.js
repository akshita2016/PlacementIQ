import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subjectId: {
    type: String,
    required: true,
  },
  completedQuestions: {
    type: [String],
    default: [],
  },
  totalQuestions: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

// Prevent a user from having multiple progress docs for the same subject
progressSchema.index({ userId: 1, subjectId: 1 }, { unique: true });

// Virtual for percentage
progressSchema.virtual('percentage').get(function() {
  if (this.totalQuestions === 0) return 0;
  return Math.round((this.completedQuestions.length / this.totalQuestions) * 100);
});

// Ensure virtuals are included in toJSON
progressSchema.set('toJSON', { virtuals: true });
progressSchema.set('toObject', { virtuals: true });

export default mongoose.model('Progress', progressSchema);
