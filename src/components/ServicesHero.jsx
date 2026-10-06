import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Wallet, ChevronRight } from 'lucide-react';
import cityBg from '../assets/city-bg.jpg';

const ServicesHero = ({ onNavigate }) => {
  return (
    <section 
      className="relative w-full min-h-[480px] lg:min-h-[540px] bg-cover bg-center flex items-center overflow-hidden py-16 lg:py-20 text-white border-b border-blue-900/50"
      style={{ backgroundImage: `url(${cityBg})` }}
    >
      {/* Subtle Dark Vignette Overlay for High Background Visibility & Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/90 via-[#031126]/70 to-[#031126]/40 z-0 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-cyan-300">
            <Link to="/" className="hover:underline hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">Services</span>
          </div>

          {/* Category Label */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400">
              OUR SERVICES
            </span>
            <span className="h-0.5 w-12 bg-cyan-400 rounded-full"></span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
            Technology Solutions <br />
            for <span className="text-cyan-400">Your Business Growth</span>
          </h1>

          {/* Subdescription */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
            We provide end-to-end digital solutions to help businesses, startups, and institutions build, grow and succeed in the digital world.
          </p>

          {/* Highlight Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm font-bold text-slate-200">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#061A3A]/90 border border-cyan-500/40 backdrop-blur-md shadow-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Reliable & Scalable</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#061A3A]/90 border border-cyan-500/40 backdrop-blur-md shadow-md">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Client-Centric Approach</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#061A3A]/90 border border-cyan-500/40 backdrop-blur-md shadow-md">
              <Wallet className="w-4 h-4 text-cyan-400" />
              <span>Affordable Solutions</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
