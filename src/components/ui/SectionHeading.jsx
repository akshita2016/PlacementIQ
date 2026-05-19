import React from 'react';

const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
