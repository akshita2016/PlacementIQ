import React, { useEffect } from 'react';
import '../styles/theme.css';
import PageContainer from '../components/ui/PageContainer';
import ResumeHero from '../components/resume/ResumeHero';
import ATSPreview from '../components/resume/ATSPreview';
import ResumeTemplates from '../components/resume/ResumeTemplates';
import ResumeBuilderSteps from '../components/resume/ResumeBuilderSteps';
import RecruiterInsights from '../components/resume/RecruiterInsights';
import CommonMistakes from '../components/resume/CommonMistakes';
import ResumeAnalyzer from '../components/resume/ResumeAnalyzer';
import ResumeStats from '../components/resume/ResumeStats';
import ResumeCTA from '../components/resume/ResumeCTA';

const ResumeGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <ResumeHero />
      <ATSPreview />
      <ResumeTemplates />
      <ResumeBuilderSteps />
      <RecruiterInsights />
      <CommonMistakes />
      <ResumeAnalyzer />
      <ResumeStats />
      <ResumeCTA />
    </PageContainer>
  );
};

export default ResumeGuide;
