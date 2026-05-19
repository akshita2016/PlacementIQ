import React from 'react';

const PersonalInfoForm = ({ data, onChange }) => {
  const update = (field, value) => onChange({ ...data, [field]: value });

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">Full Name *</label>
          <input type="text" value={data.name || ''} onChange={(e) => update('name', e.target.value)} placeholder="John Doe" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">Job Title *</label>
          <input type="text" value={data.title || ''} onChange={(e) => update('title', e.target.value)} placeholder="Software Engineer" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">Email *</label>
          <input type="email" value={data.email || ''} onChange={(e) => update('email', e.target.value)} placeholder="john@email.com" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">Phone</label>
          <input type="tel" value={data.phone || ''} onChange={(e) => update('phone', e.target.value)} placeholder="+91 98765 43210" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">LinkedIn</label>
          <input type="url" value={data.linkedin || ''} onChange={(e) => update('linkedin', e.target.value)} placeholder="linkedin.com/in/johndoe" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300 block mb-2">GitHub</label>
          <input type="url" value={data.github || ''} onChange={(e) => update('github', e.target.value)} placeholder="github.com/johndoe" className="w-full bg-[#020617] border border-slate-700 focus:border-blue-500 rounded-xl p-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
