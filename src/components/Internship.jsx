import React from 'react';
import { ArrowRight, Laptop, GraduationCap, Award, Briefcase } from 'lucide-react';
import internshipImg from '../assets/internship-bg.jpg';
import waveBg from '../assets/wave-bg.jpg';

const Internship = ({ darkMode }) => {
  return (
    <section id="internship" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-[#061A3A] text-white p-8 sm:p-12 lg:p-16 border border-blue-900/50 shadow-2xl">
        
        {/* Background Wave Image Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${waveBg})` }}
        />

        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Right "Learn Build Grow" Overlay Graphic */}
        <div className="absolute top-6 right-8 pointer-events-none hidden md:block text-right">
          <span className="font-serif italic text-2xl lg:text-3xl text-white font-bold drop-shadow-md tracking-wide block">
            Learn
          </span>
          <span className="font-serif italic text-2xl lg:text-3xl text-cyan-300 font-bold drop-shadow-md tracking-wide block -mt-1">
            Build
          </span>
          <span className="font-serif italic text-2xl lg:text-3xl text-blue-300 font-bold drop-shadow-md tracking-wide block -mt-1">
            Grow
          </span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
          
          {/* Left Content Area (60% width) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-extrabold text-xs uppercase tracking-widest backdrop-blur-md">
              <span>INTERNSHIP PROGRAM</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Kickstart Your Career <br />
              with <span className="text-cyan-300">Industry Experience</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
              Learn from experts, work on real projects and build practical skills for a successful career.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-slate-200 py-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/80 border border-blue-800/50 backdrop-blur-sm">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Live Projects</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/80 border border-blue-800/50 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Expert Guidance</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/80 border border-blue-800/50 backdrop-blur-sm">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Certificate</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/80 border border-blue-800/50 backdrop-blur-sm">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Career Support</span>
              </div>
            </div>

            {/* Explore Internship Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold text-slate-900 bg-white hover:bg-cyan-50 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Internship</span>
                <ArrowRight className="w-5 h-5 text-[#1264FF]" />
              </a>
            </div>

          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src={internshipImg}
                alt="MS InnovateX Internship Program Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;
