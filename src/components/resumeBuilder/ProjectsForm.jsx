import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm = ({ data = [], onChange }) => {
  const addEntry = () => onChange([...data, { name: '', tech: '', description: '', link: '' }]);
  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));
  const updateEntry = (idx, field, value) => {
    const updated = [...data];
    updated[idx] = { ...updated[idx], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Projects</h3>
        <button onClick={addEntry} className="flex items-center gap-1 px-3 py-1.5 bg-purple-600/10 text-purple-400 border border-purple-500/20 rounded-lg text-sm font-medium hover:bg-purple-600/20 transition-colors">
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {data.map((proj, idx) => (
        <div key={idx} className="p-5 bg-[#020617] border border-slate-800 rounded-2xl space-y-4 relative group">
          <button onClick={() => removeEntry(idx)} className="absolute top-4 right-4 p-1.5 bg-red-500/10 text-red-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20">
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Project Name *</label>
              <input type="text" value={proj.name} onChange={(e) => updateEntry(idx, 'name', e.target.value)} placeholder="E-Commerce Platform" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Technologies</label>
              <input type="text" value={proj.tech} onChange={(e) => updateEntry(idx, 'tech', e.target.value)} placeholder="React, Node.js, MongoDB" className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">Description (use metrics!)</label>
            <textarea value={proj.description} onChange={(e) => updateEntry(idx, 'description', e.target.value)} placeholder="Built a full-stack e-commerce platform serving 500+ DAU, reducing load times by 40%..." className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none resize-none transition-colors" rows={3} />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 block mb-2">GitHub / Live Link</label>
            <input type="url" value={proj.link} onChange={(e) => updateEntry(idx, 'link', e.target.value)} placeholder="https://github.com/..." className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-slate-500 text-sm">No projects yet. Click "Add Project" to begin.</div>
      )}
    </div>
  );
};

export default ProjectsForm;
