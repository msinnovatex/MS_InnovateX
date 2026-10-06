import React from 'react';
import { ArrowRight, CheckCircle2, Users, Headphones, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';
import heroBg from '../assets/hero-bg.jpg';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="relative w-full py-12 lg:py-20 overflow-hidden bg-no-repeat bg-cover bg-center text-white border-b border-blue-900/40"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay gradient for maximum text legibility and image crispness */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/95 via-[#031126]/80 to-[#031126]/45 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side Content (60% width) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small uppercase label */}
            <div className="flex items-center gap-3">
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
              }`}>
                TECHNOLOGY FOR A BETTER TOMORROW
              </span>
              <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Innovative <br />
              Digital Solutions <br />
              for <span className="text-[#1264FF] dark:text-cyan-400">Your Business</span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed font-normal ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We build websites, mobile apps and custom software solutions to help businesses grow with technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold rounded-full border-2 transition-all transform hover:-translate-y-0.5 ${
                  darkMode 
                    ? 'border-blue-400 text-cyan-300 hover:bg-blue-900/30' 
                    : 'border-[#1264FF] text-[#1264FF] hover:bg-blue-50'
                }`}
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Reliable Solutions */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1264FF] via-blue-600 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Reliable Solutions
                </span>
              </div>

              {/* Expert Team */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Expert Team
                </span>
              </div>

              {/* Pan India Support */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Pan India Support
                </span>
              </div>
            </div>

          </div>

          {/* Right Side Visual Image Container matching reference mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 dark:border-blue-900/50 group">
              
              {/* Main Laptop & Desk Hero Image */}
              <img
                src={heroBg}
                alt="MS InnovateX Laptop Desk Workspace"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Right "Ideas Build Grow" Overlay Badge */}
              <div className="absolute top-4 right-4 pointer-events-none text-right">
                <span className="font-serif italic text-2xl sm:text-3xl text-white font-bold drop-shadow-lg tracking-wide block">
                  Ideas
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl text-cyan-300 font-bold drop-shadow-lg tracking-wide block -mt-1">
                  Build
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl text-blue-300 font-bold drop-shadow-lg tracking-wide block -mt-1">
                  Grow
                </span>
              </div>

              {/* Bottom Screen Overlay Branding Bar */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-white/95 dark:bg-[#061A3A]/95 backdrop-blur-md border border-slate-200 dark:border-blue-900/50 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="MS InnovateX Logo" className="h-8 w-auto object-contain" />
                  <div>
                    <h4 className={`text-xs sm:text-sm font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      MS InnovateX Software Solutions
                    </h4>
                    <p className={`text-[11px] font-bold ${darkMode ? 'text-cyan-400' : 'text-[#1264FF]'}`}>
                      Bhubaneswar, Odisha • India
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
