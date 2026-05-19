import React from 'react';
import { X, Download, Star, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from '../ui/GradientButton';
import toast from 'react-hot-toast';

const TemplateModal = ({ template, isOpen, onClose }) => {
  if (!template) return null;

  const handleDownload = () => {
    // For now, open the preview image as a downloadable resource
    // Later replace with real PDF downloads
    const link = document.createElement('a');
    link.href = template.preview;
    link.download = `${template.slug}-resume-template.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`${template.name} template downloaded!`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 bg-[#0F172A] border border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white">{template.name}</h3>
                <p className="text-slate-400 text-sm mt-1">ATS-Optimized Resume Template</p>
              </div>
              <button onClick={onClose} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col lg:flex-row gap-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Preview Image */}
              <div className="lg:w-1/2 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white">
                  <img 
                    src={template.preview} 
                    alt={`${template.name} template preview`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-bold">{template.score}% ATS Score</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 rounded-full">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-slate-300 text-sm font-medium">Used {template.uses} times</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">Best for</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{template.bestFor}</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3">Key Sections</h4>
                  <div className="space-y-2">
                    {template.sections.map((section, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {section}
                      </div>
                    ))}
                  </div>
                </div>

                <GradientButton 
                  onClick={handleDownload}
                  className="w-full !bg-emerald-600 hover:!bg-emerald-500" 
                  icon={<Download className="w-5 h-5" />}
                >
                  Download Template
                </GradientButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TemplateModal;
