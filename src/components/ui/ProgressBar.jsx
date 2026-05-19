import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ label, percentage, colorClass = "bg-blue-500", delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-bold text-white">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${colorClass} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
