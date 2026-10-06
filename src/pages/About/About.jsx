import React from 'react';
import AboutHero from '../../components/AboutHero';
import AboutComponent from '../../components/About';
import MissionVision from '../../components/MissionVision';
import Industries from '../../components/Industries';
import Contact from '../../components/Contact';
import CtaBanner from '../../components/CtaBanner';

const About = ({ darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      <AboutHero darkMode={darkMode} />
      <main>
        <AboutComponent darkMode={darkMode} />
        <MissionVision darkMode={darkMode} />
        <Industries darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <CtaBanner darkMode={darkMode} />
      </main>
    </div>
  );
};

export default About;
