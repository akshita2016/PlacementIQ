import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Map } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 font-medium text-sm mb-6 backdrop-blur-md">
            Placement IQ Pro
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Master Core CS Subjects
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn smarter. Crack placements faster. Go beyond memorization and build deep foundations in DSA, DBMS, OS, and Networks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Learning
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 backdrop-blur-md">
              <Map className="w-5 h-5" />
              View Roadmap
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Day Streak", value: "🔥 18" },
              { label: "Topics Mastered", value: "📘 124" },
              { label: "Overall Progress", value: "🎯 82%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/10"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
