import React from 'react';
import { Target, Rocket, Laptop, TrendingUp, GraduationCap } from 'lucide-react';

const MissionVision = ({ darkMode }) => {
  return (
    <section id="mission-vision" className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-slate-50/70 text-slate-900'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
            }`}>
              MISSION & VISION
            </span>
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
            darkMode ? 'text-white' : 'text-[#061A3A]'
          }`}>
            Driving Digital Innovation. <br />
            <span className="text-[#1264FF] dark:text-cyan-400">Building Future Opportunities.</span>
          </h2>
        </div>

        {/* Two Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 sm:mb-12">
          
          {/* Card 1: Our Mission */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-xl flex flex-col justify-between ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/50 text-white shadow-black/20' 
              : 'bg-white border-slate-200/80 text-slate-900 shadow-slate-200/50'
          }`}>
            <div>
              {/* Header Row: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1264FF] to-cyan-400 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Target className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold text-[#1264FF] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40">
                  Our Purpose
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-black mb-4 ${
                darkMode ? 'text-white' : 'text-[#061A3A]'
              }`}>
                Our Mission
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed font-normal mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                To deliver practical, innovative and reliable digital solutions that help businesses grow, while providing students with practical technology learning and helping organizations build stronger digital connections with their customers.
              </p>
            </div>

            {/* Bottom Highlight */}
            <div className="pt-4 border-t border-slate-100 dark:border-blue-900/40">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1264FF] dark:text-cyan-400">
                Solutions • Growth • Learning
              </span>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-xl flex flex-col justify-between ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/50 text-white shadow-black/20' 
              : 'bg-white border-slate-200/80 text-slate-900 shadow-slate-200/50'
          }`}>
            <div>
              {/* Header Row: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-400 text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
                  <Rocket className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/40">
                  Future Outlook
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-black mb-4 ${
                darkMode ? 'text-white' : 'text-[#061A3A]'
              }`}>
                Our Vision
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed font-normal mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                To become a trusted technology partner across India by combining digital innovation, effective customer communication, and practical technology training to create long-term value for businesses and future professionals.
              </p>
            </div>

            {/* Bottom Highlight */}
            <div className="pt-4 border-t border-slate-100 dark:border-blue-900/40">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Innovation • Connection • Opportunity
              </span>
            </div>
          </div>

        </div>

        {/* Three Feature Blocks Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Block 01 */}
          <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md flex items-center gap-4 ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/50 text-white' 
              : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
          }`}>
            <div className="w-11 h-11 rounded-xl bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
              <Laptop className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1264FF] dark:text-cyan-400 block">
                01 — DIGITAL SOLUTIONS
              </span>
              <h4 className={`text-xs sm:text-sm font-extrabold mt-0.5 ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}>
                Websites, mobile apps & custom software
              </h4>
            </div>
          </div>

          {/* Block 02 */}
          <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md flex items-center gap-4 ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/50 text-white' 
              : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
          }`}>
            <div className="w-11 h-11 rounded-xl bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
              <TrendingUp className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1264FF] dark:text-cyan-400 block">
                02 — BUSINESS GROWTH
              </span>
              <h4 className={`text-xs sm:text-sm font-extrabold mt-0.5 ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}>
                Email marketing & customer engagement
              </h4>
            </div>
          </div>

          {/* Block 03 */}
          <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md flex items-center gap-4 ${
            darkMode 
              ? 'bg-[#061A3A] border-blue-900/50 text-white' 
              : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
          }`}>
            <div className="w-11 h-11 rounded-xl bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#1264FF] dark:text-cyan-400 block">
                03 — FUTURE TALENT
              </span>
              <h4 className={`text-xs sm:text-sm font-extrabold mt-0.5 ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}>
                Practical internships & technology training
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
