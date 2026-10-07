import React from 'react';
import Contact from '../../components/Contact';
import ContactFAQ from '../../components/ContactFAQ';
import techSupportTeamImg from '../../assets/tech-support-team.jpg';

const ContactPage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      
      {/* HERO SECTION WITH INCREASED SIZE & CLEAN UNCOLORED BACKGROUND IMAGE */}
      <section 
        className="relative py-24 sm:py-32 lg:py-40 bg-cover bg-left-top bg-no-repeat text-white text-center overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
        style={{ backgroundImage: `url(${techSupportTeamImg})` }}
      >
        {/* Transparent neutral overlay for readability without blue tinting */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight drop-shadow-md">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-100 max-w-2xl mx-auto font-normal drop-shadow-sm leading-relaxed">
            We would love to hear from you. Send us a message or request a quote for your digital project.
          </p>
        </div>
      </section>

      <main>
        <Contact darkMode={darkMode} />
        <ContactFAQ darkMode={darkMode} />
      </main>
    </div>
  );
};

export default ContactPage;
