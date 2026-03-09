import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Algorithmic Excellence',
      description: 'Master critical data structures and algorithms with our expertly curated problem sets and step-by-step solutions.',
      items: ['450+ Practice Problems', 'Topic-wise Organization', 'Difficulty Progression', 'Solution Explanations'],
      icon: '🧠'
    },
    {
      title: 'Technical Fundamentals',
      description: 'Build a solid foundation in computer science concepts that top companies test in interviews.',
      items: ['System Design Principles', 'CS Core Subjects', 'Interview Questions Bank', 'Concept Deep-dives'],
      icon: '💻'
    },
    {
      title: 'Career Readiness',
      description: 'Transform your profile with industry-standard resume templates and interview strategies.',
      items: ['ATS-Friendly Templates', 'Behavioral Questions', 'Salary Negotiation', 'Industry Insights'],
      icon: '🚀'
    }
  ];

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Software Engineer at Google',
      content: 'Placement Helper was instrumental in my success. The structured approach and quality problems made all the difference.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'SDE II at Microsoft', 
      content: 'The resume guide and interview preparation materials helped me secure multiple offers from top tier companies.',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      role: 'Senior Developer at Amazon',
      content: 'Best resource for placement preparation. The systematic curriculum and practice problems are top-notch.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🏆 Trusted by 10,000+ Students</span>
            </div>
            <h1 className="hero-title">
              Land Your <span className="highlight">Dream Job</span> with 
              <br />India's Premier Placement Platform
            </h1>
            <p className="hero-description">
              Join thousands of successful B.Tech graduates who secured top-tier positions at 
              leading tech companies through our proven, systematic approach to placement preparation.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">94%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">₹12L+</div>
                <div className="stat-label">Avg Package</div>
              </div>
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Partner Companies</div>
              </div>
            </div>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/dsa')}
              >
                🚀 Start Free Practice
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/subjects')}
              >
                📚 Explore Curriculum
              </button>
            </div>
            <p className="hero-note">✨ No credit card required • Start learning in 30 seconds</p>
          </div>
        </div>
      </section>

      <section className="companies">
        <div className="container">
          <p className="companies-label">Our students work at leading companies</p>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-logo">{company}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need to Succeed</h2>
            <p className="section-subtitle">
              Our comprehensive platform covers every aspect of placement preparation, 
              from technical skills to interview confidence.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-modern">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-list">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="feature-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Hear from our students who landed their dream jobs at top tech companies
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Career?</h2>
            <p className="cta-description">
              Join thousands of successful students and start your journey to landing your dream job today.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => navigate('/dsa')}
              >
                Get Started Free
              </button>
              <button 
                className="btn btn-outline btn-large"
                onClick={() => navigate('/resume')}
              >
                Download Resume Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;