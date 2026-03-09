import React, { useState } from 'react';
import Card from '../components/Card';

function DSA() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const dsaTopics = [
    {
      name: 'Arrays',
      problems: [
        'Two Sum',
        'Maximum Subarray',
        'Merge Intervals',
        'Best Time to Buy and Sell Stock',
        'Product of Array Except Self'
      ]
    },
    {
      name: 'Strings',
      problems: [
        'Valid Anagram',
        'Longest Substring Without Repeating Characters',
        'Valid Parentheses',
        'Palindromic Substrings',
        'Group Anagrams'
      ]
    },
    {
      name: 'Linked List',
      problems: [
        'Reverse Linked List',
        'Detect Cycle in Linked List',
        'Merge Two Sorted Lists',
        'Remove Nth Node From End',
        'Intersection of Two Linked Lists'
      ]
    },
    {
      name: 'Stack',
      problems: [
        'Valid Parentheses',
        'Min Stack',
        'Evaluate Reverse Polish Notation',
        'Daily Temperatures',
        'Largest Rectangle in Histogram'
      ]
    },
    {
      name: 'Queue',
      problems: [
        'Implement Queue using Stacks',
        'Sliding Window Maximum',
        'Design Circular Queue',
        'Moving Average from Data Stream',
        'First Unique Character in String'
      ]
    },
    {
      name: 'Trees',
      problems: [
        'Binary Tree Inorder Traversal',
        'Maximum Depth of Binary Tree',
        'Validate Binary Search Tree',
        'Lowest Common Ancestor',
        'Binary Tree Level Order Traversal'
      ]
    },
    {
      name: 'Graphs',
      problems: [
        'Number of Islands',
        'Course Schedule',
        'Clone Graph',
        'Pacific Atlantic Water Flow',
        'Word Ladder'
      ]
    }
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  return (
    <div className="dsa">
      <div className="container">
        <header className="page-header">
          <h1>DSA Practice Sheet</h1>
          <p>Master Data Structures and Algorithms with our curated problem sets</p>
        </header>

        <div className="dsa-content">
          <div className="topics-grid">
            {dsaTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <Card
                  title={topic.name}
                  description={`${topic.problems.length} essential problems`}
                  buttonText={selectedTopic === topic ? 'Hide Problems' : 'View Problems'}
                  onButtonClick={() => handleTopicClick(topic)}
                  className="dsa-topic-card"
                />
                {selectedTopic === topic && (
                  <div className="problems-list">
                    <h4>Practice Problems:</h4>
                    <ul>
                      {topic.problems.map((problem, problemIndex) => (
                        <li key={problemIndex} className="problem-item">
                          <span className="problem-number">{problemIndex + 1}.</span>
                          <span className="problem-name">{problem}</span>
                          <span className="difficulty easy">Easy</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="dsa-tips">
          <h2>Study Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>🎯 Start with Basics</h3>
              <p>Begin with Arrays and Strings before moving to complex data structures</p>
            </div>
            <div className="tip-card">
              <h3>📝 Practice Daily</h3>
              <p>Solve at least 2-3 problems daily to build consistency</p>
            </div>
            <div className="tip-card">
              <h3>🔄 Review Solutions</h3>
              <p>Always review multiple approaches and optimize your solutions</p>
            </div>
            <div className="tip-card">
              <h3>⏰ Time Yourself</h3>
              <p>Practice solving problems within interview time constraints</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DSA;