import React from 'react';
import { Target, Award, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: 'Client-Centric Approach',
      desc: 'We focus on your specific goals and build tailored digital solutions designed around your business needs.',
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Quality & Innovation',
      desc: 'We follow best industry practices, clean code standards, and modern technologies for maximum performance.',
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: 'On-Time Delivery',
      desc: 'We ensure timely milestone delivery with a structured agile process and transparent timeline updates.',
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-cyan-400" />,
      title: 'Long-Term Support',
      desc: 'Ongoing post-launch maintenance, security patches, and strategic collaboration for continuous growth.',
    },
  ];

  return (
    <section className="relative bg-why-us-section py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/90 via-[#07132b]/85 to-[#030914]/95 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Trusted <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Technology Partner
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We deliver top-tier digital engineering with commitment to reliability, speed, and long-term value.
          </p>
        </div>

        {/* 4 Cards Grid with Animated Hover Glow & Arrow Shift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-[#07142e]/85 backdrop-blur-xl border border-cyan-500/25 hover:border-cyan-400 rounded-2xl p-7 shadow-xl hover:shadow-cyan-500/25 shadow-cyan-950/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  {React.cloneElement(reason.icon, {
                    className: "w-7 h-7 transition-all duration-300 group-hover:text-slate-950 group-hover:scale-110"
                  })}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {reason.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-cyan-500/20 flex items-center justify-between text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <span>Core Value #{index + 1}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
