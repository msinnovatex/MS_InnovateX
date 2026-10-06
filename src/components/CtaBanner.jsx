import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import globeBg from '../assets/globe-bg.jpg';

const CtaBanner = ({ darkMode }) => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#061A3A] via-[#031126] to-[#0A2540] text-white p-6 sm:p-8 lg:p-10 border border-blue-900/50 shadow-xl">
        
        {/* Background Globe Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${globeBg})` }}
        />

        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="max-w-xl space-y-2.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-extrabold text-[11px] sm:text-xs uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>START YOUR JOURNEY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight leading-snug">
              Have an Idea? <span className="text-cyan-300">Let's Build It.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              Discuss your project with us and turn your ideas into a powerful digital solution.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-cyan-200 hover:text-white bg-blue-950/80 hover:bg-blue-900/80 border border-cyan-400/30 rounded-full backdrop-blur-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
