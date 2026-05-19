import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import GradientButton from '../ui/GradientButton';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <SectionContainer className="py-24">
      <div className="relative rounded-[2.5rem] bg-[#0F172A] border border-slate-800 p-12 md:p-20 text-center overflow-hidden">
        {/* Glow Effects inside CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to start your placement journey?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10">
            Join thousands of successful graduates who secured top-tier positions through our systematic approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GradientButton icon={<Rocket className="w-5 h-5" />}>
              Start Free Practice
            </GradientButton>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 backdrop-blur-md">
              Explore Curriculum
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CTASection;
