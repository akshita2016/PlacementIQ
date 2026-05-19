import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSelector = () => {
  const { lang, setLang, currentLang, translations } = useLanguage();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const langs = Object.entries(translations).filter(([, v]) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
        title="Change Language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden lg:inline">{currentLang.flag}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-[#0F172A] rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
          {/* Search */}
          <div className="p-3 border-b border-slate-800/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search language..."
                className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                autoFocus
              />
            </div>
          </div>

          {/* Language List */}
          <div className="max-h-72 overflow-y-auto py-2 px-2 space-y-0.5 scrollbar-thin">
            {langs.map(([code, data]) => (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false); setSearch(''); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  lang === code
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{data.flag}</span>
                  <span>{data.name}</span>
                </span>
                {lang === code && <Check className="w-4 h-4 text-blue-400" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
