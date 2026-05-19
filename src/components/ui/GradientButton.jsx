import React from 'react';

const GradientButton = ({ children, onClick, className = "", icon = null }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-2xl hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group overflow-hidden ${className}`}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
