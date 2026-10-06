import React from 'react';
import { Link } from 'react-router-dom';
import aboutBg from '../assets/about.jpg';

const AboutHero = ({ onNavigate }) => {
  return (
    <section 
      className="relative w-full min-h-[400px] lg:min-h-[460px] bg-cover bg-center flex items-center overflow-hidden py-14 sm:py-20"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Classic Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-0 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl space-y-4 text-left">
          
          {/* Classic Simple Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-serif tracking-wider">
            <Link 
              to="/" 
              onClick={() => onNavigate && onNavigate('home')} 
              className="hover:underline hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-100 font-normal">About Us</span>
          </div>

          {/* Simple Classic Category Label */}
          <div className="pt-1">
            <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] text-slate-300 border-b border-slate-400/40 pb-1">
              About MS InnovateX
            </span>
          </div>

          {/* Classic Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-wide leading-tight pt-1">
            <span className="text-white">MS </span>
            <span className="text-[#2F8FFF]">InnovateX</span>
          </h1>

          {/* Traditional Editorial Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-serif italic leading-relaxed max-w-xl">
            Building practical, innovative, and scalable digital products for enterprises, startups, and institutions across the globe.
          </p>

          {/* Simple Traditional Details Row */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-serif">
            <span>📍 Bhubaneswar, Odisha</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span>🏆 100% Quality Commitment</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span>👥 Expert Tech Engineers</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
