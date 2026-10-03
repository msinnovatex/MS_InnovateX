import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      emoji: '💻',
      title: 'Web Development',
      description: 'Modern, responsive and high-performance websites tailored for your business growth.',
    },
    {
      emoji: '📱',
      title: 'Mobile App Development',
      description: 'Android, iOS and cross-platform applications built with intuitive UI and rich features.',
    },
    {
      emoji: '⚙️',
      title: 'Custom Software',
      description: 'Tailored software solutions for seamless business operations and enterprise scalability.',
    },
    {
      emoji: '🤖',
      title: 'AI & Automation',
      description: 'AI/ML solutions, smart chatbots and intelligent automation to streamline work processes.',
    },
    {
      emoji: '☁️',
      title: 'Cloud & Database',
      description: 'Scalable cloud infrastructure, secure database migration, and cloud-native architecture.',
    },
    {
      emoji: '💡',
      title: 'IT Consulting',
      description: 'Technology strategy, architecture guidance and comprehensive digital transformation.',
    },
    {
      emoji: '🛠️',
      title: 'Maintenance & Support',
      description: 'Reliable 24/7 technical support, security updates, and performance optimization.',
    },
    {
      emoji: '🎨',
      title: 'UI/UX Design',
      description: 'Modern, engaging and user-friendly digital experiences designed for ultimate conversion.',
    },
  ];

  return (
    <section id="services" className="relative bg-services-section py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-blue-50/40 to-slate-50/80 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-800 font-bold text-xs uppercase tracking-widest shadow-sm">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete Technology Solutions <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600">
              for Your Business
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto">
            We deliver modern, scalable and innovative digital solutions tailored to your business needs.
          </p>
        </div>

        {/* 4x2 Cards Grid with Visible 3D Emojis and Animated Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md border border-cyan-200/80 rounded-[18px] p-6 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* 3D Emoji Icon Badge - ALWAYS Visible */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-5 shadow-md shadow-cyan-900/10 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:border-cyan-300 group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <span className="text-3xl select-none filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-cyan-600 transition-colors">
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
