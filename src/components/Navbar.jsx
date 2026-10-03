import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Training', href: '#internship' },
    { name: 'Careers', href: '#internship' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#030914]/95 backdrop-blur-md border-b border-cyan-500/25 shadow-xl shadow-cyan-950/60 py-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Non-clickable Logo */}
          <div className="flex items-center shrink-0">
            <img 
              src={logoImg} 
              alt="MS InnovateX Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain" 
            />
          </div>

          {/* Right Side: Nav Links + Get a Quote CTA Button */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            
            {/* Nav Links Aligned to Right Side */}
            <nav className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-full border border-transparent hover:border-cyan-500/30 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Get a Quote Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 border border-cyan-300/30 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07132b]/95 backdrop-blur-xl border-b border-cyan-500/25 px-4 pt-4 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl font-semibold border border-transparent hover:border-cyan-500/20"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-center shadow-lg shadow-cyan-500/30"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
