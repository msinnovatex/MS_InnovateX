import React from 'react';
import AboutHero from '../components/AboutHero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import AboutFocus from '../components/AboutFocus';
import Industries from '../components/Industries';
import CtaBanner from '../components/CtaBanner';

const AboutPage = ({ onNavigate, darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      <AboutHero onNavigate={onNavigate} darkMode={darkMode} />
      <main>
        <About darkMode={darkMode} />
        <MissionVision darkMode={darkMode} />
        <AboutFocus darkMode={darkMode} />
        <Industries darkMode={darkMode} />
        <CtaBanner darkMode={darkMode} />
      </main>
    </div>
  );
};

export default AboutPage;
