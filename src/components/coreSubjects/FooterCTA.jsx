import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Ready to crack top placements?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
          Stop memorizing. Start understanding. Your dream company is just a few concepts away.
        </p>
        
        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors hover:shadow-xl hover:shadow-white/20 flex items-center justify-center gap-2 mx-auto relative z-10">
          Start Preparation <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;
