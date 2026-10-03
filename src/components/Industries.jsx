import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  HeartHandshake, 
  Factory, 
  UtensilsCrossed, 
  ShoppingCart, 
  Rocket 
} from 'lucide-react';

const Industries = () => {
  const industriesList = [
    {
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      title: 'Education & Training',
      desc: 'E-learning platforms, student portals & LMS solutions.'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-cyan-400" />,
      title: 'Healthcare & Clinics',
      desc: 'Clinic management, telemedicine & EHR platforms.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      title: 'Real Estate & Construction',
      desc: 'Property listing portals, CRM & VR walkthroughs.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-cyan-400" />,
      title: 'NGOs & Social Organizations',
      desc: 'Donation systems, volunteer management & portals.'
    },
    {
      icon: <Factory className="w-8 h-8 text-cyan-400" />,
      title: 'Manufacturing & Industry',
      desc: 'Supply chain tracking, IoT & inventory software.'
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-cyan-400" />,
      title: 'Hospitality & Restaurants',
      desc: 'Online booking, POS & digital menu systems.'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-cyan-400" />,
      title: 'Retail & E-commerce',
      desc: 'Online stores, payment gateways & inventory apps.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Startups & Enterprises',
      desc: 'MVP development, SaaS & enterprise software.'
    },
  ];

  return (
    <section id="industries" className="relative bg-industries-section py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/90 via-[#07132b]/80 to-[#030914]/95 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Empowering Businesses <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Across Industries
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Delivering tailored technology solutions that drive digital transformation across diverse sectors.
          </p>
        </div>

        {/* 8 Cards Grid with Animated Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {industriesList.map((industry, index) => (
            <div
              key={index}
              className="group bg-[#091838]/70 backdrop-blur-md border border-cyan-500/25 hover:border-cyan-400 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#0c204b]/90 shadow-xl hover:shadow-cyan-500/20 shadow-cyan-950/40 flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  {React.cloneElement(industry.icon, {
                    className: "w-7 h-7 transition-all duration-300 group-hover:text-slate-950 group-hover:scale-110"
                  })}
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
