import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import StatCard from '../ui/StatCard';
import { Users, Code, HelpCircle, FileCheck } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: "Active Students", value: "10K+", icon: <Users className="w-6 h-6 text-blue-400" /> },
    { label: "DSA Problems", value: "250+", icon: <Code className="w-6 h-6 text-purple-400" /> },
    { label: "Interview Qs", value: "120+", icon: <HelpCircle className="w-6 h-6 text-orange-400" /> },
    { label: "ATS Resume Score", value: "95%", icon: <FileCheck className="w-6 h-6 text-emerald-400" /> }
  ];

  return (
    <SectionContainer className="relative z-10 -mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} index={idx} label={stat.label} value={stat.value} icon={stat.icon} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default StatsSection;
