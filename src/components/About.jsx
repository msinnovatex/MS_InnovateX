import React, { useState } from 'react';
import { Play, MapPin, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import officeImg from '../assets/office.jpg';
import VideoModal from './VideoModal';

const About = ({ darkMode }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="about" className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#061A3A]/80 text-white' : 'bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FBFF] to-[#EAF5FF]/60 text-[#102044]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (55% width) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small uppercase label */}
            <div className="flex items-center gap-3">
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
              }`}>
                OUR STORY
              </span>
              <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Turning Ideas Into <br />
              <span className="text-[#1769FF] dark:text-[#65C7FF]">
                Real-World Solutions
              </span>
            </h2>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-[#536A8A]'
            }`}>
              MS InnovateX is a technology company focused on delivering practical, innovative and scalable digital solutions for businesses, organizations and growing enterprises. We combine creativity, technology and strategy to help our clients solve real problems and achieve long-term success.
            </p>

            {/* Feature Pills 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className={`text-xs sm:text-sm font-extrabold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Bhubaneswar, Odisha, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Globe2 className="w-4 h-4" />
                </div>
                <span className={`text-xs sm:text-sm font-extrabold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Pan India Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className={`text-xs sm:text-sm font-extrabold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Transparent & Secure
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className={`text-xs sm:text-sm font-extrabold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  100% Quality Commitment
                </span>
              </div>
            </div>

            {/* Watch Our Story Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Watch Our Story</span>
                <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Office Image with Overlay Play Button */}
          <div className="lg:col-span-5 relative">
            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-blue-900/50 shadow-2xl group cursor-pointer"
            >
              {/* Office Image */}
              <img
                src={officeImg}
                alt="MS InnovateX Corporate Office"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Tint */}
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

              {/* Centered Large Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-20 h-20 rounded-full bg-white/95 dark:bg-[#1264FF]/95 backdrop-blur-md shadow-2xl flex items-center justify-center border-4 border-white/80 dark:border-blue-300/40 transform transition-all group-hover:scale-110 group-hover:shadow-blue-500/50"
                  title="Play Corporate Video"
                >
                  <Play className="w-9 h-9 text-[#1264FF] dark:text-white fill-[#1264FF] dark:fill-white translate-x-1" />
                </button>
              </div>

              {/* Bottom Left "Play Video - See how we work" Badge */}
              <div className="absolute bottom-4 left-4 p-2.5 px-4 rounded-full bg-[#031126]/90 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white text-[#1264FF] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-[#1264FF] translate-x-0.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Play Video</h4>
                  <p className="text-[10px] text-slate-300">See how we work</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Popup Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

export default About;
