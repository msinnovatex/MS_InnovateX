import React from 'react';
import { Sparkles, MapPin, Award, Users, ChevronRight } from 'lucide-react';

const AboutHero = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-[420px] lg:min-h-[500px] bg-about-hero bg-cover bg-center flex items-center overflow-hidden py-16">
      {/* Dark gradient overlay for high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/85 to-[#030914]/60 z-0"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl space-y-5">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-cyan-300">
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:underline hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">About Us</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Corporate Overview</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">MS InnovateX</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
            Building practical, innovative, and scalable digital products for enterprises, startups, and institutions across the globe.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200 font-semibold pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#071739]/80 border border-cyan-500/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Bhubaneswar, Odisha</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#071739]/80 border border-cyan-500/30 backdrop-blur-sm">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>100% Quality Commitment</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#071739]/80 border border-cyan-500/30 backdrop-blur-sm">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Expert Tech Engineers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
