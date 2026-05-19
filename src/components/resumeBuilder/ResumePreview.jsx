import React from 'react';

const ResumePreview = ({ data }) => {
  const { personal, education, skills, projects, experience } = data;

  return (
    <div id="resume-preview" className="bg-white text-gray-900 p-8 rounded-xl shadow-xl max-w-[210mm] mx-auto font-['Georgia',serif] text-[11px] leading-[1.5]" style={{ minHeight: '297mm' }}>
      
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide uppercase">{personal.name || 'Your Name'}</h1>
        <p className="text-sm text-gray-600 mt-1">{personal.title || 'Job Title'}</p>
        <div className="flex items-center justify-center gap-3 mt-2 text-[10px] text-gray-500 flex-wrap">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {personal.linkedin && <span>| {personal.linkedin}</span>}
          {personal.github && <span>| {personal.github}</span>}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">{edu.institution || 'Institution'}</span>
                <span className="text-gray-500">{edu.year}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{edu.degree}</span>
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Technical Skills</h2>
          <p className="text-gray-700">{skills.join(', ')}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">{exp.role || 'Role'}, {exp.company || 'Company'}</span>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              {exp.bullets && (
                <ul className="list-disc ml-4 mt-1 text-gray-700 space-y-0.5">
                  {exp.bullets.split('\n').filter(b => b.trim()).map((bullet, i) => (
                    <li key={i}>{bullet.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Projects</h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800">{proj.name || 'Project Name'} {proj.tech && <span className="font-normal text-gray-500">({proj.tech})</span>}</span>
                {proj.link && <a href={proj.link} className="text-blue-600 text-[10px]">Link</a>}
              </div>
              {proj.description && (
                <ul className="list-disc ml-4 mt-1 text-gray-700 space-y-0.5">
                  {proj.description.split('\n').filter(b => b.trim()).map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
