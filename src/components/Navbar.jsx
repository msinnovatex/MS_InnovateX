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
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#061A3A]/95 backdrop-blur-md border-b border-blue-900/50 text-white shadow-lg shadow-black/20' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-100 text-slate-800 shadow-sm'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: MS InnovateX Logo (Non-clickable) */}
          <div className="flex items-center gap-3 shrink-0">
            <img 
              src={logoImg} 
              alt="MS InnovateX Logo" 
              className="h-11 sm:h-12 w-auto object-contain" 
            />
          </div>

          {/* Middle: Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/') && location.pathname === '/'
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              Home
              {isCurrent('/') && location.pathname === '/' && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/about')
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              About
              {isCurrent('/about') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
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
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center gap-1 relative ${
                  isCurrent('/services')
                    ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                    : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                {isCurrent('/services') && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
                )}
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className={`rounded-2xl p-2 shadow-2xl border ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/60 text-white' : 'bg-white border-slate-200/80 text-slate-800'
                }`}>
                  <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-blue-900/40 mb-1">
                    Client Solutions
                  </div>
                  {clientServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-3.5 py-2 text-xs font-bold rounded-xl transition-colors ${
                        location.pathname === service.path
                          ? darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-blue-50 text-[#1264FF]'
                          : darkMode ? 'hover:bg-blue-900/40 text-slate-200' : 'hover:bg-slate-50 text-slate-700'
                      }`}
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
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/email-marketing')
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              Email Marketing
              {isCurrent('/email-marketing') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Internship Link */}
            <Link
              to="/internship"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/internship')
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              Internship
              {isCurrent('/internship') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Careers Link */}
            <Link
              to="/careers"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/careers')
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              Careers
              {isCurrent('/careers') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                isCurrent('/contact')
                  ? darkMode ? 'text-cyan-400 font-bold' : 'text-[#1264FF] font-bold'
                  : darkMode ? 'text-slate-200 hover:text-cyan-300 hover:bg-blue-900/30' : 'text-slate-600 hover:text-[#1264FF] hover:bg-blue-50/60'
              }`}
            >
              Contact
              {isCurrent('/contact') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1264FF] dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Right: Dark Mode Toggle + Get a Quote CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-colors ${
                darkMode ? 'bg-blue-900/40 text-amber-300 hover:bg-blue-900/60' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-blue-900/40 text-amber-300' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl ${darkMode ? 'text-white hover:bg-blue-900/40' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#1264FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-6 shadow-xl transition-all ${
          darkMode ? 'bg-[#061A3A] border-blue-900/40' : 'bg-white border-slate-100'
        }`}>
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/') && location.pathname === '/' ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/about') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/services') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Services (Client Solutions)
            </Link>

            <Link
              to="/email-marketing"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/email-marketing') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Email Marketing
            </Link>

            <Link
              to="/internship"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/internship') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Internship
            </Link>

            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/careers') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-semibold rounded-xl ${
                isCurrent('/contact') ? 'text-[#1264FF] bg-blue-50 font-bold' : darkMode ? 'text-slate-200' : 'text-slate-700'
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
