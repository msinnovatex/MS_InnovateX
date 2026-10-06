import React from 'react';
import { Lightbulb, Store, GraduationCap, Heart, Building2 } from 'lucide-react';
import whyUsBg from '../assets/why-us-bg.jpg';
import officeBg from '../assets/office.jpg';
import statsBg from '../assets/stats-bg.jpg';
import heroBg from '../assets/hero-bg.jpg';
import cityBg from '../assets/city-bg.jpg';

const industriesData = [
  {
    id: 'startups',
    name: 'Startups',
    icon: Lightbulb,
    img: whyUsBg,
    description: 'Rapid MVP development & scalable cloud architectures for high-growth tech startups.'
  },
  {
    id: 'smb',
    name: 'Small & Medium Businesses',
    icon: Store,
    img: officeBg,
    description: 'Cost-effective websites, e-commerce, and CRM platforms to digitize traditional business operations.'
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    icon: GraduationCap,
    img: statsBg,
    description: 'Smart learning management systems, student portals, and institute administration software.'
  },
  {
    id: 'ngos',
    name: 'NGOs',
    icon: Heart,
    img: heroBg,
    description: 'Transparent donation portals, volunteer management software, and community outreach platforms.'
  },
  {
    id: 'enterprises',
    name: 'Enterprises',
    icon: Building2,
    img: cityBg,
    description: 'Robust enterprise resource planning (ERP), secure cloud systems, and high-load web infrastructure.'
  }
];

const Industries = ({ darkMode }) => {
  return (
    <section id="industries" className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#061A3A] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
              }`}>
                INDUSTRIES WE SERVE
              </span>
              <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Solutions for Every Business
            </h2>
          </div>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industriesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-blue-900/40 cursor-pointer card-hover-effect"
              >
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Blue Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A] via-[#061A3A]/75 to-transparent group-hover:from-[#1264FF]/90 group-hover:via-[#061A3A]/85 transition-all duration-300" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base font-black tracking-tight mb-1 text-white leading-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-200 line-clamp-2 opacity-90 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Industries;
