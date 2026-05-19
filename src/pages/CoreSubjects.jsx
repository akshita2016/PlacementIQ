import React, { useEffect } from 'react';
import '../styles/theme.css';
import { useCoreSubjects } from '../hooks/useCoreSubjects';
import Loader from '../components/common/Loader';
import ErrorState from '../components/common/ErrorState';

import HeroSection from "../components/coreSubjects/HeroSection";
import ProgressOverview from "../components/coreSubjects/ProgressOverview";
import SubjectGrid from "../components/coreSubjects/SubjectGrid";
import InterviewStats from "../components/coreSubjects/InterviewStats";
import LearningRoadmap from "../components/coreSubjects/LearningRoadmap";
import DailyChallenge from "../components/coreSubjects/DailyChallenge";
import MockTests from "../components/coreSubjects/MockTests";
import RecentActivity from "../components/coreSubjects/RecentActivity";
import FooterCTA from "../components/coreSubjects/FooterCTA";

const CoreSubjects = () => {
  const { subjects, dailyChallenge, stats, recent, loading, error } = useCoreSubjects();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) return <Loader text="Loading Dashboard..." />;
  if (error) return <ErrorState message={error} onRetry={handleRetry} />;

  return (
    <div className="bg-[#020617] min-h-screen text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center gap-8 text-sm font-medium text-slate-400">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#progress" className="hover:text-white transition-colors">Progress</a>
          <a href="#subjects" className="hover:text-white transition-colors">Subjects</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#tests" className="hover:text-white transition-colors">Tests</a>
        </div>
      </div>

      <div id="overview">
        <HeroSection />
      </div>
      
      <ProgressOverview />
      
      <SubjectGrid subjects={subjects} />
      
      <InterviewStats stats={stats} />
      
      <LearningRoadmap />
      
      <DailyChallenge challenge={dailyChallenge} />
      
      <MockTests />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {/* We can place Recent Activity here if we want a 2-column layout for the bottom sections */}
          <RecentActivity activity={recent} />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-full">
            <h3 className="text-xl font-bold text-white mb-2">Continue Learning</h3>
            <p className="text-slate-400 text-sm mb-6">Pick up exactly where you left off.</p>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">DSA</div>
              <div className="text-white font-semibold mb-3">Binary Search Trees - Insertion</div>
              <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Resume Topic &rarr;
              </button>
            </div>
           </div>
        </div>
      </div>

      <FooterCTA />
    </div>
  );
};

export default CoreSubjects;
