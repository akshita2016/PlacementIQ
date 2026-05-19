import React from 'react';
import SectionContainer from '../ui/SectionContainer';

const ResumeStats = () => {
  return (
    <SectionContainer className="border-t border-slate-800/50 bg-[#020617]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center">
        <div className="p-4">
          <div className="text-4xl font-extrabold text-white mb-2">85%</div>
          <div className="text-slate-400 font-medium">Higher ATS Match Rates</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-extrabold text-white mb-2">10K+</div>
          <div className="text-slate-400 font-medium">Students Placed</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-extrabold text-white mb-2">500+</div>
          <div className="text-slate-400 font-medium">Resumes Reviewed Daily</div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResumeStats;
