import React from 'react';
import { motion } from 'framer-motion';

const GlowCard = ({ children, className = "", delay = 0, glowColor = "rgba(37, 99, 235, 0.15)" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`relative group bg-[#111827] border border-slate-800 rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none blur-xl"
        style={{ backgroundColor: glowColor, transform: 'scale(0.95)' }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
