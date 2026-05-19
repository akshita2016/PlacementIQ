import Progress from '../models/Progress.js';

// Get progress for all subjects for the logged-in user
export const getOverallProgress = async (req, res) => {
  try {
    const userId = req.user;
    
    // Find all progress docs for this user
    const progresses = await Progress.find({ userId });
    
    res.json(progresses);
  } catch (error) {
    console.error("Error fetching overall progress:", error);
    res.status(500).json({ message: "Failed to fetch progress", error: error.message });
  }
};

// Get progress for a specific subject
export const getSubjectProgress = async (req, res) => {
  try {
    const userId = req.user;
    const { subjectId } = req.params;
    
    const progress = await Progress.findOne({ userId, subjectId });
    
    if (!progress) {
      return res.json({ completedQuestions: [], percentage: 0 });
    }
    
    res.json(progress);
  } catch (error) {
    console.error(`Error fetching progress for ${req.params.subjectId}:`, error);
    res.status(500).json({ message: "Failed to fetch subject progress", error: error.message });
  }
};

// Toggle a question (mark solved/unsolved)
export const toggleQuestion = async (req, res) => {
  try {
    const userId = req.user;
    const { subjectId, questionId } = req.params;
    const { totalQuestions } = req.body;
    
    if (!totalQuestions) {
      return res.status(400).json({ message: "totalQuestions is required" });
    }

    let progress = await Progress.findOne({ userId, subjectId });
    
    if (!progress) {
      // First time completing a question for this subject
      progress = new Progress({
        userId,
        subjectId,
        completedQuestions: [questionId],
        totalQuestions
      });
      await progress.save();
    } else {
      // Toggle logic
      progress.totalQuestions = totalQuestions;
      
      const index = progress.completedQuestions.indexOf(questionId);
      if (index > -1) {
        // Already completed, remove it (mark unsolved)
        progress.completedQuestions.splice(index, 1);
      } else {
        // Not completed, add it (mark solved)
        progress.completedQuestions.push(questionId);
      }
      await progress.save();
    }
    
    res.json({ message: "Question toggled successfully", progress });
  } catch (error) {
    console.error(`Error toggling question ${req.params.questionId}:`, error);
    res.status(500).json({ message: "Failed to toggle question", error: error.message });
  }
};
