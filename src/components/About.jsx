import React from 'react';
import { ArrowRight, Target, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import officeImg from '../assets/office.jpg';

const About = () => {
  return (
    <section id="about" className="relative bg-[#050e21] text-white py-16 lg:py-20 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Innovative Digital Solutions <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                for a Smarter Future
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              MS InnovateX Pvt. Ltd. is a technology company based in Bhubaneswar, Odisha, focused on delivering practical, innovative and scalable digital solutions. We help businesses, organizations and institutions turn their ideas into real-world technology products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">Result-Oriented Approach</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">Modern Architecture</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">Transparent Communication</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">100% Quality Commitment</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
              <img
                src={officeImg}
                alt="MS InnovateX Corporate Office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#07132b]/95 backdrop-blur-md border border-cyan-500/30 shadow-xl">
                <h4 className="text-base font-bold text-white">MS InnovateX Corporate Office</h4>
                <p className="text-xs text-cyan-300 font-medium">Bhubaneswar, Odisha • Serving Clients Across India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
