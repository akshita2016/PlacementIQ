import React from 'react';
import GlowCard from '../ui/GlowCard';
import { UploadCloud, Bot, Sparkles } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

const ResumeAnalyzer = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
      <GlowCard className="p-10 md:p-16 text-center border-indigo-500/20" glowColor="rgba(99, 102, 241, 0.15)">
        <div className="w-20 h-20 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
          <Bot className="w-10 h-10 text-indigo-400" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">AI Resume Analyzer</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Upload your current resume to get an instant ATS score, keyword match analysis, and actionable improvement suggestions.
        </p>
        
        <div className="border-2 border-dashed border-slate-700 hover:border-indigo-500/50 bg-[#020617]/50 rounded-3xl p-10 transition-colors cursor-pointer group mb-6">
          <UploadCloud className="w-12 h-12 text-slate-500 group-hover:text-indigo-400 mx-auto mb-4 transition-colors" />
          <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
          <p className="text-slate-500 text-sm">PDF formatting only (Max 5MB)</p>
        </div>

        <GradientButton className="!bg-indigo-600 hover:!bg-indigo-500 w-full sm:w-auto" icon={<Sparkles className="w-4 h-4" />}>
          Analyze Now
        </GradientButton>
      </GlowCard>
    </div>
  );
};

export default ResumeAnalyzer;
