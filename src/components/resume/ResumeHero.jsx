import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Upload } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

const ResumeHero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            ATS Score Optimizer 2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">ATS-Friendly</span> Resumes
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get shortlisted faster. Our recruiter-approved templates and AI keyword analyzer ensure your resume beats the bots.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <GradientButton 
              onClick={() => scrollTo('analyzer')}
              icon={<Upload className="w-5 h-5" />} 
              className="w-full sm:w-auto !bg-emerald-600 hover:!bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              Analyze Resume
            </GradientButton>
            <button 
              onClick={() => scrollTo('templates')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Eye className="w-5 h-5" />
              View Templates
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeHero;
