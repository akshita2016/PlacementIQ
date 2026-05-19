import express from 'express';
import { 
  getOverallProgress, 
  getSubjectProgress, 
  toggleQuestion 
} from '../controllers/progressController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// All progress routes should be protected by authMiddleware
router.use(authMiddleware);

// GET /api/progress - get all subjects progress for user
router.get('/', getOverallProgress);

// GET /api/progress/:subjectId - get progress for a specific subject
router.get('/:subjectId', getSubjectProgress);

// POST /api/progress/:subjectId/question/:questionId - toggle progress for a specific question
router.post('/:subjectId/question/:questionId', toggleQuestion);

export default router;
