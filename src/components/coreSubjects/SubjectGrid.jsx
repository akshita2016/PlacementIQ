import React, { useState } from 'react';
import SubjectCard from './SubjectCard';
import { Search, Filter } from 'lucide-react';

const SubjectGrid = ({ subjects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  // Note: we can use the hook logic if we pass it down, but keeping local state here is fine for simple UI filtering
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          subject.concepts.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = filter === "All" || subject.difficulty === filter;
    
    return matchesSearch && matchesDifficulty;
  });

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8" id="subjects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Core Subjects</h2>
          <p className="text-slate-400">Master these to crack top product companies.</p>
        </div>

        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2 bg-slate-900 border border-slate-800 p-1 rounded-xl overflow-x-auto no-scrollbar">
            {difficulties.map(diff => (
              <button
                key={diff}
                onClick={() => setFilter(diff)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === diff 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSubjects.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-slate-800 border-dashed">
          <p className="text-slate-400 text-lg">No subjects found matching your criteria.</p>
          <button 
            onClick={() => { setSearchTerm(""); setFilter("All"); }}
            className="mt-4 text-blue-400 hover:text-blue-300 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};

export default SubjectGrid;
