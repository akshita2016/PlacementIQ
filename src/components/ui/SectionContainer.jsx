import React from 'react';
import { theme } from '../../constants/theme';

const SectionContainer = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`${theme.layout.sectionPadding} ${className}`}>
      <div className={theme.layout.maxWidth}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
