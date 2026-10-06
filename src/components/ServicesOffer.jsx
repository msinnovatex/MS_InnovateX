import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Cloud, Bot, Wrench, Layout, Mail, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import webDevImg from '../assets/web devlop.png';
import mobileAppImg from '../assets/mobile-app-develop.png';
import customSoftwareImg from '../assets/software-development.png';
import cloudDbImg from '../assets/cloud & database.png';
import aiAutomationImg from '../assets/ai-automation.png';
import maintenanceSupportImg from '../assets/it-support.png';
import uiUxImg from '../assets/UI_UX-design.png';
import emailMarketingImg from '../assets/email-marketing-analytics.jpg';
import studentInternshipImg from '../assets/student-internship.png';

const ServicesOffer = ({ darkMode }) => {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      subtitle: 'Modern, responsive and high-performance websites for businesses.',
      icon: Globe,
      badgeBg: 'bg-[#1264FF]',
      img: webDevImg,
      link: '/contact',
      features: [
        'Business Websites',
        'Portfolio Websites',
        'E-commerce Solutions',
        'CMS Development'
      ]
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      subtitle: 'Feature-rich Android and iOS applications.',
      icon: Smartphone,
      badgeBg: 'bg-purple-600',
      img: mobileAppImg,
      link: '/contact',
      features: [
        'Android App Development',
        'iOS App Development',
        'Cross-platform Apps',
        'App UI/UX Design'
      ]
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      subtitle: 'Tailored software solutions to streamline your business.',
      icon: Code2,
      badgeBg: 'bg-emerald-500',
      img: customSoftwareImg,
      link: '/contact',
      features: [
        'Business Management Systems',
        'ERP Solutions',
        'Automation Tools',
        'Industry Specific Solutions'
      ]
    },
    {
      id: 'cloud-db',
      title: 'Cloud & Database Solutions',
      subtitle: 'Secure, scalable and reliable cloud infrastructure services.',
      icon: Cloud,
      badgeBg: 'bg-amber-500',
      img: cloudDbImg,
      link: '/contact',
      features: [
        'Cloud Deployment',
        'Database Design & Optimization',
        'Backup & Security Solutions',
        'Server Management'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      subtitle: 'Leverage artificial intelligence to automate and grow your business.',
      icon: Bot,
      badgeBg: 'bg-rose-500',
      img: aiAutomationImg,
      link: '/contact',
      features: [
        'AI Chatbots & Assistants',
        'Machine Learning Solutions',
        'Process Automation',
        'Data Analytics'
      ]
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      subtitle: 'Continuous support to keep your digital products running smoothly.',
      icon: Wrench,
      badgeBg: 'bg-sky-500',
      img: maintenanceSupportImg,
      link: '/contact',
      features: [
        'Website Maintenance',
        'Bug Fixing & Updates',
        'Performance Optimization',
        'Technical Support'
      ]
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      subtitle: 'User-centered visual designs, wireframes, and prototypes.',
      icon: Layout,
      badgeBg: 'bg-indigo-600',
      img: uiUxImg,
      link: '/contact',
      features: [
        'Figma Wireframes & Prototypes',
        'User Journey Mapping',
        'Mobile & Web UI Standards',
        'Design Systems'
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      subtitle: 'Reach the right audience, engage customers and boost growth.',
      icon: Mail,
      badgeBg: 'bg-blue-600',
      img: emailMarketingImg,
      link: '/email-marketing',
      features: [
        'Email Campaign Management',
        'Newsletter & Automation',
        'Custom Template Design',
        'Analytics & Reporting'
      ]
    },
    {
      id: 'internship-training',
      title: 'Student Internship & Training',
      subtitle: 'Practical technology training with live project experience.',
      icon: GraduationCap,
      badgeBg: 'bg-teal-600',
      img: studentInternshipImg,
      link: '/internship',
      features: [
        'Software Development Training',
        'Live Client Projects',
        'Expert Tech Mentorship',
        'Recognized Internship Certificate'
      ]
    }
  ];

  return (
    <section className={`py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-gradient-to-b from-[#F7FBFF] via-[#EAF5FF]/50 to-[#F7FBFF] text-[#102044]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              OUR SERVICES
            </span>
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-[#65C7FF]' : 'bg-[#1769FF]'}`}></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2">
            What <span className="text-[#1769FF] dark:text-[#65C7FF]">We Offer</span>
          </h2>
          <p className={`text-sm sm:text-base font-normal ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
            Tailored technology solutions to meet your unique business needs.
          </p>
        </div>

        {/* 9 Services Grid - Top Image & Bottom Written Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div 
                key={item.id}
                className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-[#061A3A] border-blue-900/50 text-white shadow-xl shadow-black/30 hover:border-[#65C7FF]/40' 
                    : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5 hover:border-blue-300'
                }`}
              >
                {/* Top Section: Service Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Icon Badge on Top-Left of Image */}
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${item.badgeBg} text-white flex items-center justify-center shadow-lg ring-2 ring-white/30`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Section: Written Details Below Image */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className={`text-xl font-extrabold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed font-normal mb-5 ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                      {item.subtitle}
                    </p>

                    {/* Feature Checkmarks List */}
                    <div className="space-y-2.5 mb-6">
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#1769FF] dark:text-[#65C7FF] shrink-0" />
                          <span className={darkMode ? 'text-slate-200' : 'text-[#536A8A]'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-blue-100 dark:border-blue-900/40">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1769FF] dark:text-[#65C7FF] hover:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesOffer;
