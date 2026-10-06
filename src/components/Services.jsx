import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Cloud, Wrench, TrendingUp } from 'lucide-react';
import waveBg from '../assets/wave-bg.jpg';

const servicesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: Globe,
    badgeColor: 'bg-blue-600 text-white',
  },
  {
    id: 'android-dev',
    title: 'Mobile App Development',
    icon: Smartphone,
    badgeColor: 'bg-emerald-500 text-white',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: Code2,
    badgeColor: 'bg-purple-600 text-white',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: TrendingUp,
    badgeColor: 'bg-indigo-600 text-white',
  },
  {
    id: 'cloud-db',
    title: 'Cloud & Database Solutions',
    icon: Cloud,
    badgeColor: 'bg-[#F59E0B] text-white',
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: Wrench,
    badgeColor: 'bg-rose-500 text-white',
  }
];

const Services = ({ darkMode }) => {
  return (
    <section id="services" className={`relative py-12 lg:py-16 transition-colors ${
      darkMode ? 'bg-[#061A3A]/80 text-white' : 'bg-transparent text-slate-900'
    }`}>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
              }`}>
                OUR SERVICES
              </span>
              <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Complete Technology Solutions
            </h2>
          </div>

          <Link
            to="/services"
            className="mt-4 md:mt-0 text-sm font-extrabold text-[#1264FF] dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            View All Services →
          </Link>
        </div>

        {/* Small Non-Clickable Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                  darkMode 
                    ? 'bg-[#031126] border-blue-900/50 text-white' 
                    : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md ${service.badgeColor}`}>
                  <Icon className="w-5.5 h-5.5" />
                </div>

                <h3 className="text-sm sm:text-base font-extrabold tracking-tight">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
