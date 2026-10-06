import React from 'react';
import AboutHero from '../../components/AboutHero';
import AboutComponent from '../../components/About';
import MissionVision from '../../components/MissionVision';
import AboutFocus from '../../components/AboutFocus';
import Industries from '../../components/Industries';
import CtaBanner from '../../components/CtaBanner';

const About = ({ darkMode }) => {
  return (
    <div className={`min-h-screen font-sans transition-colors ${darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'}`}>
      <AboutHero darkMode={darkMode} />
      <main>
        {/* Section 2: Our Story */}
        <AboutComponent darkMode={darkMode} />

        {/* Section 3: Mission, Vision & Values */}
        <MissionVision darkMode={darkMode} />

        {/* Section 4: Our Focus Areas / What We Do */}
        <AboutFocus darkMode={darkMode} />

        {/* Section 5: Industries We Serve */}
        <Industries darkMode={darkMode} />

        {/* Section 6: Let's Build Together CTA */}
        <CtaBanner darkMode={darkMode} />
      </main>
    </div>
  );
};

export default About;
