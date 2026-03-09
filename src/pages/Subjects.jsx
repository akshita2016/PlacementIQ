import React, { useState } from 'react';
import Card from '../components/Card';

function Subjects() {
  const [expandedSubject, setExpandedSubject] = useState(null);

  const subjects = [
    {
      name: 'Operating Systems',
      description: 'Fundamental concepts of OS for technical interviews',
      questions: [
        'What is the difference between process and thread?',
        'Explain different CPU scheduling algorithms',
        'What is deadlock and how to prevent it?',
        'Difference between paging and segmentation',
        'What are semaphores and mutex?',
        'Explain virtual memory and its advantages',
        'What is thrashing in operating systems?',
        'Different types of system calls'
      ]
    },
    {
      name: 'Database Management System (DBMS)',
      description: 'Database concepts and SQL fundamentals',
      questions: [
        'What is normalization and its types?',
        'Difference between SQL and NoSQL databases',
        'Explain ACID properties in database',
        'What are indexes and how do they work?',
        'Different types of joins in SQL',
        'What is a transaction in database?',
        'Explain b-trees and b+ trees',
        'What is database sharding?',
        'Difference between clustered and non-clustered index'
      ]
    },
    {
      name: 'Computer Networks',
      description: 'Network protocols and communication concepts',
      questions: [
        'Explain the OSI model layers',
        'Difference between TCP and UDP',
        'What is DNS and how does it work?',
        'Explain HTTP vs HTTPS',
        'What are different routing algorithms?',
        'How does ARP protocol work?',
        'What is a subnet and subnet mask?',
        'Explain congestion control in networks',
        'What is the three-way handshake?'
      ]
    },
    {
      name: 'Object-Oriented Programming (OOP)',
      description: 'OOP principles and design patterns',
      questions: [
        'What are the four pillars of OOP?',
        'Difference between abstract class and interface',
        'Explain polymorphism with examples',
        'What is method overloading vs overriding?',
        'Explain different access modifiers',
        'What are design patterns? Explain Singleton',
        'What is composition vs inheritance?',
        'Explain constructor and destructor',
        'What is encapsulation and data hiding?'
      ]
    }
  ];

  const handleSubjectToggle = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  return (
    <div className="subjects">
      <div className="container">
        <header className="page-header">
          <h1>Core Subjects</h1>
          <p>Master the fundamental computer science concepts essential for technical interviews</p>
        </header>

        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-section">
              <Card
                title={subject.name}
                description={subject.description}
                buttonText={expandedSubject === subject ? 'Hide Questions' : 'View Questions'}
                onButtonClick={() => handleSubjectToggle(subject)}
                className="subject-card"
              />
              
              {expandedSubject === subject && (
                <div className="questions-container">
                  <h3>Important Interview Questions:</h3>
                  <div className="questions-list">
                    {subject.questions.map((question, qIndex) => (
                      <div key={qIndex} className="question-item">
                        <span className="question-number">Q{qIndex + 1}</span>
                        <span className="question-text">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="study-approach">
          <h2>How to Study Core Subjects</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>📚 Understand Concepts</h3>
              <p>Focus on understanding the 'why' behind each concept rather than just memorizing</p>
            </div>
            <div className="approach-card">
              <h3>🔗 Make Connections</h3>
              <p>Relate concepts across different subjects to build a comprehensive understanding</p>
            </div>
            <div className="approach-card">
              <h3>💡 Practice Explanations</h3>
              <p>Practice explaining concepts in simple terms as if teaching someone else</p>
            </div>
            <div className="approach-card">
              <h3>🎯 Focus on Fundamentals</h3>
              <p>Master the basics before moving to advanced topics and implementations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Subjects;