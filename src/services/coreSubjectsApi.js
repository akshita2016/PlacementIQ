import axios from 'axios';

// Create an axios instance for core subjects API
// In Phase 3, we will use this to call our real backend.
const api = axios.create({
  baseURL: 'http://localhost:5001/api/core-subjects',
  withCredentials: true
});

export const coreSubjectsApi = {
  // Get all core subjects dashboard data
  getAllSubjects: async () => {
    // Phase 1: Not implemented yet, will throw error if used. 
    // We are using static data for now.
    const response = await api.get('/all');
    return response.data;
  },

  // Get specific subject details
  getSubjectById: async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  // Get daily challenge
  getDailyChallenge: async () => {
    const response = await api.get('/daily-challenge');
    return response.data;
  },

  // Update user progress
  updateProgress: async (subjectId, topicId, completed) => {
    const response = await api.put('/progress', { subjectId, topicId, completed });
    return response.data;
  }
};
