import React, { useEffect } from 'react';
import '../styles/theme.css';
import PageContainer from '../components/ui/PageContainer';
import SectionContainer from '../components/ui/SectionContainer';
import SectionHeading from '../components/ui/SectionHeading';

const ResumeGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <SectionContainer className="pt-32">
        <SectionHeading 
          title="Build ATS-Friendly Resumes" 
          subtitle="Get shortlisted faster with recruiter-approved resume strategies."
          centered
        />
        <div className="text-center text-slate-400 mt-20">
          <p>Resume builder tools coming soon...</p>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default ResumeGuide;
