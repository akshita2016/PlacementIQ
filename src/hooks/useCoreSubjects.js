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

  // Phase 1: Simulate API call with static data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Simulate network delay for realistic feel
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setData({
          subjects,
          dailyChallenge,
          stats: interviewStatsData,
          recent: recentActivity
        });
        
        setLoading(false);
      } catch (err) {
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
