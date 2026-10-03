import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full aspect-[2.25/1] min-h-[480px] max-h-[700px] bg-hero-section bg-cover bg-center flex items-center overflow-hidden">
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Content Area (55% width) - Buttons shifted slightly RIGHT and DOWN */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-[21%] sm:pt-[23%] lg:pt-[24%] xl:pt-[25%] pl-3 sm:pl-6 lg:pl-10 xl:pl-12">
            
            {/* CTA Buttons - Shifted slightly RIGHT and DOWN for precise alignment */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 border border-cyan-300/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-cyan-200 hover:text-white bg-[#061533]/80 hover:bg-[#091f4a] border border-cyan-400/40 hover:border-cyan-300 rounded-full backdrop-blur-md shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get a Free Consultation
              </a>
            </div>

          </div>

          {/* Right Area (45% width) - Keeps laptop and office visual 100% unobstructed */}
          <div className="lg:col-span-5 hidden lg:block">
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
