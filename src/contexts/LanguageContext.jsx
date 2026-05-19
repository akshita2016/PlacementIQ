import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';
import pageTranslations from '../i18n/pageTranslations';

const LanguageContext = createContext();

const STORAGE_KEY = 'placementiq_lang';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    // First check nav translations
    let val = translations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    if (val !== undefined) return val;
    // Fallback to English nav
    val = translations['en'];
    for (const k of keys) {
      val = val?.[k];
    }
    return val || path;
  };

  // Page content translator — checks page translations then falls back to English
  const tp = (path) => {
    const keys = path.split('.');
    let val = pageTranslations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    if (val !== undefined) return val;
    // Fallback to English
    val = pageTranslations['en'];
    for (const k of keys) {
      val = val?.[k];
    }
    return val || path;
  };

  const currentLang = translations[lang] || translations['en'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tp, currentLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
