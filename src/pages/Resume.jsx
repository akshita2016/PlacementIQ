import React, { useState } from 'react';
import Card from '../components/Card';

function Resume() {
  const [activeSection, setActiveSection] = useState('structure');

  const resumeSections = [
    {
      id: 'structure',
      title: 'Resume Structure',
      content: {
        tips: [
          'Keep it to 1-2 pages maximum',
          'Use a clean, professional font (Arial, Calibri)',
          'Maintain consistent formatting throughout',
          'Use bullet points for easy readability',
          'Include contact information at the top'
        ],
        order: [
          'Contact Information',
          'Professional Summary/Objective',
          'Education',
          'Technical Skills',
          'Projects',
          'Work Experience/Internships',
          'Achievements/Certifications',
          'Extra-curricular Activities'
        ]
      }
    },
    {
      id: 'projects',
      title: 'Projects Section',
      content: {
        tips: [
          'Include 3-4 relevant technical projects',
          'Use action verbs (Built, Developed, Implemented)',
          'Mention technologies used',
          'Quantify results where possible',
          'Include GitHub links'
        ],
        examples: [
          'E-commerce Website - Built using React.js and Node.js with MongoDB database, implementing user authentication and payment gateway integration',
          'Task Management App - Developed a full-stack application using MERN stack, featuring real-time updates and responsive design',
          'Data Analysis Project - Analyzed customer behavior using Python and pandas, resulting in 15% improvement in recommendation accuracy'
        ]
      }
    },
    {
      id: 'skills',
      title: 'Skills Section',
      content: {
        categories: [
          {
            name: 'Programming Languages',
            skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL']
          },
          {
            name: 'Web Technologies',
            skills: ['HTML/CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB']
          },
          {
            name: 'Tools & Technologies',
            skills: ['Git', 'Docker', 'AWS', 'Linux', 'Postman']
          },
          {
            name: 'Soft Skills',
            skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Time Management']
          }
        ],
        tips: [
          'Only include skills you can demonstrate',
          'Organize skills into categories',
          'List most relevant skills first',
          'Include both technical and soft skills'
        ]
      }
    },
    {
      id: 'achievements',
      title: 'Achievements',
      content: {
        types: [
          'Academic achievements (CGPA, ranks, scholarships)',
          'Technical certifications and courses',
          'Coding competition ranks',
          'Published papers or articles',
          'Leadership positions'
        ],
        tips: [
          'Use specific numbers and metrics',
          'Include relevant certifications',
          'Mention competition rankings',
          'Highlight leadership roles',
          'Include online course completions'
        ]
      }
    },
    {
      id: 'education',
      title: 'Education',
      content: {
        format: [
          'Degree, Major | University Name | Location | Year',
          'CGPA: X.X/10 (if above 7.0)',
          'Relevant coursework (optional)',
          'Academic projects or thesis'
        ],
        tips: [
          'Include your current CGPA if it\'s competitive',
          'Mention relevant coursework for your target role',
          'Include academic projects if they\'re technical',
          'List education in reverse chronological order'
        ]
      }
    }
  ];

  const resumeTips = [
    {
      title: '🎯 Tailor for Each Application',
      description: 'Customize your resume for each company and role you apply for'
    },
    {
      title: '📊 Use Action Verbs',
      description: 'Start bullet points with strong action verbs like "Developed", "Implemented", "Optimized"'
    },
    {
      title: '🔢 Quantify Results',
      description: 'Include numbers, percentages, and metrics wherever possible'
    },
    {
      title: '✅ Proofread Carefully',
      description: 'Check for spelling, grammar, and formatting errors multiple times'
    }
  ];

  return (
    <div className="resume">
      <div className="container">
        <header className="page-header">
          <h1>Resume Guide</h1>
          <p>Create a winning placement resume that gets you noticed by recruiters</p>
        </header>

        <div className="resume-navigation">
          {resumeSections.map((section) => (
            <button
              key={section.id}
              className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="resume-content">
          {resumeSections.map((section) => (
            activeSection === section.id && (
              <div key={section.id} className="section-content">
                <h2>{section.title}</h2>
                
                {section.content.tips && (
                  <div className="tips-section">
                    <h3>Key Tips:</h3>
                    <ul className="tips-list">
                      {section.content.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.content.order && (
                  <div className="order-section">
                    <h3>Recommended Order:</h3>
                    <ol className="order-list">
                      {section.content.order.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {section.content.examples && (
                  <div className="examples-section">
                    <h3>Examples:</h3>
                    <div className="examples-list">
                      {section.content.examples.map((example, index) => (
                        <div key={index} className="example-item">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.content.categories && (
                  <div className="skills-section">
                    {section.content.categories.map((category, index) => (
                      <div key={index} className="skill-category">
                        <h4>{category.name}:</h4>
                        <div className="skills-tags">
                          {category.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.content.types && (
                  <div className="types-section">
                    <h3>Types to Include:</h3>
                    <ul className="types-list">
                      {section.content.types.map((type, index) => (
                        <li key={index}>{type}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.content.format && (
                  <div className="format-section">
                    <h3>Format:</h3>
                    <ul className="format-list">
                      {section.content.format.map((format, index) => (
                        <li key={index}>{format}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          ))}
        </div>

        <section className="resume-tips">
          <h2>Quick Tips for Success</h2>
          <div className="tips-grid">
            {resumeTips.map((tip, index) => (
              <Card
                key={index}
                title={tip.title}
                description={tip.description}
                className="tip-card"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;