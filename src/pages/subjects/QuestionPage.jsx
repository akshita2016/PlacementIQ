import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjectsData } from '../../data/subjects';
import { ArrowLeft, Loader2, CheckCircle2, Circle, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const QuestionPage = () => {
  const { subjectId, topicId, questionId } = useParams();
  const navigate = useNavigate();
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const subject = subjectsData[subjectId];
  const topic = subject?.topics.find(t => t.id === topicId);
  const questionIndex = topic?.questions.findIndex(q => q.id === questionId);
  const question = topic?.questions[questionIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAnswer(false);
    if (!subject || !topic || !question) {
      toast.error('Question not found');
      navigate('/subjects');
      return;
    }
    fetchProgress();
  }, [subjectId, topicId, questionId, subject, topic, question, navigate]);

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

  const handleToggleSolved = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to save your progress');
      return;
    }

    setUpdating(true);
    const isCurrentlySolved = completedQuestions.includes(questionId);
    let newCompleted;
    
    if (isCurrentlySolved) {
      newCompleted = completedQuestions.filter(id => id !== questionId);
    } else {
      newCompleted = [...completedQuestions, questionId];
    }

    // Optimistic update
    setCompletedQuestions(newCompleted);

    try {
      let totalQuestionsCount = 0;
      subject.topics.forEach(t => totalQuestionsCount += t.questions.length);
      
      const res = await fetch(`http://localhost:5001/api/progress/${subjectId}/question/${questionId}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
          totalQuestions: totalQuestionsCount
        })
      });

      if (!res.ok) {
        throw new Error('Failed to update progress');
      }
      
      if (!isCurrentlySolved) {
        toast.success("Marked as Solved! 🎉");
      }
    } catch (err) {
      // Revert optimistic update
      if (isCurrentlySolved) {
        setCompletedQuestions([...completedQuestions, questionId]);
      } else {
        setCompletedQuestions(completedQuestions.filter(id => id !== questionId));
      }
      toast.error('Failed to save progress.');
    } finally {
      setUpdating(false);
    }
  };

  const navigateToQuestion = (dir) => {
    const newIdx = questionIndex + dir;
    if (newIdx >= 0 && newIdx < topic.questions.length) {
      const nextQ = topic.questions[newIdx];
      navigate(`/subjects/${subjectId}/topic/${topicId}/question/${nextQ.id}`);
    } else if (dir === 1) {
      // Next topic or back to topic detail
      toast('You finished all questions in this topic!', { icon: '👏' });
      navigate(`/subjects/${subjectId}/topic/${topicId}`);
    }
  };

  if (!question) return null;

  const isSolved = completedQuestions.includes(question.id);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <button 
          onClick={() => navigate(`/subjects/${subjectId}/topic/${topicId}`)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {topic.title}
        </button>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    question.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    question.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                    'bg-red-500/10 text-red-400 border-red-500/20'
                  }`}>
                    {question.difficulty}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    Question {questionIndex + 1} of {topic.questions.length}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {question.question}
                </h1>
              </div>

              <button 
                onClick={handleToggleSolved}
                disabled={updating}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  isSolved 
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/20' 
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                  isSolved ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />
                )}
                {isSolved ? 'Solved' : 'Mark as Solved'}
              </button>
            </div>

            <div className="mb-10">
              {!showAnswer ? (
                <div className="py-12 flex flex-col items-center justify-center border border-dashed border-slate-700 rounded-2xl bg-slate-800/20">
                  <Eye className="w-10 h-10 text-slate-600 mb-4" />
                  <p className="text-slate-400 mb-4 text-center max-w-sm">
                    Try to answer this question yourself before viewing the solution.
                  </p>
                  <button 
                    onClick={() => setShowAnswer(true)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
                  >
                    Show Answer
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-lg font-bold text-slate-300 mb-4">Solution</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-200 text-lg leading-relaxed whitespace-pre-wrap bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      {question.answer}
                    </p>
                    
                    {question.notes && (
                      <div className="mt-6 bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Pro Tip / Notes</div>
                        <p className="text-blue-100/80 text-sm m-0">
                          {question.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <button 
                onClick={() => navigateToQuestion(-1)}
                disabled={questionIndex === 0}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              
              <button 
                onClick={() => navigateToQuestion(1)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {questionIndex === topic.questions.length - 1 ? 'Finish Topic' : 'Next'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
