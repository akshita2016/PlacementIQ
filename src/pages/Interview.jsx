import React, { useState } from 'react';
import Card from '../components/Card';

function Interview() {
  const [activeCategory, setActiveCategory] = useState('hr');

  const interviewQuestions = {
    hr: {
      title: 'HR Interview Questions',
      description: 'Common HR questions to help you prepare for the behavioral round',
      questions: [
        {
          question: 'Tell me about yourself',
          tip: 'Keep it professional, focus on your education, skills, and career goals. 2-3 minutes max.'
        },
        {
          question: 'Why do you want to work here?',
          tip: 'Research the company beforehand. Mention specific reasons about their culture, products, or values.'
        },
        {
          question: 'What are your strengths and weaknesses?',
          tip: 'For strengths, mention relevant skills. For weaknesses, show how you\'re working to improve.'
        },
        {
          question: 'Where do you see yourself in 5 years?',
          tip: 'Show ambition but be realistic. Mention growth within the company and skill development.'
        },
        {
          question: 'Why should we hire you?',
          tip: 'Highlight your unique combination of skills, experience, and enthusiasm for the role.'
        },
        {
          question: 'Describe a challenging situation you faced',
          tip: 'Use the STAR method: Situation, Task, Action, Result. Show problem-solving skills.'
        },
        {
          question: 'What motivates you?',
          tip: 'Mention things like learning, solving problems, making an impact, working with teams.'
        },
        {
          question: 'Do you have any questions for us?',
          tip: 'Always have questions ready about the role, team, company culture, or growth opportunities.'
        }
      ]
    },
    technical: {
      title: 'Technical Interview Questions',
      description: 'Technical questions to test your programming and problem-solving skills',
      questions: [
        {
          question: 'Explain your favorite programming language and why',
          tip: 'Discuss specific features, use cases, and your experience with the language.'
        },
        {
          question: 'How do you approach debugging a program?',
          tip: 'Mention systematic approaches like logging, breakpoints, and reproducing the issue.'
        },
        {
          question: 'What is the difference between SQL and NoSQL databases?',
          tip: 'Explain structure, scalability, consistency, and use cases for each type.'
        },
        {
          question: 'Explain object-oriented programming concepts',
          tip: 'Cover encapsulation, inheritance, polymorphism, and abstraction with examples.'
        },
        {
          question: 'How would you optimize a slow-running query?',
          tip: 'Mention indexing, query optimization, database design, and performance monitoring.'
        },
        {
          question: 'Describe your experience with version control',
          tip: 'Explain Git basics, branching strategies, and collaborative development workflows.'
        },
        {
          question: 'What is your approach to learning new technologies?',
          tip: 'Mention documentation, practice projects, online courses, and community resources.'
        },
        {
          question: 'Explain a complex project you\'ve worked on',
          tip: 'Use STAR method, focus on technical challenges, your contributions, and outcomes.'
        }
      ]
    },
    coding: {
      title: 'Coding Interview Tips',
      description: 'Strategies for acing coding interviews and technical assessments',
      questions: [
        {
          question: 'Always clarify the problem first',
          tip: 'Ask questions about input format, constraints, edge cases, and expected output.'
        },
        {
          question: 'Think out loud during problem solving',
          tip: 'Explain your thought process, approach, and reasoning to the interviewer.'
        },
        {
          question: 'Start with a brute force solution',
          tip: 'Get a working solution first, then optimize. Show you can solve the problem.'
        },
        {
          question: 'Consider time and space complexity',
          tip: 'Analyze and discuss the Big O complexity of your solution.'
        },
        {
          question: 'Test your code with examples',
          tip: 'Walk through your code with the given examples and edge cases.'
        },
        {
          question: 'Handle edge cases explicitly',
          tip: 'Consider null inputs, empty arrays, single elements, and boundary conditions.'
        },
        {
          question: 'Write clean, readable code',
          tip: 'Use meaningful variable names, proper indentation, and clear logic flow.'
        },
        {
          question: 'Optimize iteratively',
          tip: 'Start with working code, then improve time/space complexity step by step.'
        }
      ]
    }
  };

  const interviewTips = [
    {
      title: '📝 Practice Mock Interviews',
      description: 'Practice with friends or online platforms to build confidence'
    },
    {
      title: '🔍 Research the Company',
      description: 'Know their products, culture, recent news, and values'
    },
    {
      title: '💻 Prepare Your Environment',
      description: 'Test your tech setup for virtual interviews beforehand'
    },
    {
      title: '❓ Ask Thoughtful Questions',
      description: 'Prepare questions that show your interest and research'
    }
  ];

  return (
    <div className="interview">
      <div className="container">
        <header className="page-header">
          <h1>Interview Questions</h1>
          <p>Comprehensive guide to ace your placement interviews with confidence</p>
        </header>

        <div className="interview-categories">
          {Object.keys(interviewQuestions).map((category) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {interviewQuestions[category].title}
            </button>
          ))}
        </div>

        <div className="interview-content">
          <div className="category-header">
            <h2>{interviewQuestions[activeCategory].title}</h2>
            <p>{interviewQuestions[activeCategory].description}</p>
          </div>

          <div className="questions-container">
            {interviewQuestions[activeCategory].questions.map((item, index) => (
              <div key={index} className="question-card">
                <div className="question-header">
                  <h3>Q{index + 1}: {item.question}</h3>
                </div>
                <div className="question-tip">
                  <strong>💡 Tip:</strong> {item.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="interview-preparation">
          <h2>Interview Preparation Strategy</h2>
          
          <div className="preparation-timeline">
            <div className="timeline-item">
              <h3>1 Week Before</h3>
              <ul>
                <li>Review your resume thoroughly</li>
                <li>Research the company and role</li>
                <li>Practice common interview questions</li>
                <li>Prepare questions to ask interviewer</li>
              </ul>
            </div>
            
            <div className="timeline-item">
              <h3>1 Day Before</h3>
              <ul>
                <li>Review key projects and achievements</li>
                <li>Test your tech setup for virtual interviews</li>
                <li>Prepare your outfit and documents</li>
                <li>Get a good night's sleep</li>
              </ul>
            </div>
            
            <div className="timeline-item">
              <h3>Interview Day</h3>
              <ul>
                <li>Arrive/login 10-15 minutes early</li>
                <li>Bring multiple copies of your resume</li>
                <li>Stay calm and confident</li>
                <li>Take notes during the interview</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="interview-tips-section">
          <h2>Essential Interview Tips</h2>
          <div className="tips-grid">
            {interviewTips.map((tip, index) => (
              <Card
                key={index}
                title={tip.title}
                description={tip.description}
                className="interview-tip-card"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Interview;