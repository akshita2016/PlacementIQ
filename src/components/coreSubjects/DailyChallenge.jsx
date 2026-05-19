import React from 'react';
import { Zap, Play } from 'lucide-react';

const DailyChallenge = ({ challenge }) => {
  if (!challenge) return null;

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-indigo-500/10">
        
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Daily Challenge</h2>
              <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-wide">
                {challenge.difficulty}
              </span>
              <span className="text-sm font-medium text-slate-400 ml-2">{challenge.subject}</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
              {challenge.question}
            </h3>
            
            <p className="text-indigo-200/60 text-sm">
              Solve this daily challenge to maintain your streak and earn XP points.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Solve Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyChallenge;
