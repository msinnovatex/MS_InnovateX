import React from 'react';
import AboutHero from '../components/AboutHero';
import About from '../components/About';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import CtaBanner from '../components/CtaBanner';

const AboutPage = ({ onNavigate, darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      <AboutHero onNavigate={onNavigate} darkMode={darkMode} />
      <main>
        <About darkMode={darkMode} />
        <Industries darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <CtaBanner darkMode={darkMode} />
      </main>
    </div>
  );
};

export default AboutPage;
