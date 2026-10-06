import React from 'react';
import { Target, Award, Clock, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

const WhyChooseUs = ({ darkMode }) => {
  const reasons = [
    {
      num: '01',
      tag: 'Tailored',
      emoji: '🎯',
      icon: Target,
      title: 'Client-Centric Approach',
      desc: 'We focus on your specific goals and build tailored digital solutions designed around your business needs.',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-400',
      badgeBg: 'bg-blue-600/10 text-blue-600 dark:text-cyan-400'
    },
    {
      num: '02',
      tag: 'Excellence',
      emoji: '🏆',
      icon: Award,
      title: 'Quality & Innovation',
      desc: 'We follow best industry practices, clean code standards, and modern technologies for maximum performance.',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-500',
      badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
    },
    {
      num: '03',
      tag: 'Reliable',
      emoji: '⏱️',
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'We ensure timely milestone delivery with a structured agile process and transparent timeline updates.',
      gradient: 'from-indigo-600 via-cyan-500 to-emerald-400',
      badgeBg: 'bg-indigo-600/10 text-indigo-600 dark:text-cyan-400'
    },
    {
      num: '04',
      tag: '24/7 Support',
      emoji: '🛡️',
      icon: ShieldCheck,
      title: 'Long-Term Support',
      desc: 'Ongoing post-launch maintenance, security patches, and strategic collaboration for continuous growth.',
      gradient: 'from-emerald-500 via-teal-500 to-blue-600',
      badgeBg: 'bg-teal-600/10 text-teal-600 dark:text-cyan-400'
    },
  ];

  return (
    <section id="why-choose-us" className={`py-16 lg:py-24 relative overflow-hidden transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-slate-50/70 text-slate-900'
    }`}>
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Premium Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-[#1264FF] dark:text-cyan-400 font-extrabold text-xs uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Your Trusted <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1264FF] via-cyan-400 to-blue-500">
              Technology Partner
            </span>
          </h2>
          <p className={`text-sm sm:text-base font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            We deliver top-tier digital engineering with commitment to reliability, speed, and long-term value.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-6 sm:p-7 border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-xl ${
                  darkMode 
                    ? 'bg-gradient-to-b from-[#061A3A] to-[#041229] border-blue-900/60 text-white hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/15' 
                    : 'bg-white/90 border-slate-200/90 text-slate-900 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10'
                }`}
              >
                {/* Glowing Top Accent Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Header Row: Emoji Left + Tag/Num Right */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Left Emoji Badge */}
                    <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/15 border border-blue-400/20 flex items-center justify-center shrink-0 shadow-md text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <span>{reason.emoji}</span>
                    </div>

                    {/* Right Step Tag */}
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider ${reason.badgeBg} border border-blue-500/20`}>
                        {reason.tag}
                      </span>
                      <span className="text-xs font-black text-slate-400 dark:text-slate-500">
                        #{reason.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold mb-2.5 text-slate-900 dark:text-white group-hover:text-[#1264FF] dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    {reason.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {reason.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-blue-900/40 flex items-center justify-between text-xs font-bold text-[#1264FF] dark:text-cyan-400">
                  <span>Core Value #{reason.num}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
