import React from 'react';
import { PackageOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const EmptyState = ({ title = "No Data Found", message = "We couldn't find anything matching your criteria.", actionLabel, onAction }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-12 text-center bg-[#111827]/50 rounded-3xl border border-slate-800 border-dashed"
    >
      <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-4 text-slate-500">
        <PackageOpen className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 max-w-md">{message}</p>
      
      {actionLabel && onAction && (
        <button 
          onClick={onAction}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;
