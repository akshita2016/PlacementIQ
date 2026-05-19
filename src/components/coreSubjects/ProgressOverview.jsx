import React from 'react';
import { motion } from 'framer-motion';

const ProgressOverview = ({ subjects = [] }) => {
  // Take top 3 subjects to display in overview, or specific ones
  const displaySubjects = subjects.slice(0, 3);
  
  // Find weak subject
  let weakSubject = null;
  if (displaySubjects.length > 0) {
    weakSubject = displaySubjects.reduce((prev, current) => 
      (prev.progress < current.progress) ? prev : current
    );
  }

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8" id="progress">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Progress Overview</h2>
            <p className="text-slate-400 text-sm">Track your mastery across core subjects.</p>
          </div>
          {weakSubject && weakSubject.progress < 50 && (
            <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-xl text-sm font-medium">
              Weak Subject Detected: {weakSubject.title}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {displaySubjects.map((sub, idx) => {
            const colors = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-orange-500", "bg-pink-500"];
            const colorClass = colors[idx % colors.length];
            return (
              <motion.div 
                key={sub.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                  <span>{sub.title}</span>
                  <span>{sub.progress}%</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${colorClass} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${sub.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;
