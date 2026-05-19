import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const SkillsForm = ({ data = [], onChange }) => {
  const [input, setInput] = useState('');

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !data.includes(trimmed)) {
      onChange([...data, trimmed]);
      setInput('');
    }
  };

  const removeSkill = (skill) => onChange(data.filter(s => s !== skill));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addSkill(); }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white mb-2">Technical Skills</h3>
      <p className="text-slate-400 text-sm mb-6">Add your key technical skills. Press Enter or click Add after each one.</p>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. React.js, Node.js, MongoDB..."
          className="flex-1 bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors"
        />
        <button onClick={addSkill} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-1">
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {data.map((skill, idx) => (
          <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium group">
            {skill}
            <button onClick={() => removeSkill(skill)} className="p-0.5 hover:bg-red-500/20 rounded-full transition-colors">
              <X className="w-3 h-3 text-slate-400 group-hover:text-red-400" />
            </button>
          </span>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-6 text-slate-500 text-sm">No skills added yet.</div>
      )}
    </div>
  );
};

export default SkillsForm;
