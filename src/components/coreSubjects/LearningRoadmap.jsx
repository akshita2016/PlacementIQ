import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckSquare, Code, Users, Repeat, Trophy } from 'lucide-react';

const LearningRoadmap = () => {
  const steps = [
    { title: "Learn Concepts", icon: <BookOpen className="w-5 h-5 text-blue-400" />, desc: "Understand the deep theory" },
    { title: "Practice MCQs", icon: <CheckSquare className="w-5 h-5 text-purple-400" />, desc: "Test your theoretical knowledge" },
    { title: "Solve Coding Problems", icon: <Code className="w-5 h-5 text-emerald-400" />, desc: "Implement concepts in code" },
    { title: "Mock Interviews", icon: <Users className="w-5 h-5 text-orange-400" />, desc: "Simulate real interview pressure" },
    { title: "Revision", icon: <Repeat className="w-5 h-5 text-pink-400" />, desc: "Spaced repetition of weak areas" },
    { title: "Placement Ready", icon: <Trophy className="w-5 h-5 text-yellow-400" />, desc: "Crack the top tech companies" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8" id="roadmap">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Learning Roadmap</h2>
        <p className="text-slate-400">The proven path to mastering core subjects.</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Animated Line */}
        <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-50 hidden sm:block" />

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-6 group relative"
            >
              <div className="hidden sm:flex relative z-10 w-14 h-14 rounded-full bg-slate-900 border-2 border-slate-700 items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 flex-shrink-0">
                {step.icon}
              </div>
              
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-grow hover:border-slate-700 transition-colors">
                <h3 className="text-lg font-bold text-white mb-1">{idx + 1}. {step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
