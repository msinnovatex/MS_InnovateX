import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, GraduationCap, Layers, Globe2 } from 'lucide-react';

// Default stats data structure with premium icon mappings
const defaultStatsData = [
  { 
    id: 'projects', 
    value: 100, 
    suffix: '+', 
    label: 'Projects Delivered',
    icon: Briefcase,
    gradient: 'from-[#1264FF] via-blue-600 to-cyan-400 shadow-blue-500/25'
  },
  { 
    id: 'clients', 
    value: 50, 
    suffix: '+', 
    label: 'Happy Clients',
    icon: Users,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-400 shadow-emerald-500/25'
  },
  { 
    id: 'students', 
    value: 500, 
    suffix: '+', 
    label: 'Students Trained',
    icon: GraduationCap,
    gradient: 'from-amber-500 via-orange-500 to-yellow-400 shadow-amber-500/25'
  },
  { 
    id: 'verticals', 
    value: 3, 
    suffix: '+', 
    label: 'Service Verticals',
    icon: Layers,
    gradient: 'from-purple-600 via-indigo-600 to-blue-400 shadow-purple-500/25'
  },
  { 
    id: 'support', 
    isText: true, 
    text: 'Pan India', 
    label: 'Our Support',
    icon: Globe2,
    gradient: 'from-rose-500 via-pink-500 to-red-400 shadow-rose-500/25'
  },
];

const StatsCounter = () => {
  const [stats, setStats] = useState(defaultStatsData);
  const [counts, setCounts] = useState(defaultStatsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Read stats from localStorage (allows Admin Portal to update live anytime)
  useEffect(() => {
    try {
      const savedStats = localStorage.getItem('ms_innovatex_stats');
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        const merged = parsed.map((item, i) => ({
          ...defaultStatsData[i],
          ...item,
          icon: defaultStatsData[i]?.icon || Briefcase,
        }));
        setStats(merged);
      }
    } catch (e) {
      console.error('Error loading dynamic stats:', e);
    }
  }, []);

  // Detect when stats section arrives in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  // Smooth ease-out auto-count animation from 0 to actual value
  const startCounting = () => {
    const duration = 1600; // 1.6 seconds total count time
    const fps = 60;
    const totalSteps = Math.round((duration / 1000) * fps);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => {
          if (stat.isText) return stat.text;
          return Math.floor(stat.value * easeProgress);
        })
      );

      if (step >= totalSteps) {
        clearInterval(timer);
        setCounts(stats.map((stat) => (stat.isText ? stat.text : stat.value)));
      }
    }, 1000 / fps);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-7 sm:py-9 bg-[#061A3A] border-y border-blue-900/60 text-white shadow-inner"
    >
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon || Briefcase;
            return (
              <div 
                key={stat.id || idx}
                className={`p-3.5 sm:p-4 rounded-2xl bg-[#031126]/70 border border-blue-900/50 backdrop-blur-md flex items-center gap-3.5 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-0.5 shadow-md ${
                  idx === 4 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                {/* Premium Icon Badge on Left */}
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr ${stat.gradient} text-white flex items-center justify-center shrink-0 shadow-md border border-white/20`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text Content on Right */}
                <div className="text-left min-w-0">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight leading-none">
                    {stat.isText ? stat.text : `${counts[idx]}${stat.suffix || '+'}`}
                  </div>
                  <div className="text-[11px] font-extrabold text-slate-200 mt-1 uppercase tracking-wider truncate">
                    {stat.label}
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

export default StatsCounter;
