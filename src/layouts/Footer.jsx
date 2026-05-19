import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 pt-16 pb-8 relative overflow-hidden mt-auto">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 blur-sm" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/20">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Placement IQ
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The ultimate platform to master core subjects, practice DSA, and build ATS-friendly resumes to crack your dream tech job.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/dsa" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">DSA Sheet</Link></li>
              <li><Link to="/subjects" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Core Subjects</Link></li>
              <li><Link to="/resume" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Resume Builder</Link></li>
              <li><Link to="/interview" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Interview Prep</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Mock Tests</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Company Experiences</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Roadmaps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Get the latest interview questions delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 text-white text-sm rounded-xl px-4 py-2.5 w-full focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Placement IQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
