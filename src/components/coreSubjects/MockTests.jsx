import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, ArrowRight } from 'lucide-react';

const MockTests = () => {
  const tests = [
    { title: "DBMS Core Concepts", questions: 25, time: 20, level: "Medium" },
    { title: "OS Memory Management", questions: 30, time: 25, level: "Hard" },
    { title: "Networks Essentials", questions: 20, time: 15, level: "Easy" },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8" id="tests">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Mock Tests</h2>
          <p className="text-slate-400 text-sm">Test your knowledge under time pressure.</p>
        </div>
        <button className="hidden sm:block text-sm font-medium text-blue-400 hover:text-blue-300">View All Tests &rarr;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tests.map((test, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 group cursor-pointer hover:border-blue-500/30 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-4">{test.title}</h3>
            
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <HelpCircle className="w-4 h-4 text-slate-500" />
                {test.questions} Qs
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                {test.time} mins
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-slate-300">
                {test.level}
              </span>
              <button className="text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Start <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MockTests;
