import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import globeBg from '../assets/globe-bg.jpg';
import dottedFlightImg from '../assets/dotted-flight.png';

const CtaBanner = ({ darkMode }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#031126] via-[#061A3A] to-[#031126] text-white p-8 sm:p-12 lg:p-14 border border-blue-900/50 shadow-2xl">
        
        {/* Background Globe Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${globeBg})` }}
        />

        {/* Paper Plane Graphic on Top Right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 pointer-events-none z-20">
          <img 
            src={dottedFlightImg} 
            alt="Paper plane flight" 
            className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-md" 
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400 block">
              LET'S BUILD TOGETHER
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Have an Idea? <span className="text-cyan-400">Let's Build It.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Discuss your project with us and turn your ideas into a powerful digital solution.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
