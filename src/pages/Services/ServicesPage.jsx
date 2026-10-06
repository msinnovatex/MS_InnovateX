import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Cloud, Wrench, TrendingUp, Layout, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesPage = ({ darkMode }) => {
  const clientServices = [
    {
      path: '/services/web-development',
      title: 'Web Development',
      icon: Globe,
      color: 'bg-blue-600',
      shortDesc: 'Modern, high-performance websites and web applications built with React, Vite, and Node.js.',
      features: ['Responsive & Mobile First', 'SEO & Speed Optimized', 'Custom Web Portals', 'Scalable Architecture']
    },
    {
      path: '/services/mobile-app',
      title: 'Mobile App Development',
      icon: Smartphone,
      color: 'bg-emerald-600',
      shortDesc: 'Native & cross-platform Android and iOS mobile applications built with Flutter & React Native.',
      features: ['Native Android Apps', 'Cross-Platform Frameworks', 'Smooth UI/UX Animation', 'Play Store Publishing']
    },
    {
      path: '/services/custom-software',
      title: 'Custom Software Development',
      icon: Code2,
      color: 'bg-purple-600',
      shortDesc: 'Enterprise software built specifically to automate your unique business workflows.',
      features: ['Enterprise ERP & CRM', 'Automated Workflows', 'Role-Based Security', 'Third-Party API Integrations']
    },
    {
      path: '/services/ai',
      title: 'AI & Automation',
      icon: TrendingUp,
      color: 'bg-indigo-600',
      shortDesc: 'Artificial intelligence integration, chatbots, workflow automation, and predictive analytics.',
      features: ['Custom AI Chatbots', 'Workflow Automation', 'Natural Language Processing', 'Data Intelligence']
    },
    {
      path: '/services/cloud-database',
      title: 'Cloud & Database Solutions',
      icon: Cloud,
      color: 'bg-amber-600',
      shortDesc: 'Secure cloud hosting, database architecture, migration, automated backups, and 99.9% uptime.',
      features: ['AWS & Google Cloud Setup', 'Database Optimization', 'High Availability Clusters', 'Backup & Disaster Recovery']
    },
    {
      path: '/services/ui-ux',
      title: 'UI/UX Design',
      icon: Layout,
      color: 'bg-rose-600',
      shortDesc: 'User-centered visual designs, interactive Figma prototypes, and complete brand design systems.',
      features: ['Figma Wireframes & Prototypes', 'User Research & Journey Mapping', 'Mobile & Web UI Standards', 'Design System Architecture']
    },
    {
      path: '/services/maintenance-support',
      title: 'Maintenance & Support',
      icon: Wrench,
      color: 'bg-sky-600',
      shortDesc: 'Ongoing technical maintenance, security patches, performance monitoring, and 24/7 helpdesk.',
      features: ['24/7 Server Monitoring', 'Regular Security Updates', 'Bug Fixing & Patching', 'Performance Tuning']
    },
    {
      path: '/services/it-consulting',
      title: 'IT Consulting',
      icon: ShieldCheck,
      color: 'bg-teal-600',
      shortDesc: 'Strategic technology advisory, code audits, architecture reviews, and digital transformation roadmaps.',
      features: ['Technology Stack Audits', 'Architecture Advisory', 'Security Compliance', 'Digital Transformation Roadmaps']
    }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#031126] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* Services Header */}
      <section className="py-16 lg:py-24 bg-[#061A3A] text-white border-b border-blue-900/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase tracking-widest mb-4">
            CLIENT SOLUTIONS DIVISION
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Complete Technology Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            Professional software engineering, cloud infrastructure, AI automation, and technical support to power your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all hover:shadow-2xl ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50 hover:border-cyan-400/50' : 'bg-slate-50 border-slate-200/80 shadow-sm hover:bg-white'
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8 border-t pt-4 border-slate-200 dark:border-blue-900/40">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#1264FF] dark:text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-md transition-all"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
