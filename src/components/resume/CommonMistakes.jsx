import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { XCircle, CheckCircle2 } from 'lucide-react';

const CommonMistakes = () => {
  const mistakes = [
    {
      bad: "Built a web app using React and Node.js for managing tasks.",
      good: "Architected a full-stack task management application serving 500+ DAU, reducing load times by 40%.",
      issue: "No metrics or impact shown."
    },
    {
      bad: "Used CSS tables to structure the resume layout.",
      good: "Used a clean, single-column PDF layout with standard web-safe fonts.",
      issue: "ATS bots cannot read tables properly."
    },
    {
      bad: "Skills: Fast learner, Hard worker, Team player, HTML, CSS.",
      good: "Skills: React.js, Node.js, MongoDB, AWS EC2, System Design.",
      issue: "Fluff words waste space. Focus on hard technical skills."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 bg-[#0F172A]/30">
      <SectionHeading 
        title="Avoid These Fatal Mistakes" 
        subtitle="Don't let easily fixable errors cost you an interview opportunity."
        centered
      />

      <div className="mt-12 space-y-6">
        {mistakes.map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-800">
            {/* The BAD side */}
            <div className="bg-red-500/5 p-6 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
                <XCircle className="w-5 h-5" /> What NOT to do
              </div>
              <p className="text-slate-300 text-sm mb-4">"{item.bad}"</p>
              <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-md">
                Why: {item.issue}
              </div>
            </div>
            
            {/* The GOOD side */}
            <div className="bg-emerald-500/5 p-6">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" /> How to fix it
              </div>
              <p className="text-slate-300 text-sm">"{item.good}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonMistakes;
