import React from 'react';
import { motion } from 'framer-motion';

const ProgressOverview = () => {
  const subjects = [
    { name: "DSA", progress: 80, color: "bg-blue-500" },
    { name: "DBMS", progress: 60, color: "bg-purple-500" },
    { name: "OS", progress: 40, color: "bg-emerald-500" },
  ];

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
          <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-xl text-sm font-medium">
            Weak Subject Detected: OS
          </div>
        </div>

        <div className="space-y-6">
          {subjects.map((sub, idx) => (
            <motion.div 
              key={sub.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between text-sm font-medium text-slate-300 mb-2">
                <span>{sub.name}</span>
                <span>{sub.progress}%</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${sub.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${sub.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;
