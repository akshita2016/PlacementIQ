import React from 'react';
import { theme } from '../../constants/theme';
import BackgroundEffects from './BackgroundEffects';

const PageContainer = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen dark-theme-wrapper overflow-x-hidden ${className}`}>
      <BackgroundEffects />
      {children}
    </div>
  );
};

export default PageContainer;
