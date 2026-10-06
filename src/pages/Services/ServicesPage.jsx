import React from 'react';
import ServicesHero from '../../components/ServicesHero';
import ServicesOffer from '../../components/ServicesOffer';
import Process from '../../components/Process';

const ServicesPage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen font-sans transition-colors ${darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'}`}>
      {/* 1. Services Hero Section */}
      <ServicesHero darkMode={darkMode} />

      <main>
        {/* 2. What We Offer (9 Services Grid) */}
        <ServicesOffer darkMode={darkMode} />

        {/* 3. Our Work Process */}
        <Process darkMode={darkMode} />
      </main>
    </div>
  );
};

export default ServicesPage;
