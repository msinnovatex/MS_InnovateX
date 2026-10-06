import React from 'react';
import { Lightbulb, Store, GraduationCap, Briefcase, Building2 } from 'lucide-react';
import startupImg from '../assets/startup.png';
import smbImg from '../assets/small-medium-business.png';
import eduImg from '../assets/educational.png';
import profServiceImg from '../assets/professional service.png';
import enterprisesImg from '../assets/enterprises.png';

const industriesData = [
  {
    id: 'startups',
    name: 'Startups',
    icon: Lightbulb,
    img: startupImg,
    description: 'Rapid MVP development & scalable cloud architectures for high-growth tech startups.'
  },
  {
    id: 'smb',
    name: 'Small & Medium Businesses',
    icon: Store,
    img: smbImg,
    description: 'Cost-effective websites, e-commerce, and CRM platforms to digitize traditional business operations.'
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    icon: GraduationCap,
    img: eduImg,
    description: 'Smart learning management systems, student portals, and institute administration software.'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: Briefcase,
    img: profServiceImg,
    description: 'Digital platforms, automation and customer-focused solutions for growing service businesses.'
  },
  {
    id: 'enterprises',
    name: 'Enterprises',
    icon: Building2,
    img: enterprisesImg,
    description: 'Robust enterprise resource planning (ERP), secure cloud systems, and high-load web infrastructure.'
  }
];

const Industries = ({ darkMode }) => {
  return (
    <section id="industries" className={`py-12 lg:py-16 transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              OUR INDUSTRIES
            </span>
            <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-1.5 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
            Industries We Serve
          </h2>
          <p className={`text-xs sm:text-sm font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
            Delivering innovative solutions across different sectors.
          </p>
        </div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industriesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative h-60 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-blue-900/40 cursor-pointer card-hover-effect"
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
