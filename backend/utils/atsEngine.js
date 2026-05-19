import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

/**
 * ATS Resume Analysis Engine
 * Structured for easy future AI replacement.
 */

// ─── Text Extraction ───────────────────────────────────────────
export async function extractText(pdfBuffer) {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text || '';
  } catch (err) {
    throw new Error('Failed to parse PDF. Please ensure it is a valid PDF file.');
  }
}

// ─── Keyword Scoring ───────────────────────────────────────────
const TECH_KEYWORDS = [
  'javascript', 'typescript', 'react', 'node.js', 'express', 'mongodb',
  'python', 'java', 'c++', 'sql', 'html', 'css', 'git', 'docker',
  'aws', 'azure', 'kubernetes', 'rest', 'api', 'graphql', 'redis',
  'postgresql', 'mysql', 'firebase', 'tailwind', 'next.js', 'vue',
  'angular', 'spring', 'django', 'flask', 'linux', 'ci/cd',
  'agile', 'scrum', 'jira', 'figma', 'system design', 'microservices',
  'data structures', 'algorithms', 'machine learning', 'deep learning',
  'tableau', 'power bi', 'pandas', 'numpy', 'tensorflow'
];

export function scoreKeywords(text, jobDescription = '') {
  const lowerText = text.toLowerCase();
  const foundKeywords = TECH_KEYWORDS.filter(kw => lowerText.includes(kw));
  const missingKeywords = TECH_KEYWORDS.filter(kw => !lowerText.includes(kw));

  // If a job description is provided, score against it
  let jdKeywords = [];
  let jdMatched = [];
  let jdMissing = [];
  if (jobDescription.trim()) {
    const lowerJD = jobDescription.toLowerCase();
    jdKeywords = TECH_KEYWORDS.filter(kw => lowerJD.includes(kw));
    jdMatched = jdKeywords.filter(kw => lowerText.includes(kw));
    jdMissing = jdKeywords.filter(kw => !lowerText.includes(kw));
  }

  const score = Math.min(100, Math.round((foundKeywords.length / 15) * 100));

  return {
    score,
    found: foundKeywords,
    missing: missingKeywords.slice(0, 10), // Top 10 missing
    jdMatch: jdKeywords.length > 0 ? {
      matchPercentage: Math.round((jdMatched.length / jdKeywords.length) * 100),
      matched: jdMatched,
      missing: jdMissing,
    } : null,
  };
}

// ─── Formatting Scoring ────────────────────────────────────────
export function scoreFormatting(text) {
  let score = 100;
  const issues = [];

  // Check for essential sections
  const sections = ['education', 'experience', 'skills', 'projects'];
  const foundSections = sections.filter(s => text.toLowerCase().includes(s));
  if (foundSections.length < 3) {
    score -= 20;
    issues.push('Missing key resume sections (Education, Experience, Skills, Projects)');
  }

  // Check for contact info
  const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(text);
  const hasPhone = /[\d\s()-]{10,}/.test(text);
  if (!hasEmail) { score -= 10; issues.push('No email address found'); }
  if (!hasPhone) { score -= 5; issues.push('No phone number found'); }

  // Check for bullet points / structured content
  const lineCount = text.split('\n').filter(l => l.trim()).length;
  if (lineCount < 20) { score -= 10; issues.push('Resume appears too short — aim for 30+ content lines'); }
  if (lineCount > 100) { score -= 5; issues.push('Resume may be too long — aim for 1-2 pages'); }

  // Check for URLs (GitHub, LinkedIn)
  const hasLinks = /github|linkedin|portfolio|website/i.test(text);
  if (!hasLinks) { score -= 5; issues.push('Add GitHub/LinkedIn/Portfolio links'); }

  return { score: Math.max(0, score), issues };
}

// ─── Project Impact Scoring ────────────────────────────────────
export function scoreProjects(text) {
  let score = 60; // base
  const strengths = [];
  const suggestions = [];

  // Check for metrics/numbers
  const metricPattern = /\d+%|\d+x|\d+\+|\$\d+|[0-9]+k\+?|[0-9]+[.,]?[0-9]* users/gi;
  const metrics = text.match(metricPattern) || [];
  if (metrics.length >= 3) {
    score += 20;
    strengths.push('Strong use of quantifiable metrics');
  } else {
    suggestions.push('Add measurable achievements (e.g., "Reduced load time by 40%")');
  }

  // Check for action verbs
  const actionVerbs = ['built', 'developed', 'designed', 'implemented', 'optimized', 'architected', 'led', 'spearheaded', 'created', 'reduced', 'improved', 'achieved', 'deployed', 'automated', 'scaled'];
  const lowerText = text.toLowerCase();
  const foundVerbs = actionVerbs.filter(v => lowerText.includes(v));
  if (foundVerbs.length >= 5) {
    score += 15;
    strengths.push('Good use of strong action verbs');
  } else {
    suggestions.push('Start bullet points with strong action verbs (Built, Architected, Optimized)');
  }

  // Check for tech stack mentions in projects
  const hasTechInProjects = /\(.*?(react|node|python|java|mongodb|aws).*?\)/i.test(text);
  if (hasTechInProjects) {
    score += 5;
    strengths.push('Tech stacks mentioned in project descriptions');
  } else {
    suggestions.push('Mention technologies used in each project (e.g., "E-Commerce App (React, Node.js, MongoDB)")');
  }

  return { score: Math.min(100, score), strengths, suggestions };
}

// ─── Readability Scoring ───────────────────────────────────────
export function scoreReadability(text) {
  let score = 85;
  const issues = [];

  // Average sentence length check
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  if (sentences.length > 0) {
    const avgWords = sentences.reduce((sum, s) => sum + s.trim().split(/\s+/).length, 0) / sentences.length;
    if (avgWords > 25) { score -= 10; issues.push('Some sentences are too long — keep them concise'); }
  }

  // Check for filler/fluff words
  const fluffWords = ['team player', 'hard worker', 'fast learner', 'self-motivated', 'detail-oriented', 'passionate'];
  const lowerText = text.toLowerCase();
  const foundFluff = fluffWords.filter(w => lowerText.includes(w));
  if (foundFluff.length > 0) {
    score -= foundFluff.length * 3;
    issues.push(`Remove generic phrases: ${foundFluff.join(', ')}`);
  }

  return { score: Math.max(0, score), issues };
}

// ─── Master Analysis ───────────────────────────────────────────
export function analyzeResume(text, jobDescription = '') {
  const keywords = scoreKeywords(text, jobDescription);
  const formatting = scoreFormatting(text);
  const projects = scoreProjects(text);
  const readability = scoreReadability(text);

  const overallScore = Math.round(
    keywords.score * 0.3 +
    formatting.score * 0.25 +
    projects.score * 0.25 +
    readability.score * 0.2
  );

  // Aggregate suggestions
  const allSuggestions = [
    ...formatting.issues,
    ...projects.suggestions,
    ...readability.issues,
  ];

  return {
    overallScore,
    sections: {
      keywords: keywords.score,
      formatting: formatting.score,
      projects: projects.score,
      readability: readability.score,
    },
    missingKeywords: keywords.missing,
    foundKeywords: keywords.found,
    strengths: projects.strengths,
    suggestions: allSuggestions,
    jdMatch: keywords.jdMatch,
  };
}
