import { extractText, analyzeResume } from '../utils/atsEngine.js';
import Resume from '../models/Resume.js';

// POST /api/resume/analyze — public, accepts PDF upload
export const analyzeResumeController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded. Please upload a PDF.' });
    }

    // Double-validate on backend
    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'Only PDF files are accepted.' });
    }

    if (req.file.size > 5 * 1024 * 1024) {
      return res.status(400).json({ error: 'File size exceeds 5MB limit.' });
    }

    const jobDescription = req.body.jobDescription || '';

    // Extract text from PDF buffer
    const text = await extractText(req.file.buffer);

    if (!text || text.trim().length < 50) {
      return res.status(400).json({ error: 'Could not extract meaningful text from the PDF. Ensure it is not an image-only document.' });
    }

    // Run analysis
    const analysis = analyzeResume(text, jobDescription);

    res.json({
      success: true,
      fileName: req.file.originalname,
      ...analysis,
    });
  } catch (err) {
    console.error('Resume analysis error:', err);
    res.status(500).json({ error: err.message || 'Failed to analyze resume.' });
  }
};

// POST /api/resume/save — auth-protected
export const saveResumeController = async (req, res) => {
  try {
    const { fileName, overallScore, sections, missingKeywords, foundKeywords, strengths, suggestions, jdMatch } = req.body;

    const resume = new Resume({
      userId: req.user,
      fileName,
      overallScore,
      sections,
      missingKeywords,
      foundKeywords,
      strengths,
      suggestions,
      jdMatch,
    });

    await resume.save();
    res.json({ success: true, message: 'Resume analysis saved!', resume });
  } catch (err) {
    console.error('Save resume error:', err);
    res.status(500).json({ error: 'Failed to save resume analysis.' });
  }
};

// GET /api/resume/history — auth-protected
export const getUserResumesController = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user })
      .sort({ createdAt: -1 })
      .limit(20);
    res.json({ success: true, resumes });
  } catch (err) {
    console.error('Get resumes error:', err);
    res.status(500).json({ error: 'Failed to fetch resume history.' });
  }
};
