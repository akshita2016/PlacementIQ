import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectsData } from '../../data/subjects';
import { ArrowLeft, Loader2, PlayCircle, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const TopicDetail = () => {
  const { subjectId, topicId } = useParams();
  const navigate = useNavigate();
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const subject = subjectsData[subjectId];
  const topic = subject?.topics.find(t => t.id === topicId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!subject || !topic) {
      toast.error('Topic not found');
      navigate('/subjects');
      return;
    }
    fetchProgress();
  }, [subjectId, topicId, subject, topic, navigate]);

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

  if (!subject || !topic) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <button 
          onClick={() => navigate(`/subjects/${subjectId}`)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {subject.title}
        </button>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{topic.title}</h1>
          <p className="text-slate-400 text-lg">{topic.description}</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
          </div>
        ) : (
          <div className="space-y-4">
            {topic.questions.map((question, idx) => {
              const isSolved = completedQuestions.includes(question.id);

              return (
                <div 
                  key={question.id}
                  onClick={() => navigate(`/subjects/${subjectId}/topic/${topicId}/question/${question.id}`)}
                  className={`bg-slate-900 border ${isSolved ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-800'} rounded-2xl p-5 hover:border-slate-600 transition-colors cursor-pointer group flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-slate-500 font-bold w-6">{idx + 1}.</div>
                    <div>
                      <h3 className={`font-semibold text-lg ${isSolved ? 'text-slate-300' : 'text-slate-100'} group-hover:text-white transition-colors`}>
                        {question.question}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          question.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          question.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                          'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {isSolved ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <PlayCircle className="w-6 h-6 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    )}
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

export default TopicDetail;
