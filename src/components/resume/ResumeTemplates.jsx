import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeTemplates = () => {
  const templates = [
    { name: "Software Engineer", score: 95, color: "emerald", uses: "12K+" },
    { name: "Frontend Developer", score: 92, color: "blue", uses: "8K+" },
    { name: "Backend Developer", score: 94, color: "purple", uses: "5K+" },
    { name: "Data Analyst", score: 89, color: "orange", uses: "3K+" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20" id="templates">
      <SectionHeading 
        title="ATS-Optimized Templates" 
        subtitle="Start with a winning foundation. These templates are battle-tested against modern Applicant Tracking Systems."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {templates.map((template, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            {/* The Template Card Preview */}
            <div className="aspect-[1/1.4] bg-white rounded-xl mb-4 relative overflow-hidden border border-slate-800 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
              {/* Fake skeleton UI for resume preview */}
              <div className="absolute inset-4 opacity-50 flex flex-col gap-3">
                <div className="w-1/2 h-6 bg-slate-300 rounded mx-auto mb-4" />
                <div className="w-full h-1 bg-slate-200 mb-2" />
                <div className="w-3/4 h-3 bg-slate-200 rounded" />
                <div className="w-full h-3 bg-slate-200 rounded" />
                <div className="w-5/6 h-3 bg-slate-200 rounded" />
                <div className="w-full h-1 bg-slate-200 mt-2 mb-2" />
                <div className="w-2/3 h-3 bg-slate-200 rounded" />
                <div className="w-4/5 h-3 bg-slate-200 rounded" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className={`p-4 bg-${template.color}-600 hover:bg-${template.color}-500 text-white rounded-full shadow-lg shadow-${template.color}-500/30 transform scale-75 group-hover:scale-100 transition-all duration-300`}>
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Template Info */}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-bold mb-1">{template.name}</h4>
                <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                  <Star className="w-3 h-3 fill-slate-500" /> Used {template.uses} times
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-bold bg-${template.color}-500/10 text-${template.color}-400 border border-${template.color}-500/20`}>
                {template.score}% ATS
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
