import React from 'react';
import Contact from '../../components/Contact';

const ContactPage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
      <section className="py-12 bg-[#061A3A] text-white text-center border-b border-blue-900/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-2">Get in Touch</h1>
          <p className="text-sm text-slate-300">We would love to hear from you. Send us a message or request a quote.</p>
        </div>
      </section>

      <main>
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
};

export default ContactPage;
