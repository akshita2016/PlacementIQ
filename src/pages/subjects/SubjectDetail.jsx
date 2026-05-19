import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectsData } from '../../data/subjects';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2, ChevronRight, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

const SubjectDetail = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const subject = subjectsData[subjectId];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!subject) {
      toast.error('Subject not found');
      navigate('/subjects');
      return;
    }
    fetchProgress();
  }, [subjectId, subject, navigate]);

  const fetchProgress = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const res = await fetch(`http://localhost:5001/api/progress/${subjectId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (res.ok && data.completedQuestions) {
        setCompletedQuestions(data.completedQuestions);
      }
    } catch (err) {
      console.error("Failed to fetch progress", err);
    } finally {
      setLoading(false);
    }
  };

  if (!subject) return null;

  // Calculate total questions for this subject
  let totalQuestionsCount = 0;
  subject.topics.forEach(t => totalQuestionsCount += t.questions.length);
  
  const progressPercentage = totalQuestionsCount === 0 ? 0 : Math.round((completedQuestions.length / totalQuestionsCount) * 100);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <button 
          onClick={() => navigate('/subjects')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        {/* Header */}
        <div className={`p-8 md:p-10 rounded-3xl bg-gradient-to-br ${subject.color} mb-12 relative overflow-hidden shadow-2xl`}>
          <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{subject.title}</h1>
            <p className="text-white/80 text-lg max-w-2xl">{subject.description}</p>
            
            <div className="mt-8 bg-black/40 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-white/90">Overall Subject Progress</span>
                <span className="font-bold text-white">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="bg-white h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-white/60 mt-3">
                {completedQuestions.length} of {totalQuestionsCount} questions solved
              </p>
            </div>
          </div>
        </div>

        {/* Topics List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Course Topics</h2>
            {subject.topics.map((topic, idx) => {
              // Calculate topic-specific progress
              const solvedInTopic = topic.questions.filter(q => completedQuestions.includes(q.id)).length;
              const topicTotal = topic.questions.length;
              const topicProgress = topicTotal === 0 ? 0 : Math.round((solvedInTopic / topicTotal) * 100);

              return (
                <div 
                  key={topic.id} 
                  onClick={() => navigate(`/subjects/${subjectId}/topic/${topic.id}`)}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 rounded-2xl p-6 cursor-pointer transition-all duration-300 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors mb-1">
                        {idx + 1}. {topic.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <div className="text-sm font-bold text-slate-300">{solvedInTopic} / {topicTotal} Solved</div>
                      <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                         <div className="h-full bg-blue-500 rounded-full" style={{ width: `${topicProgress}%` }} />
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;
