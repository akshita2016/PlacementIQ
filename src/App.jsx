import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import DSA from './pages/DSA';
import Subjects from './pages/Subjects';
import CoreSubjects from './pages/CoreSubjects';
import Resume from './pages/Resume';
import ResumeGuide from './pages/ResumeGuide';
import Interview from './pages/Interview';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import GoogleSuccess from "./pages/GoogleSuccess";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/subjects-old" element={<Subjects />} />
            <Route path="/subjects" element={<CoreSubjects />} />
            <Route path="/resume-old" element={<Resume />} />
            <Route path="/resume" element={<ResumeGuide />} />
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
      </div>
    </Router>
  );
}

export default App;