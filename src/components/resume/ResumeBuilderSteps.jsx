import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, Key, FileCheck, Download } from 'lucide-react';

const ResumeBuilderSteps = () => {
  const steps = [
    { title: "Core Details", icon: <BookOpen className="w-5 h-5 text-blue-400" />, desc: "Education & Contact info" },
    { title: "Technical Skills", icon: <Award className="w-5 h-5 text-purple-400" />, desc: "Frameworks & Languages" },
    { title: "Project Impact", icon: <Briefcase className="w-5 h-5 text-emerald-400" />, desc: "STAR method bullets" },
    { title: "Optimize Keywords", icon: <Key className="w-5 h-5 text-orange-400" />, desc: "Beat the ATS filters" },
    { title: "AI Analysis", icon: <FileCheck className="w-5 h-5 text-pink-400" />, desc: "Score & Suggestions" },
    { title: "Export PDF", icon: <Download className="w-5 h-5 text-indigo-400" />, desc: "Ready to apply" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 bg-[#0F172A]/50 border-y border-slate-800/50">
      <SectionHeading 
        title="The Perfect Resume Flow" 
        subtitle="Follow our systematic approach to build a resume that converts applications into interviews."
        centered
      />

      <div className="mt-16 relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 transition-colors group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                {step.icon}
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
              <p className="text-slate-500 text-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderSteps;
