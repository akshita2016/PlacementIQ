// Page content translations for all 27 languages
const pageTranslations = {
  en: {
    home: {
      badge: "Trusted by 10,000+ Students",
      h1_1: "Master DSA.", h1_2: "Build ATS Resumes.", h1_3: "Ace Interviews.",
      subtitle: "The all-in-one platform to crack product companies. Stop guessing what to study and follow our proven roadmaps.",
      cta1: "Start Practicing", cta2: "View Core Subjects",
      stats: { students: "Students Placed", problems: "DSA Problems", questions: "Interview Qs", ats: "Avg ATS Score" },
      features_title: "Everything You Need to Get Placed",
      features_sub: "A complete toolkit for your placement preparation journey.",
      companies_title: "Trusted by Students Placed At",
      testimonials_title: "What Students Say",
      cta_title: "Ready to crack your dream company?",
      cta_sub: "Join thousands of students who landed offers at top product companies.",
      cta_btn: "Start Your Journey"
    },
    dsa: {
      title: "DSA Practice Sheet",
      subtitle: "Master Data Structures and Algorithms with our curated problem sets and step-by-step guidance.",
      progress: "Overall Progress", solved: "problems solved",
      filter: "Filter:", reset: "Reset Progress",
      explore: "Explore Problems", minimize: "Minimize",
      tips_title: "Study Tips for Success", tips_sub: "Maximum efficiency for your prep journey",
      tip1_title: "Start with Basics", tip1: "Begin with Arrays and Strings before moving to complex data structures.",
      tip2_title: "Practice Daily", tip2: "Solve at least 2-3 problems daily to build long-term consistency.",
      tip3_title: "Review Solutions", tip3: "Always review multiple approaches and optimize your time/space complexity.",
      tip4_title: "Time Yourself", tip4: "Practice solving problems within interview time constraints (30-45 mins)."
    },
    interview: {
      badge_suffix: "Questions · Strategy · Sample Answers · Practice Mode",
      title1: "Interview Prep", title2: "That Actually Prepares You",
      subtitle: "Not just questions — full strategy, answer structure, sample answers, do's & don'ts, and a built-in practice mode.",
      search: "Search questions...", showing: "Showing", questions: "questions",
      saved: "Saved", prep_timeline: "Prep Timeline", power_tactics: "Power Tactics",
      week_before: "1 Week Before", day_before: "1 Day Before", interview_day: "Interview Day"
    },
    resume: {
      badge: "ATS Score Optimizer 2.0",
      title1: "Build", title_highlight: "ATS-Friendly", title2: "Resumes",
      subtitle: "Get shortlisted faster. Our recruiter-approved templates and AI keyword analyzer ensure your resume beats the bots.",
      analyze_btn: "Analyze Resume", templates_btn: "View Templates",
      templates_title: "ATS-Optimized Templates",
      templates_sub: "Start with a winning foundation. These templates are battle-tested against modern Applicant Tracking Systems.",
      analyzer_title: "AI Resume Analyzer",
      analyzer_sub: "Upload your current resume to get an instant ATS score, keyword match analysis, and actionable improvement suggestions.",
      upload_text: "Click to upload or drag and drop", upload_hint: "PDF only (Max 5MB)",
      analyze_now: "Analyze Now", jd_label: "Paste Job Description", jd_hint: "(optional — for keyword matching)",
      cta_title: "Stop getting rejected by bots.",
      cta_sub: "Create a resume that passes the ATS filters and catches the recruiter's eye.",
      build_btn: "Build Your Resume", examples_btn: "View Examples"
    }
  },
  hi: {
    home: {
      badge: "10,000+ छात्रों द्वारा विश्वसनीय",
      h1_1: "DSA में महारत।", h1_2: "ATS रिज़्यूमे बनाएं।", h1_3: "इंटरव्यू में सफल हों।",
      subtitle: "प्रोडक्ट कंपनियों में जॉब पाने का सम्पूर्ण प्लेटफॉर्म। अनुमान लगाना बंद करें और हमारे प्रमाणित रोडमैप का पालन करें।",
      cta1: "अभ्यास शुरू करें", cta2: "मूल विषय देखें",
      stats: { students: "छात्र प्लेस हुए", problems: "DSA प्रश्न", questions: "इंटरव्यू प्रश्न", ats: "औसत ATS स्कोर" },
      features_title: "प्लेसमेंट के लिए सब कुछ",
      features_sub: "आपकी प्लेसमेंट तैयारी के लिए सम्पूर्ण टूलकिट।",
      companies_title: "इन कंपनियों में चयनित छात्रों द्वारा विश्वसनीय",
      testimonials_title: "छात्र क्या कहते हैं",
      cta_title: "अपनी ड्रीम कंपनी पाने के लिए तैयार?",
      cta_sub: "हज़ारों छात्रों से जुड़ें जिन्होंने टॉप कंपनियों में ऑफर प्राप्त किया।",
      cta_btn: "अपनी यात्रा शुरू करें"
    },
    dsa: {
      title: "DSA अभ्यास शीट", subtitle: "हमारे क्यूरेटेड प्रॉब्लम सेट और चरण-दर-चरण मार्गदर्शन के साथ डेटा स्ट्रक्चर और एल्गोरिथम में महारत हासिल करें।",
      progress: "समग्र प्रगति", solved: "प्रश्न हल किए", filter: "फिल्टर:", reset: "प्रगति रीसेट करें",
      explore: "समस्याएं देखें", minimize: "छोटा करें",
      tips_title: "सफलता के लिए अध्ययन टिप्स", tips_sub: "आपकी तैयारी यात्रा के लिए अधिकतम दक्षता",
      tip1_title: "बुनियादी बातों से शुरू करें", tip1: "जटिल डेटा स्ट्रक्चर से पहले Arrays और Strings से शुरू करें।",
      tip2_title: "रोज़ अभ्यास करें", tip2: "दीर्घकालिक निरंतरता के लिए प्रतिदिन कम से कम 2-3 समस्याएं हल करें।",
      tip3_title: "समाधान की समीक्षा करें", tip3: "हमेशा कई दृष्टिकोणों की समीक्षा करें और समय/स्थान जटिलता को अनुकूलित करें।",
      tip4_title: "समय रखें", tip4: "इंटरव्यू समय सीमा (30-45 मिनट) के भीतर समस्याएं हल करने का अभ्यास करें।"
    },
    interview: {
      badge_suffix: "प्रश्न · रणनीति · नमूना उत्तर · अभ्यास मोड",
      title1: "इंटरव्यू की तैयारी", title2: "जो वास्तव में तैयार करती है",
      subtitle: "सिर्फ प्रश्न नहीं — पूर्ण रणनीति, उत्तर संरचना, नमूना उत्तर, क्या करें और क्या न करें।",
      search: "प्रश्न खोजें...", showing: "दिखा रहे हैं", questions: "प्रश्न",
      saved: "सेव किए", prep_timeline: "तैयारी समयरेखा", power_tactics: "पावर टैक्टिक्स",
      week_before: "1 सप्ताह पहले", day_before: "1 दिन पहले", interview_day: "इंटरव्यू का दिन"
    },
    resume: {
      badge: "ATS स्कोर ऑप्टिमाइज़र 2.0",
      title1: "बनाएं", title_highlight: "ATS-अनुकूल", title2: "रिज़्यूमे",
      subtitle: "तेज़ी से शॉर्टलिस्ट हों। हमारे भर्तीकर्ता-अनुमोदित टेम्पलेट और AI कीवर्ड विश्लेषक सुनिश्चित करते हैं कि आपका रिज़्यूमे बॉट्स को हराए।",
      analyze_btn: "रिज़्यूमे विश्लेषण करें", templates_btn: "टेम्पलेट देखें",
      templates_title: "ATS-ऑप्टिमाइज़्ड टेम्पलेट",
      templates_sub: "एक विजेता नींव से शुरू करें। ये टेम्पलेट आधुनिक ATS के खिलाफ परीक्षित हैं।",
      analyzer_title: "AI रिज़्यूमे विश्लेषक",
      analyzer_sub: "तुरंत ATS स्कोर, कीवर्ड मैच विश्लेषण, और कार्रवाई योग्य सुधार सुझाव प्राप्त करें।",
      upload_text: "अपलोड करें या ड्रैग और ड्रॉप करें", upload_hint: "केवल PDF (अधिकतम 5MB)",
      analyze_now: "अभी विश्लेषण करें", jd_label: "जॉब विवरण पेस्ट करें", jd_hint: "(वैकल्पिक — कीवर्ड मिलान के लिए)",
      cta_title: "बॉट्स द्वारा रिजेक्ट होना बंद करें।",
      cta_sub: "एक ऐसा रिज़्यूमे बनाएं जो ATS फिल्टर पास करे।",
      build_btn: "अपना रिज़्यूमे बनाएं", examples_btn: "उदाहरण देखें"
    }
  },
  pa: {
    home: { badge: "10,000+ ਵਿਦਿਆਰਥੀਆਂ ਦੁਆਰਾ ਭਰੋਸੇਯੋਗ", h1_1: "DSA ਵਿੱਚ ਮੁਹਾਰਤ।", h1_2: "ATS ਰਿਜ਼ਿਊਮ ਬਣਾਓ।", h1_3: "ਇੰਟਰਵਿਊ ਵਿੱਚ ਸਫਲ ਹੋਵੋ।", subtitle: "ਪ੍ਰੋਡਕਟ ਕੰਪਨੀਆਂ ਵਿੱਚ ਨੌਕਰੀ ਪਾਉਣ ਲਈ ਸੰਪੂਰਨ ਪਲੇਟਫਾਰਮ।", cta1: "ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ", cta2: "ਮੁੱਖ ਵਿਸ਼ੇ ਵੇਖੋ", stats: { students: "ਵਿਦਿਆਰਥੀ ਪਲੇਸ ਹੋਏ", problems: "DSA ਸਮੱਸਿਆਵਾਂ", questions: "ਇੰਟਰਵਿਊ ਸਵਾਲ", ats: "ਔਸਤ ATS ਸਕੋਰ" }, features_title: "ਪਲੇਸਮੈਂਟ ਲਈ ਸਭ ਕੁਝ", features_sub: "ਤੁਹਾਡੀ ਤਿਆਰੀ ਲਈ ਸੰਪੂਰਨ ਟੂਲਕਿੱਟ।", companies_title: "ਇਨ੍ਹਾਂ ਕੰਪਨੀਆਂ ਵਿੱਚ ਭਰੋਸੇਯੋਗ", testimonials_title: "ਵਿਦਿਆਰਥੀ ਕੀ ਕਹਿੰਦੇ ਹਨ", cta_title: "ਆਪਣੀ ਸੁਪਨਿਆਂ ਦੀ ਕੰਪਨੀ ਪਾਉਣ ਲਈ ਤਿਆਰ?", cta_sub: "ਹਜ਼ਾਰਾਂ ਵਿਦਿਆਰਥੀਆਂ ਨਾਲ ਜੁੜੋ।", cta_btn: "ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ" },
    dsa: { title: "DSA ਅਭਿਆਸ ਸ਼ੀਟ", subtitle: "ਡੇਟਾ ਸਟ੍ਰਕਚਰ ਅਤੇ ਐਲਗੋਰਿਦਮ ਵਿੱਚ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰੋ।", progress: "ਸਮੁੱਚੀ ਪ੍ਰਗਤੀ", solved: "ਹੱਲ ਕੀਤੇ", filter: "ਫਿਲਟਰ:", reset: "ਪ੍ਰਗਤੀ ਰੀਸੈੱਟ", explore: "ਸਮੱਸਿਆਵਾਂ ਵੇਖੋ", minimize: "ਛੋਟਾ ਕਰੋ", tips_title: "ਅਧਿਐਨ ਸੁਝਾਅ", tips_sub: "ਵੱਧ ਤੋਂ ਵੱਧ ਕੁਸ਼ਲਤਾ", tip1_title: "ਬੁਨਿਆਦੀ ਗੱਲਾਂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ", tip1: "Arrays ਅਤੇ Strings ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।", tip2_title: "ਰੋਜ਼ ਅਭਿਆਸ ਕਰੋ", tip2: "ਰੋਜ਼ 2-3 ਸਮੱਸਿਆਵਾਂ ਹੱਲ ਕਰੋ।", tip3_title: "ਸਮੀਖਿਆ ਕਰੋ", tip3: "ਕਈ ਤਰੀਕਿਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।", tip4_title: "ਸਮਾਂ ਰੱਖੋ", tip4: "30-45 ਮਿੰਟਾਂ ਵਿੱਚ ਹੱਲ ਕਰਨ ਦਾ ਅਭਿਆਸ ਕਰੋ।" },
    interview: { badge_suffix: "ਸਵਾਲ · ਰਣਨੀਤੀ · ਨਮੂਨਾ ਜਵਾਬ · ਅਭਿਆਸ ਮੋਡ", title1: "ਇੰਟਰਵਿਊ ਦੀ ਤਿਆਰੀ", title2: "ਜੋ ਅਸਲ ਵਿੱਚ ਤਿਆਰ ਕਰੇ", subtitle: "ਸਿਰਫ਼ ਸਵਾਲ ਨਹੀਂ — ਪੂਰੀ ਰਣਨੀਤੀ, ਜਵਾਬ ਢਾਂਚਾ, ਨਮੂਨਾ ਜਵਾਬ।", search: "ਸਵਾਲ ਖੋਜੋ...", showing: "ਦਿਖਾ ਰਹੇ", questions: "ਸਵਾਲ", saved: "ਸੇਵ ਕੀਤੇ", prep_timeline: "ਤਿਆਰੀ ਸਮਾਂਰੇਖਾ", power_tactics: "ਪਾਵਰ ਟੈਕਟਿਕਸ", week_before: "1 ਹਫ਼ਤਾ ਪਹਿਲਾਂ", day_before: "1 ਦਿਨ ਪਹਿਲਾਂ", interview_day: "ਇੰਟਰਵਿਊ ਦਾ ਦਿਨ" },
    resume: { badge: "ATS ਸਕੋਰ ਔਪਟੀਮਾਈਜ਼ਰ 2.0", title1: "ਬਣਾਓ", title_highlight: "ATS-ਅਨੁਕੂਲ", title2: "ਰਿਜ਼ਿਊਮ", subtitle: "ਤੇਜ਼ੀ ਨਾਲ ਸ਼ੌਰਟਲਿਸਟ ਹੋਵੋ।", analyze_btn: "ਰਿਜ਼ਿਊਮ ਵਿਸ਼ਲੇਸ਼ਣ", templates_btn: "ਟੈਂਪਲੇਟ ਵੇਖੋ", templates_title: "ATS-ਔਪਟੀਮਾਈਜ਼ਡ ਟੈਂਪਲੇਟ", templates_sub: "ਇੱਕ ਜੇਤੂ ਨੀਂਹ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।", analyzer_title: "AI ਰਿਜ਼ਿਊਮ ਵਿਸ਼ਲੇਸ਼ਕ", analyzer_sub: "ਤੁਰੰਤ ATS ਸਕੋਰ ਪ੍ਰਾਪਤ ਕਰੋ।", upload_text: "ਅੱਪਲੋਡ ਕਰੋ ਜਾਂ ਡ੍ਰੈਗ ਕਰੋ", upload_hint: "ਸਿਰਫ਼ PDF (ਵੱਧ ਤੋਂ ਵੱਧ 5MB)", analyze_now: "ਹੁਣ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ", jd_label: "ਜੌਬ ਵੇਰਵਾ ਪੇਸਟ ਕਰੋ", jd_hint: "(ਵਿਕਲਪਿਕ)", cta_title: "ਬੋਟਸ ਦੁਆਰਾ ਰਿਜੈਕਟ ਹੋਣਾ ਬੰਦ ਕਰੋ।", cta_sub: "ਅਜਿਹਾ ਰਿਜ਼ਿਊਮ ਬਣਾਓ ਜੋ ATS ਫਿਲਟਰ ਪਾਸ ਕਰੇ।", build_btn: "ਆਪਣਾ ਰਿਜ਼ਿਊਮ ਬਣਾਓ", examples_btn: "ਉਦਾਹਰਣ ਵੇਖੋ" }
  }
};

// For languages without explicit page translations, fall back to English
const fallback = pageTranslations.en;
const supportedLangs = ['en','hi','pa','bn','ta','te','mr','gu','kn','ml','ur','or','as','es','fr','de','pt','it','ja','ko','zh','ar','ru','nl','tr','th','vi'];

supportedLangs.forEach(code => {
  if (!pageTranslations[code]) {
    pageTranslations[code] = fallback;
  }
});

export default pageTranslations;
