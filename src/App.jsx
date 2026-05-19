import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './contexts/LanguageContext';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import HomeOld from './pages/HomeOld';
import DSA from './pages/DSA';
import Subjects from './pages/Subjects';
import CoreSubjects from './pages/CoreSubjects';
import SubjectDetail from './pages/subjects/SubjectDetail';
import TopicDetail from './pages/subjects/TopicDetail';
import QuestionPage from './pages/subjects/QuestionPage';
import Resume from './pages/Resume';
import ResumeGuide from './pages/ResumeGuide';
import Interview from './pages/Interview';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import GoogleSuccess from "./pages/GoogleSuccess";
import ProtectedRoute from "./components/ProtectedRoute";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="App">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-old" element={<HomeOld />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/subjects-old" element={<Subjects />} />
            <Route path="/subjects" element={<CoreSubjects />} />
            <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
            <Route path="/subjects/:subjectId/topic/:topicId" element={<TopicDetail />} />
            <Route path="/subjects/:subjectId/topic/:topicId/question/:questionId" element={<QuestionPage />} />
            <Route path="/resume-old" element={<Resume />} />
            <Route path="/resume" element={<ResumeGuide />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/resume-history" element={
              <ProtectedRoute>
                <ResumeHistory />
              </ProtectedRoute>
            } />
            <Route path="/interview" element={<Interview />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/google-success" element={<GoogleSuccess />} />
          </Routes>
        </AppLayout>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0F172A',
              color: '#F8FAFC',
              border: '1px solid #1E293B',
              borderRadius: '1rem',
            },
            success: { iconTheme: { primary: '#10B981', secondary: '#F8FAFC' } },
            error: { iconTheme: { primary: '#EF4444', secondary: '#F8FAFC' } },
          }}
        />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;