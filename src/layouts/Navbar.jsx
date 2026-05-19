import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Rocket, LogIn, UserPlus, ChevronDown, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import GradientButton from '../components/ui/GradientButton';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-read user from localStorage whenever the route changes
  useEffect(() => {
    const stored = localStorage.getItem('user');
    setUser(stored ? JSON.parse(stored) : null);
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setDropdownOpen(false);
    window.location.href = '/';
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'DSA Sheet', path: '/dsa' },
    { name: 'Core Subjects', path: '/subjects' },
    { name: 'Resume Guide', path: '/resume' },
    { name: 'Interview Questions', path: '/interview' },
  ];

  const avatarLetter = user?.name ? user.name[0].toUpperCase() : '?';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'py-3 bg-[#020617]/80 backdrop-blur-xl border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'py-5 bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative">
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
              <div className="relative p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white transition-colors">
                Placement IQ
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1 border border-slate-800 bg-[#0F172A]/50 backdrop-blur-md px-2 py-1.5 rounded-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive(link.path) && (
                    <span className="absolute inset-0 bg-blue-600/20 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                /* Profile Dropdown */
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20 border border-blue-400/20">
                      {avatarLetter}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-white transition-all duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-[#0F172A] rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-4 border-b border-slate-800/50 bg-slate-900/50 mx-2 rounded-xl mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                            {avatarLetter}
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">{user.name}</p>
                            <p className="text-xs text-slate-400 truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-1 px-2 space-y-1">
                        <Link to="/dashboard" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
                          <LayoutDashboard className="w-4 h-4 text-blue-400" /> Dashboard
                        </Link>
                        <Link to="#" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
                          <User className="w-4 h-4 text-purple-400" /> Profile
                        </Link>
                        <Link to="#" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
                          <Settings className="w-4 h-4 text-emerald-400" /> Settings
                        </Link>
                      </div>

                      <div className="border-t border-slate-800/50 mt-2 pt-2 px-2">
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-400 rounded-xl hover:bg-red-500/10 hover:text-red-300 transition-colors">
                          <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex items-center gap-2">
                    <LogIn className="w-4 h-4" /> Login
                  </Link>
                  <Link to="/signup">
                    <GradientButton className="px-6 py-2.5 text-sm" icon={<UserPlus className="w-4 h-4" />}>
                      Sign Up
                    </GradientButton>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* External Mobile Menu Component */}
      <MobileMenu 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        navLinks={navLinks} 
        isActive={isActive} 
        user={user} 
        avatarLetter={avatarLetter} 
        handleLogout={handleLogout} 
      />
    </>
  );
}

export default Navbar;
