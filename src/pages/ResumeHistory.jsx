import React, { useEffect, useState } from 'react';
import '../styles/theme.css';
import PageContainer from '../components/ui/PageContainer';
import SectionContainer from '../components/ui/SectionContainer';
import GlowCard from '../components/ui/GlowCard';
import { getResumeHistory } from '../services/resumeService';
import { FileText, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeHistory = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getResumeHistory();
      setResumes(data.resumes || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  };

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-emerald-500/10 border-emerald-500/20';
    if (score >= 60) return 'bg-amber-500/10 border-amber-500/20';
    return 'bg-red-500/10 border-red-500/20';
  };

  return (
    <PageContainer>
      <SectionContainer className="pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Analysis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">History</span>
          </h1>
          <p className="text-slate-400 text-lg">Track your resume improvements over time.</p>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Loading history...</p>
          </div>
        )}

        {error && (
          <div className="max-w-lg mx-auto p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
            <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <p className="text-red-400 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && resumes.length === 0 && (
          <div className="text-center py-20">
            <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg font-medium">No analyses saved yet.</p>
            <p className="text-slate-500 text-sm mt-2">Upload a resume on the Resume Guide page and click "Save Results".</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, idx) => (
            <motion.div
              key={resume._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <GlowCard>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-xl">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm truncate max-w-[180px]">{resume.fileName}</h3>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                        <Clock className="w-3 h-3" />
                        {new Date(resume.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border font-bold text-lg ${getScoreBg(resume.overallScore)} ${getScoreColor(resume.overallScore)}`}>
                    {resume.overallScore}
                  </div>
                </div>

                {/* Mini breakdown */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-center p-2 bg-slate-900/50 rounded-xl">
                    <div className="text-xs text-slate-500">Keywords</div>
                    <div className="text-white font-bold">{resume.sections?.keywords || '-'}%</div>
                  </div>
                  <div className="text-center p-2 bg-slate-900/50 rounded-xl">
                    <div className="text-xs text-slate-500">Format</div>
                    <div className="text-white font-bold">{resume.sections?.formatting || '-'}%</div>
                  </div>
                  <div className="text-center p-2 bg-slate-900/50 rounded-xl">
                    <div className="text-xs text-slate-500">Projects</div>
                    <div className="text-white font-bold">{resume.sections?.projects || '-'}%</div>
                  </div>
                  <div className="text-center p-2 bg-slate-900/50 rounded-xl">
                    <div className="text-xs text-slate-500">Readability</div>
                    <div className="text-white font-bold">{resume.sections?.readability || '-'}%</div>
                  </div>
                </div>

                {resume.suggestions && resume.suggestions.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-2">
                      <TrendingUp className="w-3 h-3" /> Top Suggestion
                    </div>
                    <p className="text-slate-400 text-xs">{resume.suggestions[0]}</p>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default ResumeHistory;
