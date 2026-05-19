import React from 'react';
import { Link } from 'react-router-dom';
import { X, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import GradientButton from '../components/ui/GradientButton';

const MobileMenu = ({ isOpen, setIsOpen, navLinks, isActive, user, avatarLetter, handleLogout }) => {
  return (
    <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-[#0F172A] border-l border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-end border-b border-slate-800/50">
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                isActive(link.path) 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 mt-6 border-t border-slate-800">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                    {avatarLetter}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </div>
                <Link 
                  to="/dashboard" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full px-4 py-3 text-base font-medium rounded-xl text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-3"
                >
                  <LayoutDashboard className="w-5 h-5 text-blue-400" /> Dashboard
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="w-full mt-2 px-4 py-3 text-base font-semibold text-red-400 bg-red-500/10 rounded-xl hover:bg-red-500/20 border border-red-500/20 transition-all flex items-center gap-3"
                >
                  <LogOut className="w-5 h-5" /> Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 mt-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full px-4 py-3 text-center font-semibold text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
                >
                  <LogIn className="w-5 h-5" /> Login
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center"
                >
                  <GradientButton className="w-full py-3" icon={<UserPlus className="w-5 h-5" />}>
                    Sign Up
                  </GradientButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
