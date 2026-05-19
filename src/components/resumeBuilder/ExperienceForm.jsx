import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceForm = ({ data = [], onChange }) => {
  const addEntry = () => onChange([...data, { company: '', role: '', duration: '', bullets: '' }]);
  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));
  const updateEntry = (idx, field, value) => {
    const updated = [...data];
    updated[idx] = { ...updated[idx], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Experience</h3>
        <button onClick={addEntry} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-medium hover:bg-emerald-600/20 transition-colors">
          <Plus className="w-4 h-4" /> Add Experience
        </button>
      </div>

      {data.map((exp, idx) => (
        <div key={idx} className="p-5 bg-[#020617] border border-slate-800 rounded-2xl space-y-4 relative group">
          <button onClick={() => removeEntry(idx)} className="absolute top-4 right-4 p-1.5 bg-red-500/10 text-red-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20">
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Company *</label>
              <input type="text" value={exp.company} onChange={(e) => updateEntry(idx, 'company', e.target.value)} placeholder="TechCorp Inc." className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Role *</label>
              <input type="text" value={exp.role} onChange={(e) => updateEntry(idx, 'role', e.target.value)} placeholder="Software Engineer Intern" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">Duration</label>
            <input type="text" value={exp.duration} onChange={(e) => updateEntry(idx, 'duration', e.target.value)} placeholder="Jun 2023 - Aug 2023" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">Key Achievements (one per line)</label>
            <textarea value={exp.bullets} onChange={(e) => updateEntry(idx, 'bullets', e.target.value)} placeholder="Optimized API response time by 35%&#10;Implemented CI/CD pipeline reducing deploy time by 50%..." className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none resize-none transition-colors" rows={4} />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-slate-500 text-sm">No experience entries. Click "Add Experience" to begin. Internships count!</div>
      )}
    </div>
  );
};

export default ExperienceForm;
