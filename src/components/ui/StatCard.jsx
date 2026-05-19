import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

const StatCard = ({ label, value, icon, index }) => {
  return (
    <motion.div 
      variants={fadeUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group p-6 bg-[#0F172A] border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-colors"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-colors">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
          <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
