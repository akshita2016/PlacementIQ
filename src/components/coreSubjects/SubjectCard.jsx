import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

const SubjectCard = ({ subject, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-slate-700 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Decorative gradient blob on hover */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />

      <div className="flex justify-between items-start mb-6 z-10">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg shadow-black/20`}>
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          subject.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
          subject.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
          'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {subject.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 z-10">{subject.title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow z-10">{subject.description}</p>

      <div className="space-y-4 z-10">
        <div className="flex flex-wrap gap-2">
          {subject.concepts.slice(0, 3).map((concept, idx) => (
            <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-slate-300">
              {concept}
            </span>
          ))}
          {subject.concepts.length > 3 && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-slate-500">
              +{subject.concepts.length - 3}
            </span>
          )}
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
            <span className="flex items-center gap-1"><Layers className="w-3 h-3" /> {subject.topics} Topics</span>
            <span>{subject.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${subject.color} rounded-full`} 
              style={{ width: `${subject.progress}%` }} 
            />
          </div>
        </div>

        <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors">
          Continue Learning <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default SubjectCard;
