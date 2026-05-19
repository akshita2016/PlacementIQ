import React, { useState, useRef, useCallback } from 'react';
import GlowCard from '../ui/GlowCard';
import { UploadCloud, Bot, Sparkles, FileText, X, Loader2 } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import toast from 'react-hot-toast';
import { analyzeResume } from '../../services/resumeService';
import ResumeResults from './ResumeResults';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [status, setStatus] = useState('idle'); // idle | uploading | analyzing | done | error
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const validateFile = (f) => {
    if (f.type !== 'application/pdf') {
      toast.error('Only PDF files are accepted.');
      return false;
    }
    if (f.size > 5 * 1024 * 1024) {
      toast.error('File size must be under 5MB.');
      return false;
    }
    return true;
  };

  const handleFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected && validateFile(selected)) {
      setFile(selected);
      setError('');
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
      setError('');
    }
  }, []);

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please select a PDF file first.');
      return;
    }

    setStatus('uploading');
    setError('');

    try {
      // Brief delay to show upload state
      await new Promise(r => setTimeout(r, 500));
      setStatus('analyzing');

      const data = await analyzeResume(file, jobDescription);
      setResults(data);
      setStatus('done');
      toast.success('Analysis complete!');
    } catch (err) {
      setError(err.message);
      setStatus('error');
      toast.error(err.message);
    }
  };

  const handleReset = () => {
    setFile(null);
    setJobDescription('');
    setStatus('idle');
    setResults(null);
    setError('');
  };

  // Show results dashboard when analysis is done
  if (status === 'done' && results) {
    return <ResumeResults results={results} onReset={handleReset} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
      <GlowCard className="p-10 md:p-16 text-center border-indigo-500/20" glowColor="rgba(99, 102, 241, 0.15)">
        <div className="w-20 h-20 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
          <Bot className="w-10 h-10 text-indigo-400" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">AI Resume Analyzer</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Upload your current resume to get an instant ATS score, keyword match analysis, and actionable improvement suggestions.
        </p>
        
        {/* Upload Zone */}
        <div 
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-3xl p-10 transition-all cursor-pointer group mb-6 ${
            dragActive 
              ? 'border-indigo-500 bg-indigo-500/10' 
              : file 
                ? 'border-emerald-500/50 bg-emerald-500/5' 
                : 'border-slate-700 hover:border-indigo-500/50 bg-[#020617]/50'
          }`}
        >
          <input 
            ref={fileInputRef}
            type="file" 
            accept=".pdf" 
            className="hidden" 
            onChange={handleFileSelect}
          />
          
          {file ? (
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <p className="text-white font-medium">{file.name}</p>
                <p className="text-slate-500 text-sm">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setFile(null); }}
                className="ml-4 p-1.5 bg-slate-800 hover:bg-red-500/20 rounded-lg transition-colors text-slate-400 hover:text-red-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <UploadCloud className={`w-12 h-12 mx-auto mb-4 transition-colors ${dragActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-400'}`} />
              <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-slate-500 text-sm">PDF only (Max 5MB)</p>
            </>
          )}
        </div>

        {/* Job Description Field (Optional) */}
        <div className="mb-8 text-left">
          <label className="text-sm font-bold text-slate-300 block mb-2">
            <Sparkles className="w-4 h-4 inline mr-1 text-blue-400" />
            Paste Job Description <span className="text-slate-500 font-normal">(optional — for keyword matching)</span>
          </label>
          <textarea 
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job posting here for a targeted ATS match analysis..."
            className="w-full bg-[#020617] border border-slate-700 focus:border-indigo-500 rounded-2xl p-4 text-white text-sm placeholder-slate-600 focus:outline-none resize-none transition-colors"
            rows={4}
          />
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Analyze Button */}
        <GradientButton 
          onClick={handleAnalyze}
          className={`!bg-indigo-600 hover:!bg-indigo-500 w-full sm:w-auto ${(status === 'uploading' || status === 'analyzing') ? 'opacity-80 cursor-not-allowed' : ''}`}
          icon={
            status === 'uploading' || status === 'analyzing'
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <Sparkles className="w-4 h-4" />
          }
        >
          {status === 'uploading' ? 'Uploading...' : status === 'analyzing' ? 'Analyzing ATS compatibility...' : 'Analyze Now'}
        </GradientButton>
      </GlowCard>
    </div>
  );
};

export default ResumeAnalyzer;
