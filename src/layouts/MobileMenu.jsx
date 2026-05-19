import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, LogIn, UserPlus, LayoutDashboard, LogOut, Globe, Check } from 'lucide-react';
import GradientButton from '../components/ui/GradientButton';
import { useLanguage } from '../contexts/LanguageContext';

const MobileMenu = ({ isOpen, setIsOpen, navLinks, isActive, user, avatarLetter, handleLogout }) => {
  const { lang, setLang, t, translations } = useLanguage();
  const [showLangs, setShowLangs] = useState(false);

  return (
    <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-[#0F172A] border-l border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="p-4 flex justify-end border-b border-slate-800/50">
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
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

          {/* Language Switcher for Mobile */}
          <div className="pt-4 mt-4 border-t border-slate-800">
            <button
              onClick={() => setShowLangs(!showLangs)}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-all"
            >
              <span className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                {t('nav.language')}
              </span>
              <span className="text-lg">{translations[lang]?.flag}</span>
            </button>

            {showLangs && (
              <div className="mt-2 max-h-60 overflow-y-auto space-y-1 px-2">
                {Object.entries(translations).map(([code, data]) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setShowLangs(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lang === code ? 'bg-blue-600/15 text-blue-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{data.flag}</span>
                      <span>{data.name}</span>
                    </span>
                    {lang === code && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800">
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
                  <LayoutDashboard className="w-5 h-5 text-blue-400" /> {t('nav.dashboard')}
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="w-full mt-2 px-4 py-3 text-base font-semibold text-red-400 bg-red-500/10 rounded-xl hover:bg-red-500/20 border border-red-500/20 transition-all flex items-center gap-3"
                >
                  <LogOut className="w-5 h-5" /> {t('nav.signout')}
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 mt-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full px-4 py-3 text-center font-semibold text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
                >
                  <LogIn className="w-5 h-5" /> {t('nav.login')}
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center"
                >
                  <GradientButton className="w-full py-3" icon={<UserPlus className="w-5 h-5" />}>
                    {t('nav.signup')}
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
