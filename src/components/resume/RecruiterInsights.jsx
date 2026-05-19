import React from 'react';
import GlowCard from '../ui/GlowCard';
import { Clock, Eye, Target } from 'lucide-react';

const RecruiterInsights = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Inside the Recruiter's Mind</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Understanding how recruiters screen resumes is the key to bypassing the initial filter. We analyzed data from top tech companies to bring you these actionable insights.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">The 6-Second Rule</h4>
                <p className="text-slate-500 text-sm">Recruiters spend an average of 6-8 seconds initially scanning a resume. Your layout must guide their eyes to your best metrics immediately.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl mt-1">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Action Verbs Matter</h4>
                <p className="text-slate-500 text-sm">Starting bullet points with strong action verbs (e.g., "Architected", "Optimized", "Spearheaded") increases impact scores by 140%.</p>
              </div>
            </div>
          </div>
        </div>

        <GlowCard className="p-8" glowColor="rgba(139, 92, 246, 0.15)">
          <h3 className="text-xl font-bold text-white mb-6">What grabs attention first?</h3>
          
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                <span>Previous Experience Title</span>
                <span className="text-purple-400">45%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-[45%]" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                <span>Technical Skills Section</span>
                <span className="text-indigo-400">30%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full w-[30%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                <span>Project Links (GitHub/Live)</span>
                <span className="text-blue-400">15%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[15%]" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                <span>Education</span>
                <span className="text-emerald-400">10%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[10%]" />
              </div>
            </div>
          </div>
        </GlowCard>

      </div>
    </div>
  );
};

export default RecruiterInsights;
