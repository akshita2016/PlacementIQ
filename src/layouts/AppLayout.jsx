import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen dark-theme-wrapper">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
