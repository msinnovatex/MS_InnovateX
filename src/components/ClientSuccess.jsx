import React from 'react';
import { Layers, Users, Building, Smile } from 'lucide-react';

const ClientSuccess = () => {
  const stats = [
    {
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      number: '200+',
      label: 'Projects Delivered',
      sub: 'Across Web, Mobile & Enterprise AI'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      number: '50+',
      label: 'Happy Clients',
      sub: 'Businesses & Institutions'
    },
    {
      icon: <Building className="w-8 h-8 text-cyan-400" />,
      number: '8+',
      label: 'Industries Served',
      sub: 'Healthcare, Education, Retail & more'
    },
    {
      icon: <Smile className="w-8 h-8 text-cyan-400" />,
      number: '100%',
      label: 'Client Satisfaction',
      sub: 'Quality Code & Dedicated Support'
    },
  ];

  return (
    <section className="relative bg-stats-section py-20 lg:py-24 overflow-hidden border-t border-b border-cyan-500/15">
      {/* Dark overlay keeping stats grid glow visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/90 via-[#07132b]/80 to-[#030914]/90 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turning Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Real Digital Products</span>
          </h2>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#07142e]/80 backdrop-blur-xl border border-cyan-500/25 rounded-2xl p-6 text-center transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1.5 shadow-xl shadow-cyan-950/50 flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-inner">
                {stat.icon}
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {stat.number}
              </div>

              <div className="text-base sm:text-lg font-bold text-slate-100 mb-1">
                {stat.label}
              </div>

              <div className="text-xs text-cyan-300/80 font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSuccess;
