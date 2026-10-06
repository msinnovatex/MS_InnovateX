import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap, Users, ArrowRight } from 'lucide-react';
import emailMarketingImg from '../assets/email-marketing-analytics.jpg';
import techHubImg from '../assets/tech-hub.jpg';
import techSupportImg from '../assets/tech-support-team.jpg';

const AboutFocus = ({ darkMode }) => {
  const pillars = [
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      desc: 'Help businesses connect with their customers through effective email marketing solutions.',
      img: emailMarketingImg,
      icon: Mail,
      link: '/email-marketing'
    },
    {
      id: 'internship',
      title: 'Student Internship',
      desc: 'Provide practical learning opportunities with real-world projects and industry guidance.',
      img: techHubImg,
      icon: GraduationCap,
      link: '/internship'
    },
    {
      id: 'client-solutions',
      title: 'Client Solutions',
      desc: 'Develop custom software, web and mobile applications to solve real business needs.',
      img: techSupportImg,
      icon: Users,
      link: '/services'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#061A3A]/60 text-white' : 'bg-gradient-to-b from-[#EAF5FF]/60 via-[#F7FBFF] to-[#EAF5FF]/80 text-[#102044]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              OUR FOCUS AREAS
            </span>
            <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
            What We Do
          </h2>
          <p className={`text-sm sm:text-base font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
            We work across multiple areas to create value for businesses and individuals.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-[#031126] border-blue-900/60 text-white shadow-xl shadow-black/30 hover:border-[#65C7FF]/40' 
                    : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5 hover:border-blue-300'
                }`}
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Blue Round Icon Badge at top left */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#1769FF] text-white flex items-center justify-center shadow-lg border border-white/20">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-black mb-2 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>{item.title}</h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Circular Arrow Button */}
                <div className="p-6 pt-0 flex justify-end">
                  <Link
                    to={item.link}
                    className="w-10 h-10 rounded-full bg-[#1769FF] hover:bg-[#2F8FFF] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-110"
                    title={`Explore ${item.title}`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutFocus;
