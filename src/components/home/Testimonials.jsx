import React from 'react';
import SectionContainer from '../ui/SectionContainer';
import SectionHeading from '../ui/SectionHeading';
import GlowCard from '../ui/GlowCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Placement IQ helped me crack Infosys in just 2 months. The core subjects dashboard is a game-changer.",
      name: "Rahul S.",
      role: "SDE at Infosys",
      avatar: "R"
    },
    {
      quote: "The ATS Resume Builder highlighted mistakes I didn't even know I was making. Got shortlisted for Amazon the very next week.",
      name: "Priya M.",
      role: "SDE I at Amazon",
      avatar: "P"
    },
    {
      quote: "Structured DSA paths and mock interviews gave me the confidence I lacked. Best platform for placement prep.",
      name: "Amit K.",
      role: "Backend Engineer at TCS",
      avatar: "A"
    }
  ];

  return (
    <SectionContainer>
      <SectionHeading 
        title="Stories of Success" 
        subtitle="Join thousands of students who have secured top-tier positions."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {testimonials.map((test, idx) => (
          <GlowCard key={idx} delay={idx * 0.1}>
            <div className="flex gap-1 mb-6 text-blue-500">
              {[1, 2, 3, 4, 5].map(star => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
              "{test.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                {test.avatar}
              </div>
              <div>
                <h4 className="text-white font-bold">{test.name}</h4>
                <p className="text-slate-500 text-sm">{test.role}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
