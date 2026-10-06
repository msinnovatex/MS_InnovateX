import React from 'react';
import { 
  FileText, 
  Compass, 
  Code, 
  CheckCircle, 
  Rocket,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const Process = ({ darkMode }) => {
  const steps = [
    {
      num: '01',
      icon: FileText,
      title: 'Understand Requirements',
      desc: 'In-depth analysis of your business goals, target audience, and project specifications.',
      color: 'from-[#1264FF] to-cyan-500',
      badgeBg: 'bg-[#1264FF]',
      borderHover: 'hover:border-[#1264FF]'
    },
    {
      num: '02',
      icon: Compass,
      title: 'Planning & Strategy',
      desc: 'Defining tech stack, architecture, project roadmap, and timeline deliverables.',
      color: 'from-cyan-500 to-blue-600',
      badgeBg: 'bg-cyan-600',
      borderHover: 'hover:border-cyan-400'
    },
    {
      num: '03',
      icon: Code,
      title: 'Design & Development',
      desc: 'Crafting responsive UI/UX prototypes and writing clean, scalable production code.',
      color: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-indigo-600',
      borderHover: 'hover:border-indigo-400'
    },
    {
      num: '04',
      icon: CheckCircle,
      title: 'Testing & Quality Assurance',
      desc: 'Rigorous security testing, bug fixing, performance audit, and user acceptance.',
      color: 'from-indigo-600 to-teal-500',
      badgeBg: 'bg-teal-600',
      borderHover: 'hover:border-teal-400'
    },
    {
      num: '05',
      icon: Rocket,
      title: 'Deployment & Support',
      desc: 'Smooth cloud launch, ongoing maintenance, and continuous optimization.',
      color: 'from-teal-500 to-sky-500',
      badgeBg: 'bg-sky-600',
      borderHover: 'hover:border-sky-400'
    },
  ];

  return (
    <section id="process" className={`py-16 lg:py-24 relative overflow-hidden transition-colors ${
      darkMode ? 'bg-[#031126] text-white' : 'bg-slate-50/70 text-slate-900'
    }`}>
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
            }`}>
              OUR PROCESS
            </span>
            <span className={`h-0.5 w-8 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2">
            A Simple & Transparent <br className="hidden sm:inline" />
            <span className="text-[#1264FF] dark:text-cyan-400">Development Process</span>
          </h2>
          <p className={`text-sm sm:text-base font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            From initial concept to final deployment, we follow an agile and structured workflow.
          </p>
        </div>

        {/* Desktop 5-Step Arrow Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-4 lg:gap-5 relative z-10 items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col group">
                
                {/* Arrow Step Card */}
                <div className={`relative flex-1 rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${step.borderHover} ${
                  darkMode 
                    ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl' 
                    : 'bg-white border-slate-200 text-slate-900 shadow-md hover:shadow-xl'
                }`}>
                  
                  {/* Pointing Chevron Arrow Banner */}
                  <div 
                    className={`w-full py-2 px-3.5 mb-4 rounded-lg bg-gradient-to-r ${step.color} text-white font-black text-xs tracking-wider flex items-center justify-between shadow-md`}
                    style={{ clipPath: 'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="opacity-90">STEP</span>
                      <span className="text-sm">{step.num}</span>
                    </div>
                    <Icon className="w-4 h-4 mr-3 shrink-0" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-base font-extrabold mb-2 leading-snug group-hover:text-[#1264FF] dark:group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-normal ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator at Bottom */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-blue-900/40 flex items-center justify-between text-[11px] font-bold text-[#1264FF] dark:text-cyan-400">
                    <span>PHASE {step.num}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>

                </div>

                {/* Arrow Connector between steps */}
                {!isLast && (
                  <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1264FF] dark:bg-cyan-400 text-white dark:text-slate-950 items-center justify-center shadow-lg border-2 border-white dark:border-[#031126]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Arrow Vertical Flow */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="flex flex-col items-center">
                
                {/* Mobile Arrow Card */}
                <div className={`w-full rounded-2xl p-5 border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl' 
                    : 'bg-white border-slate-200 text-slate-900 shadow-md'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {/* Arrow Chevron Badge */}
                    <div 
                      className={`py-1.5 px-4 rounded-lg bg-gradient-to-r ${step.color} text-white font-black text-xs tracking-wider flex items-center gap-2 shadow-md`}
                      style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
                    >
                      <span>STEP {step.num}</span>
                      <ArrowRight className="w-3.5 h-3.5 mr-2" />
                    </div>

                    <div className={`p-2 rounded-xl ${step.badgeBg} text-white shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold mb-1.5 text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Arrow Connector */}
                {!isLast && (
                  <div className="my-2 p-1.5 rounded-full bg-cyan-100 dark:bg-blue-900/60 text-[#1264FF] dark:text-cyan-400">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
