import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, GraduationCap, Layers, Globe2 } from 'lucide-react';
import { apiFetch } from '../lib/api';

const defaults = [
  { id: 'projects', value: 100, suffix: '+', label: 'Projects Delivered', icon: Briefcase, gradient: 'from-[#1264FF] via-blue-600 to-cyan-400 shadow-blue-500/25' },
  { id: 'clients', value: 50, suffix: '+', label: 'Happy Clients', icon: Users, gradient: 'from-emerald-500 via-teal-500 to-cyan-400 shadow-emerald-500/25' },
  { id: 'students', value: 500, suffix: '+', label: 'Students Trained', icon: GraduationCap, gradient: 'from-amber-500 via-orange-500 to-yellow-400 shadow-amber-500/25' },
  { id: 'verticals', value: 3, suffix: '+', label: 'Service Verticals', icon: Layers, gradient: 'from-purple-600 via-indigo-600 to-blue-400 shadow-purple-500/25' },
  { id: 'support', isText: true, text: 'Pan India', label: 'Our Support', icon: Globe2, gradient: 'from-rose-500 via-pink-500 to-red-400 shadow-rose-500/25' },
];

export default function StatsCounter() {
  const [stats, setStats] = useState(defaults);
  const [visible, setVisible] = useState(true);
  const [counts, setCounts] = useState(defaults.map(x => x.isText ? x.text : 0));
  const ref = useRef(null);

  useEffect(() => {
    apiFetch('/api/public/site-config').then(data => {
      const remote = data?.stats;
      if (!remote) return;
      setVisible(remote.visible !== false);
      const next = (remote.items || defaults).map((item, i) => ({
        ...defaults[i], ...item, icon: defaults[i]?.icon || Briefcase, gradient: defaults[i]?.gradient || defaults[0].gradient
      }));
      setStats(next);
      setCounts(next.map(x => x.isText ? x.text : 0));
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!visible || !ref.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now(), duration = 1300;
      const tick = now => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(stats.map(x => x.isText ? x.text : Math.floor(Number(x.value || 0) * eased)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stats, visible]);

  if (!visible) return null;
  return (
    <section ref={ref} className="relative py-7 sm:py-9 bg-[#061A3A] border-y border-blue-900/60 text-white shadow-inner">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon || Briefcase;
            return (
              <div key={stat.id || idx} className={`p-3.5 sm:p-4 rounded-2xl bg-[#031126]/70 border border-blue-900/50 backdrop-blur-md flex items-center gap-3.5 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-0.5 shadow-md ${idx === 4 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''}`}>
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr ${stat.gradient} text-white flex items-center justify-center shrink-0 shadow-md border border-white/20`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight leading-none">
                    {stat.isText ? stat.text : `${counts[idx] ?? 0}${stat.suffix || '+'}`}
                  </div>
                  <div className="text-[11px] font-extrabold text-slate-200 mt-1 uppercase tracking-wider truncate">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
