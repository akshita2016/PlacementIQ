import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import SectionHeading from '../ui/SectionHeading';
import GlowCard from '../ui/GlowCard';
import { Code2, BookOpen, FileText, Users, Map, LineChart } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      title: "DSA Practice",
      desc: "Curated list of top patterns and problems asked in MAANG interviews.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      glowColor: "rgba(37,99,235,0.15)"
    },
    {
      title: "Core Subjects",
      desc: "Deep dive into OS, DBMS, and Networks with interactive dashboards.",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      glowColor: "rgba(168,85,247,0.15)"
    },
    {
      title: "Resume Builder",
      desc: "Create ATS-friendly resumes optimized for automated screening systems.",
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      glowColor: "rgba(16,185,129,0.15)"
    },
    {
      title: "Mock Interviews",
      desc: "Simulate real interview pressure with curated HR and Technical questions.",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      glowColor: "rgba(249,115,22,0.15)"
    },
    {
      title: "AI Roadmaps",
      desc: "Personalized step-by-step learning paths tailored to your target company.",
      icon: <Map className="w-6 h-6 text-pink-400" />,
      glowColor: "rgba(236,72,153,0.15)"
    },
    {
      title: "Progress Tracking",
      desc: "Visualize your growth with detailed analytics and daily streaks.",
      icon: <LineChart className="w-6 h-6 text-indigo-400" />,
      glowColor: "rgba(99,102,241,0.15)"
    }
  ];

  return (
    <SectionContainer>
      <SectionHeading 
        title="Everything you need to crack product companies" 
        subtitle="We provide a structured approach to placement preparation, eliminating guesswork from your journey."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {features.map((feat, idx) => (
          <GlowCard key={idx} delay={idx * 0.1} glowColor={feat.glowColor}>
            <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center mb-6">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              {feat.desc}
            </p>
          </GlowCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesGrid;
