import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Download, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import TemplateModal from './TemplateModal';

const ResumeTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { 
      name: "Software Engineer", 
      slug: "software-engineer",
      score: 95, 
      uses: "12K+",
      preview: "/template-previews/software-engineer.png",
      bestFor: "SDE roles at MAANG, product companies, and top-tier startups. Highlights technical depth and system design experience.",
      sections: ["Technical Skills", "Work Experience", "Projects with Metrics", "Education", "Certifications"]
    },
    { 
      name: "Frontend Developer", 
      slug: "frontend-developer",
      score: 92, 
      uses: "8K+",
      preview: "/template-previews/frontend.png",
      bestFor: "Frontend/UI Engineer roles. Emphasizes React, TypeScript, CSS expertise, and portfolio-driven projects.",
      sections: ["Core Skills & Tools", "Projects with Impact", "Professional Experience", "Education", "Relevant Coursework"]
    },
    { 
      name: "Backend Developer", 
      slug: "backend-developer",
      score: 94, 
      uses: "5K+",
      preview: "/template-previews/backend.png",
      bestFor: "Backend/API/Cloud Engineer roles. Focuses on system architecture, scalability metrics, and infrastructure.",
      sections: ["Skills & Technologies", "Professional Experience", "Backend Projects", "Education", "Certifications"]
    },
    { 
      name: "Data Analyst", 
      slug: "data-analyst",
      score: 89, 
      uses: "3K+",
      preview: "/template-previews/data-analyst.png",
      bestFor: "Data Analyst, Business Analyst, and BI roles. Showcases SQL, Python, Tableau expertise and data-driven outcomes.",
      sections: ["Professional Summary", "Skills", "Experience", "Projects", "Education"]
    }
  ];

  const handleDownload = (e, template) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = template.preview;
    link.download = `${template.slug}-resume-template.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`${template.name} template downloaded!`);
  };

  const colorMap = {
    "Software Engineer": { bg: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-400", bgLight: "bg-emerald-500/10", borderLight: "border-emerald-500/20" },
    "Frontend Developer": { bg: "bg-blue-500", border: "border-blue-500", text: "text-blue-400", bgLight: "bg-blue-500/10", borderLight: "border-blue-500/20" },
    "Backend Developer": { bg: "bg-purple-500", border: "border-purple-500", text: "text-purple-400", bgLight: "bg-purple-500/10", borderLight: "border-purple-500/20" },
    "Data Analyst": { bg: "bg-orange-500", border: "border-orange-500", text: "text-orange-400", bgLight: "bg-orange-500/10", borderLight: "border-orange-500/20" }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <SectionHeading 
          title="ATS-Optimized Templates" 
          subtitle="Start with a winning foundation. These templates are battle-tested against modern Applicant Tracking Systems."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {templates.map((template, idx) => {
            const colors = colorMap[template.name];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedTemplate(template)}
              >
                {/* Template Card Preview with real image */}
                <div className="aspect-[1/1.4] rounded-xl mb-4 relative overflow-hidden border border-slate-800 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  <img 
                    src={template.preview}
                    alt={`${template.name} template`}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <button 
                      onClick={(e) => handleDownload(e, template)}
                      className={`p-4 ${colors.bg} hover:brightness-110 text-white rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300`}
                    >
                      <Download className="w-6 h-6" />
                    </button>
                    <span className="text-white text-sm font-medium">Click to preview</span>
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
                  <span className={`px-2 py-1 rounded text-xs font-bold ${colors.bgLight} ${colors.text} border ${colors.borderLight} flex items-center gap-1`}>
                    <Shield className="w-3 h-3" />
                    {template.score}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <TemplateModal 
        template={selectedTemplate}
        isOpen={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </>
  );
};

export default ResumeTemplates;
