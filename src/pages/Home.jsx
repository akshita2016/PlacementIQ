import React, { useEffect } from 'react';
import '../styles/theme.css';
import PageContainer from '../components/ui/PageContainer';
import HeroBackground from '../components/home/HeroBackground';
import GradientButton from '../components/ui/GradientButton';
import { Rocket, ArrowRight } from 'lucide-react';
import StatsSection from '../components/home/StatsSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import CompanyLogos from '../components/home/CompanyLogos';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 min-h-[90vh] flex flex-col justify-center">
        <HeroBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted by 10,000+ Students
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Master DSA.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Build ATS Resumes.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">Ace Interviews.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The all-in-one platform to crack product companies. Stop guessing what to study and follow our proven roadmaps.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton icon={<Rocket className="w-5 h-5" />} className="w-full sm:w-auto">
              Start Free Practice
            </GradientButton>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 border border-white/10 flex items-center justify-center gap-2 backdrop-blur-md">
              View Curriculum <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <StatsSection />
      <CompanyLogos />
      <FeaturesGrid />
      <Testimonials />
      <CTASection />
    </PageContainer>
  );
};

export default Home;
