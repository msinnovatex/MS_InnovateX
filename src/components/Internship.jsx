import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Internship = () => {
  const tracks = [
    { title: 'Web Development', desc: 'HTML, CSS, JavaScript, React.js, Tailwind' },
    { title: 'Mobile App Development', desc: 'Flutter, React Native, Android, iOS' },
    { title: 'AI & Machine Learning', desc: 'Python, ML Algorithms, Data Science' },
    { title: 'Software Development', desc: 'Node.js, Express, Databases, Git, APIs' },
  ];

  return (
    <section id="internship" className="relative bg-internship-section py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/90 to-transparent lg:to-transparent/30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Internship Program
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Learn. Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Grow.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Build practical technology skills through project-based learning, real-world development projects and 1-on-1 professional mentorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {tracks.map((track, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#07132b]/90 border border-cyan-500/25 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h3 className="font-bold text-white text-base">{track.title}</h3>
                  </div>
                  <p className="text-xs text-cyan-300/80 pl-6 font-medium">{track.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5 group"
              >
                Explore Internship
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;
