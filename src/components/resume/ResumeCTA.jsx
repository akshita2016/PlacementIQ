import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import GradientButton from '../ui/GradientButton';
import { ArrowRight } from 'lucide-react';

const ResumeCTA = () => {
  return (
    <SectionContainer className="py-24">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-emerald-900 to-slate-900 border border-emerald-500/30 p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-emerald-900/20">
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Stop getting rejected by bots.
          </h2>
          <p className="text-lg md:text-xl text-emerald-100/70 mb-10">
            Create a resume that passes the ATS filters and catches the recruiter's eye.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GradientButton className="!bg-emerald-600 hover:!bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Build Your Resume
            </GradientButton>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-emerald-500/20 flex items-center justify-center gap-2 backdrop-blur-md">
              View Examples <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResumeCTA;
