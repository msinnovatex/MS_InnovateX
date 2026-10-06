import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ServicesFaq = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const leftFaqs = [
    {
      q: 'What types of projects do you work on?',
      a: 'We work on websites, mobile apps, custom software, cloud solutions, AI automation and practical training for businesses, startups and institutions.'
    },
    {
      q: 'How much does a project cost?',
      a: 'Project cost depends on scope, feature complexity, and technology stack. Send us your requirements for a free, transparent quote.'
    },
    {
      q: 'How long does it take to complete a project?',
      a: 'Typical web projects take 2 to 4 weeks, while complex mobile apps and enterprise custom software take 6 to 12 weeks.'
    }
  ];

  const rightFaqs = [
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes, we offer 24/7 server monitoring, regular security updates, performance optimization, and bug-fixing support.'
    },
    {
      q: 'Can you work on existing projects?',
      a: 'Yes, our engineering team can audit, refactor, upgrade, and take over maintenance for existing web and mobile codebases.'
    },
    {
      q: 'Do you offer custom solutions?',
      a: 'Yes, all our software solutions are custom built to automate your unique workflows and achieve long-term growth.'
    },
    {
      q: 'How can I get started?',
      a: 'Simply click "Get a Quote" or contact us via phone/email to discuss your project requirements with our technical team.'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-slate-50/70 text-slate-900'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
            }`}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2">
            Have Questions?
          </h2>
          <p className={`text-sm sm:text-base font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Find answers to common questions about our services.
          </p>
        </div>

        {/* 2-Column Grid Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, idx) => {
              const i = idx;
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#1264FF] dark:text-cyan-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal border-t border-slate-100 dark:border-blue-900/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, idx) => {
              const i = idx + 10;
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#1264FF] dark:text-cyan-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal border-t border-slate-100 dark:border-blue-900/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesFaq;
