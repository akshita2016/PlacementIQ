import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../ui/GlowCard';
import ProgressBar from '../ui/ProgressBar';
import { CheckCircle2, AlertTriangle, Sparkles, Save, XCircle } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import toast from 'react-hot-toast';
import { saveResumeAnalysis } from '../../services/resumeService';

const ResumeResults = ({ results, onReset }) => {
  const [saving, setSaving] = React.useState(false);
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleSave = async () => {
    if (!user) {
      toast.error('Please log in to save your results.');
      return;
    }
    setSaving(true);
    try {
      await saveResumeAnalysis({
        fileName: results.fileName,
        overallScore: results.overallScore,
        sections: results.sections,
        missingKeywords: results.missingKeywords,
        foundKeywords: results.foundKeywords,
        strengths: results.strengths,
        suggestions: results.suggestions,
        jdMatch: results.jdMatch,
      });
      toast.success('Analysis saved to your profile!');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  };

  const getScoreRing = (score) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (results.overallScore / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 lg:px-8 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Analysis Results</h2>
          <p className="text-slate-400 mt-1">for <span className="text-white font-medium">{results.fileName}</span></p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onReset}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-medium transition-colors border border-slate-700"
          >
            Analyze Another
          </button>
          <GradientButton
            onClick={handleSave}
            className="!bg-emerald-600 hover:!bg-emerald-500 !px-4 !py-2 text-sm"
            icon={saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
          >
            {saving ? 'Saving...' : 'Save Results'}
          </GradientButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Circle */}
        <GlowCard className="flex flex-col items-center justify-center py-10" glowColor={`${getScoreRing(results.overallScore)}33`}>
          <div className="relative w-40 h-40 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
              <motion.circle 
                cx="50" cy="50" r="45" fill="none" 
                stroke={getScoreRing(results.overallScore)} 
                strokeWidth="8" 
                strokeDasharray={circumference} 
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="drop-shadow-[0_0_10px_currentColor]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-extrabold ${getScoreColor(results.overallScore)}`}>{results.overallScore}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ATS Score</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm text-center">
            {results.overallScore >= 80 ? 'Great! Your resume is well-optimized.' : 
             results.overallScore >= 60 ? 'Good, but there\'s room for improvement.' :
             'Needs significant improvement.'}
          </p>
        </GlowCard>

        {/* Breakdown */}
        <GlowCard className="lg:col-span-2">
          <h3 className="text-xl font-bold text-white mb-6">Score Breakdown</h3>
          <div className="space-y-3">
            <ProgressBar label="Keyword Optimization" percentage={results.sections.keywords} colorClass="bg-blue-500" delay={0.1} />
            <ProgressBar label="Formatting & Layout" percentage={results.sections.formatting} colorClass="bg-emerald-500" delay={0.2} />
            <ProgressBar label="Project Impact" percentage={results.sections.projects} colorClass="bg-purple-500" delay={0.3} />
            <ProgressBar label="Readability & Tone" percentage={results.sections.readability} colorClass="bg-indigo-500" delay={0.4} />
          </div>
        </GlowCard>
      </div>

      {/* JD Match (if provided) */}
      {results.jdMatch && (
        <GlowCard className="mt-6" glowColor="rgba(37, 99, 235, 0.15)">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" /> Job Description Match — {results.jdMatch.matchPercentage}%
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Matched Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {results.jdMatch.matched.map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-medium">{kw}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-1"><XCircle className="w-4 h-4" /> Missing Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {results.jdMatch.missing.map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-medium">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        </GlowCard>
      )}

      {/* Strengths & Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {results.strengths.length > 0 && (
          <GlowCard glowColor="rgba(16, 185, 129, 0.1)">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Strengths
            </h3>
            <ul className="space-y-3">
              {results.strengths.map((s, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </GlowCard>
        )}

        {results.suggestions.length > 0 && (
          <GlowCard glowColor="rgba(245, 158, 11, 0.1)">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Suggestions
            </h3>
            <ul className="space-y-3">
              {results.suggestions.map((s, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </GlowCard>
        )}
      </div>
    </motion.div>
  );
};

export default ResumeResults;
