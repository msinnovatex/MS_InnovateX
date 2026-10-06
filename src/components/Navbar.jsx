import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const clientServices = [
    { name: 'Overview', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile App Development', path: '/services' },
    { name: 'Custom Software Development', path: '/services' },
    { name: 'AI & Automation', path: '/services' },
    { name: 'Cloud & Database Solutions', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Maintenance & Support', path: '/services' },
    { name: 'Email Marketing', path: '/email-marketing' },
    { name: 'Student Internship & Training', path: '/internship' },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#031126]/95 backdrop-blur-md border-b border-blue-900/60 text-white shadow-lg shadow-black/30' 
        : 'bg-[#020D24]/98 backdrop-blur-md border-b border-blue-950/70 text-white shadow-md'
    }`}>
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Left: MS InnovateX Logo (Non-clickable, optimized for high visibility over blue theme) */}
          <div className="flex items-center gap-3 shrink-0">
            <img 
              src={logoImg} 
              alt="MS InnovateX Logo" 
              className="h-10 sm:h-11 w-auto object-contain drop-shadow-md shrink-0" 
            />
          </div>

          {/* Middle: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-center min-w-0">
            <Link
              to="/"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/') && location.pathname === '/'
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              Home
              {isCurrent('/') && location.pathname === '/' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/about')
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              About
              {isCurrent('/about') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Services Dropdown (Client Solutions ONLY) */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 inline-flex items-center gap-1 relative ${
                  isCurrent('/services')
                    ? 'text-cyan-400 font-bold'
                    : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 shrink-0" />
                {isCurrent('/services') && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
                )}
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="rounded-2xl p-2 shadow-2xl border bg-[#061A3A] border-blue-900/60 text-white">
                  <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 border-b border-blue-900/40 mb-1">
                    Client Solutions
                  </div>
                  {clientServices.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Marketing Link */}
            <Link
              to="/email-marketing"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/email-marketing')
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              Email Marketing
              {isCurrent('/email-marketing') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Internship Link */}
            <Link
              to="/internship"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/internship')
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              Internship
              {isCurrent('/internship') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Careers Link */}
            <Link
              to="/careers"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/careers')
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              Careers
              {isCurrent('/careers') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`px-1.5 lg:px-2 py-2 text-[12px] lg:text-[13px] font-semibold whitespace-nowrap rounded-lg transition-all duration-200 relative ${
                isCurrent('/contact')
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-100 hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              Contact
              {isCurrent('/contact') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cyan-400 rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Right: Dark Mode Toggle + Get a Quote CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full transition-colors bg-white/10 text-amber-300 hover:bg-white/20"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-white" />}
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/10 text-amber-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-white" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b px-4 pt-3 pb-6 shadow-xl transition-all bg-[#020D24] border-blue-950/70 text-white">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/') && location.pathname === '/' ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/about') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/services') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Services (Client Solutions)
            </Link>

            <Link
              to="/email-marketing"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/email-marketing') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Email Marketing
            </Link>

            <Link
              to="/internship"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/internship') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Internship
            </Link>

            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/careers') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/contact') ? 'text-cyan-400 bg-white/10 font-bold' : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>

            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-[#1264FF] rounded-xl font-bold shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
