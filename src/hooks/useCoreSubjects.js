import { useState, useEffect } from 'react';
import { subjects, dailyChallenge, interviewStatsData, recentActivity } from '../data/coreSubjectsData';

export const useCoreSubjects = () => {
  const [data, setData] = useState({
    subjects: [],
    dailyChallenge: null,
    stats: [],
    recent: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        let progressData = [];
        const token = localStorage.getItem('token');
        if (token) {
          const res = await fetch('http://localhost:5001/api/progress', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            progressData = await res.json();
          }
        }
        
        let totalMastered = 0;
        let cumulativeProgress = 0;
        
        // Merge progress data into subjects array
        const mergedSubjects = subjects.map(subject => {
          const userProgress = progressData.find(p => p.subjectId === subject.id);
          let calculatedProgress = userProgress ? userProgress.percentage : 0;
          
          // Safety check in case of old DB schema documents returning NaN
          if (isNaN(calculatedProgress) || calculatedProgress === null) {
             calculatedProgress = 0;
          }
          
          totalMastered += userProgress && userProgress.completedQuestions ? userProgress.completedQuestions.length : 0;
          cumulativeProgress += calculatedProgress;

          return {
            ...subject,
            progress: calculatedProgress
          };
        });

        // Calculate overall average progress
        let overallProgressPercentage = progressData.length > 0 
          ? Math.round(cumulativeProgress / subjects.length) 
          : 0;
          
        if (isNaN(overallProgressPercentage)) overallProgressPercentage = 0;

        setData({
          subjects: mergedSubjects,
          dailyChallenge,
          stats: interviewStatsData,
          recent: recentActivity,
          totalMastered,
          overallProgressPercentage
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
        setError("Failed to load dashboard data. Please try again.");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Helpers for filtering and searching
  const getFilteredSubjects = (searchQuery = "", difficultyFilter = "All") => {
    return data.subjects.filter(subject => {
      const matchesSearch = subject.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            subject.concepts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDifficulty = difficultyFilter === "All" || subject.difficulty === difficultyFilter;
      
      return matchesSearch && matchesDifficulty;
    });
  };

  return {
    ...data,
    loading,
    error,
    getFilteredSubjects
  };
};
