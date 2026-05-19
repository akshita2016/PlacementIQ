import React from 'react';
import GlowCard from '../ui/GlowCard';
import ProgressBar from '../ui/ProgressBar';

const ATSPreview = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
      <GlowCard className="p-8 md:p-12" glowColor="rgba(16, 185, 129, 0.1)">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Circular Progress */}
          <div className="relative flex flex-col items-center justify-center w-48 h-48 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-[dash_2s_ease-out]" />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-white tracking-tight">92<span className="text-2xl text-emerald-400">%</span></span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">ATS Match</span>
            </div>
          </div>

          {/* Right: Breakdown */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Resume Score Breakdown</h3>
            <div className="space-y-2">
              <ProgressBar label="Formatting & Layout" percentage={95} colorClass="bg-emerald-500" delay={0.1} />
              <ProgressBar label="Keyword Optimization" percentage={80} colorClass="bg-blue-500" delay={0.2} />
              <ProgressBar label="Project Impact Metrics" percentage={90} colorClass="bg-purple-500" delay={0.3} />
              <ProgressBar label="Readability & Tone" percentage={88} colorClass="bg-indigo-500" delay={0.4} />
            </div>
          </div>

        </div>
      </GlowCard>
    </div>
  );
};

export default ATSPreview;
