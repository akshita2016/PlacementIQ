import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { 
  analyzeResumeController, 
  saveResumeController, 
  getUserResumesController 
} from '../controllers/resumeController.js';

const router = express.Router();

// Public — anyone can analyze
router.post('/analyze', upload.single('resume'), analyzeResumeController);

// Auth-protected — only logged-in users
router.post('/save', authMiddleware, saveResumeController);
router.get('/history', authMiddleware, getUserResumesController);

export default router;
