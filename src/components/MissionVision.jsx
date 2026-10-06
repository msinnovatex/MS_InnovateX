import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';

const MissionVision = ({ darkMode }) => {
  return (
    <section id="mission-vision" className={`py-12 lg:py-16 transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-1.5">
            <span className={`h-0.5 w-6 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
            <span className={`text-xs font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              MISSION, VISION & VALUES
            </span>
            <span className={`h-0.5 w-6 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-[#102044]'
          }`}>
            Our Mission, Vision & Values
          </h2>
          <p className={`text-xs sm:text-sm font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
            The principles that drive everything we do at MS InnovateX.
          </p>
        </div>

        {/* Three Corporate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Our Mission */}
          <div className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl shadow-black/30' 
              : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF] flex items-center justify-center mb-5 shadow-sm">
                <Target className="w-6 h-6" />
              </div>

              <h3 className={`text-xl font-black mb-3 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                Our Mission
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                To deliver practical, innovative and reliable digital solutions that help businesses grow, while providing learning opportunities for students and supporting communities.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl shadow-black/30' 
              : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF] flex items-center justify-center mb-5 shadow-sm">
                <Eye className="w-6 h-6" />
              </div>

              <h3 className={`text-xl font-black mb-3 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                Our Vision
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                To be a trusted technology partner across India and globally by delivering high-quality solutions, creating opportunities for learners, and building long-term relationships.
              </p>
            </div>
          </div>

          {/* Card 3: Our Values */}
          <div className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl shadow-black/30' 
              : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5'
          }`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF] flex items-center justify-center mb-5 shadow-sm">
                <Gem className="w-6 h-6" />
              </div>

              <h3 className={`text-xl font-black mb-3 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                Our Values
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                Innovation, Integrity, Transparency, Quality and Client Success in everything we do.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
