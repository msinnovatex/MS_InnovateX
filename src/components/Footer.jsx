import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, Facebook, Youtube, Github } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#031126] text-slate-300 border-t border-blue-950 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-blue-950">
          
          {/* Left: Brand & Description (4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <img 
                src={logoImg} 
                alt="MS InnovateX Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              We build websites, mobile apps and custom software solutions, provide professional email marketing services and offer industry-focused training programs.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-950 hover:bg-[#1264FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-950 hover:bg-[#1264FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-950 hover:bg-[#1264FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-950 hover:bg-[#1264FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-blue-950 hover:bg-[#1264FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Quick Links (2.5 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/email-marketing" className="hover:text-cyan-400 transition-colors">Email Marketing</Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-cyan-400 transition-colors">Internship</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Client Solutions Services (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Client Solutions
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-400">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Custom Software</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">AI & Automation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Cloud & Database</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Maintenance & Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (2.5 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+919090625821" className="hover:text-white transition-colors">
                  +91 9090625821
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:msinnovatex@gmail.com" className="hover:text-white transition-colors">
                    msinnovatex@gmail.com
                  </a>
                  <a href="mailto:info@msinnovatex.com" className="hover:text-white transition-colors">
                    info@msinnovatex.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://www.msinnovatex.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  www.msinnovatex.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-semibold gap-4">
          <p>© 2026 MS InnovateX. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
