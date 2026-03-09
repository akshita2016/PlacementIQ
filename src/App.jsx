import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DSA from './pages/DSA';
import Subjects from './pages/Subjects';
import Resume from './pages/Resume';
import Interview from './pages/Interview';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;