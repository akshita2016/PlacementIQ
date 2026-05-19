import React from 'react';
import SectionContainer from '../ui/SectionContainer';

const CompanyLogos = () => {
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
  ];

  return (
    <SectionContainer className="border-y border-slate-800/50 bg-[#0F172A]/30">
      <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
        Trusted by students hired at
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
        {companies.map((company) => (
          <div key={company.name} className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
            {/* For real logos, use SVGs or white-monochrome versions. We'll simulate it with a generic text fallback if image fails, or use an img tag with brightness filter */}
            <img 
              src={company.logo} 
              alt={company.name} 
              className="h-8 md:h-10 object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CompanyLogos;
