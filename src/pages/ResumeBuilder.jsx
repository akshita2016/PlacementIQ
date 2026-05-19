import React, { useState, useEffect } from 'react';
import '../styles/theme.css';
import PageContainer from '../components/ui/PageContainer';
import PersonalInfoForm from '../components/resumeBuilder/PersonalInfoForm';
import EducationForm from '../components/resumeBuilder/EducationForm';
import SkillsForm from '../components/resumeBuilder/SkillsForm';
import ProjectsForm from '../components/resumeBuilder/ProjectsForm';
import ExperienceForm from '../components/resumeBuilder/ExperienceForm';
import ResumePreview from '../components/resumeBuilder/ResumePreview';
import ExportControls from '../components/resumeBuilder/ExportControls';
import { User, GraduationCap, Wrench, FolderKanban, Briefcase, Eye } from 'lucide-react';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const steps = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'preview', label: 'Preview', icon: Eye },
];

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [exporting, setExporting] = useState(false);
  const [resumeData, setResumeData] = useState({
    personal: { name: '', title: '', email: '', phone: '', linkedin: '', github: '' },
    education: [],
    skills: [],
    projects: [],
    experience: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExportPDF = async () => {
    setExporting(true);
    try {
      const el = document.getElementById('resume-preview');
      if (!el) { toast.error('Preview not found.'); return; }

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.personal.name || 'Resume'}_ATS.pdf`);
      toast.success('Resume exported as PDF!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to export PDF.');
    } finally {
      setExporting(false);
    }
  };

  const renderForm = () => {
    switch (steps[currentStep].id) {
      case 'personal':
        return <PersonalInfoForm data={resumeData.personal} onChange={(d) => setResumeData(prev => ({ ...prev, personal: d }))} />;
      case 'education':
        return <EducationForm data={resumeData.education} onChange={(d) => setResumeData(prev => ({ ...prev, education: d }))} />;
      case 'skills':
        return <SkillsForm data={resumeData.skills} onChange={(d) => setResumeData(prev => ({ ...prev, skills: d }))} />;
      case 'projects':
        return <ProjectsForm data={resumeData.projects} onChange={(d) => setResumeData(prev => ({ ...prev, projects: d }))} />;
      case 'experience':
        return <ExperienceForm data={resumeData.experience} onChange={(d) => setResumeData(prev => ({ ...prev, experience: d }))} />;
      case 'preview':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Preview & Export</h3>
              <ExportControls onExport={handleExportPDF} exporting={exporting} />
            </div>
            <div className="bg-slate-800/30 p-4 rounded-2xl">
              <ResumePreview data={resumeData} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Builder</span>
          </h1>
          <p className="text-slate-400 text-lg">Fill in your details. Preview updates live. Export as ATS-friendly PDF.</p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === currentStep;
            const isComplete = idx < currentStep;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : isComplete
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Panel */}
          <div className="lg:w-1/2">
            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8">
              {renderForm()}

              {/* Navigation */}
              {steps[currentStep].id !== 'preview' && (
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-colors"
                  >
                    {currentStep === steps.length - 2 ? 'Preview' : 'Next'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Live Preview Panel (desktop) */}
          <div className="lg:w-1/2 hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Live Preview</h3>
                <ExportControls onExport={handleExportPDF} exporting={exporting} />
              </div>
              <div className="bg-slate-800/20 border border-slate-800 rounded-2xl p-4 overflow-auto max-h-[80vh]">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ResumeBuilder;
