import React from 'react';
import { Globe, Layers, Cpu, Headset } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: 'Pan India',
      subtitle: 'Service Coverage',
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: 'End-to-End',
      subtitle: 'Development',
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Custom',
      subtitle: 'Digital Solutions',
    },
    {
      icon: <Headset className="w-6 h-6 text-cyan-400" />,
      title: 'Long-Term',
      subtitle: 'Support',
    },
  ];

  return (
    <div className="relative z-30 -mt-10 sm:-mt-12 lg:-mt-14 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#07132b]/95 backdrop-blur-xl border border-cyan-500/35 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-cyan-950/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-cyan-500/20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3.5 p-1.5 sm:p-2.5 transition-transform duration-300 hover:scale-[1.02] ${
                index > 0 ? 'pt-3 md:pt-1.5' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-300 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
