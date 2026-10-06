import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Internship from '../components/Internship';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import CtaBanner from '../components/CtaBanner';

const HomePage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      <main>
        <Hero darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Internship darkMode={darkMode} />
        <Industries darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <CtaBanner darkMode={darkMode} />
      </main>
    </div>
  );
};

export default HomePage;
