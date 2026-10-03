import React from 'react';
import { 
  FileText, 
  Compass, 
  Code, 
  CheckCircle, 
  Rocket 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: '01',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: 'Understand Requirements',
      desc: 'In-depth analysis of your business goals, target audience, and project specifications.'
    },
    {
      num: '02',
      icon: <Compass className="w-6 h-6 text-cyan-600" />,
      title: 'Planning & Strategy',
      desc: 'Defining tech stack, architecture, project roadmap, and timeline deliverables.'
    },
    {
      num: '03',
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      title: 'Design & Development',
      desc: 'Crafting responsive UI/UX prototypes and writing clean, scalable production code.'
    },
    {
      num: '04',
      icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
      title: 'Testing & Quality Assurance',
      desc: 'Rigorous security testing, bug fixing, performance audit, and user acceptance.'
    },
    {
      num: '05',
      icon: <Rocket className="w-6 h-6 text-sky-600" />,
      title: 'Deployment & Support',
      desc: 'Smooth cloud launch, ongoing maintenance, and continuous optimization.'
    },
  ];

  return (
    <section id="process" className="relative bg-process-section py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-cyan-50/30 to-slate-50/80 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-bold text-xs uppercase tracking-widest">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A Simple & Transparent <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600">
              Development Process
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium">
            From initial concept to final deployment, we follow an agile and structured workflow.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline with Animated Steps */}
        <div className="hidden lg:block relative my-6">
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 transform -translate-y-12 rounded-full z-0 opacity-70" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                <div className="relative w-20 h-20 rounded-full bg-white border-2 border-cyan-400 p-1 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:border-blue-600 transition-all duration-300 mb-5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(step.icon, {
                      className: "w-7 h-7 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                    })}
                  </div>
                  <span className="absolute -top-2 -right-1 px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-xs shadow-md transition-transform duration-300 group-hover:scale-110">
                    {step.num}
                  </span>
                </div>

                <div className="bg-white/85 backdrop-blur-md border border-cyan-200 p-5 rounded-2xl shadow-md group-hover:shadow-xl group-hover:border-cyan-400 transition-all duration-300 min-h-[150px] flex flex-col justify-start group-hover:-translate-y-1">
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Process Timeline */}
        <div className="lg:hidden space-y-5 relative pl-6 border-l-2 border-cyan-400 ml-4">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[35px] top-4 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-lg border-2 border-white">
                {step.num}
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-cyan-200 rounded-xl p-5 shadow-md group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-50 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
