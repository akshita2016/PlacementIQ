import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data = [], onChange }) => {
  const addEntry = () => onChange([...data, { institution: '', degree: '', year: '', gpa: '' }]);
  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));
  const updateEntry = (idx, field, value) => {
    const updated = [...data];
    updated[idx] = { ...updated[idx], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Education</h3>
        <button onClick={addEntry} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-medium hover:bg-blue-600/20 transition-colors">
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {data.map((edu, idx) => (
        <div key={idx} className="p-5 bg-[#020617] border border-slate-800 rounded-2xl space-y-4 relative group">
          <button onClick={() => removeEntry(idx)} className="absolute top-4 right-4 p-1.5 bg-red-500/10 text-red-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20">
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Institution *</label>
              <input type="text" value={edu.institution} onChange={(e) => updateEntry(idx, 'institution', e.target.value)} placeholder="University of..." className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Degree *</label>
              <input type="text" value={edu.degree} onChange={(e) => updateEntry(idx, 'degree', e.target.value)} placeholder="B.Tech in CSE" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Year</label>
              <input type="text" value={edu.year} onChange={(e) => updateEntry(idx, 'year', e.target.value)} placeholder="2020 - 2024" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">GPA</label>
              <input type="text" value={edu.gpa} onChange={(e) => updateEntry(idx, 'gpa', e.target.value)} placeholder="8.5/10" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-slate-500 text-sm">
          No education entries yet. Click "Add" to begin.
        </div>
      )}
    </div>
  );
};

export default EducationForm;
