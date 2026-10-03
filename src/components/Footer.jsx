import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Github } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Training', href: '#internship' },
    { name: 'Careers', href: '#internship' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    'Web Development',
    'Mobile App Development',
    'Custom Software',
    'AI & Automation',
    'Cloud & Database',
    'IT Consulting',
    'Maintenance & Support',
  ];

  return (
    <footer className="relative bg-footer-section text-slate-300 pt-16 pb-8 border-t border-cyan-500/20 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              {/* Logo in Footer */}
              <img src={logoImg} alt="MS InnovateX Logo" className="h-14 sm:h-16 w-auto object-contain mb-2" />
            </div>

            <p className="text-cyan-400 font-semibold text-sm">
              Innovating Today <span className="text-slate-500">|</span> Building Tomorrow
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              MS InnovateX Pvt. Ltd. delivers practical, scalable and innovative technology solutions tailored for business growth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/ms-innovatex/home/", name: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, href: "#", name: "Twitter" },
                { icon: <Instagram className="w-4 h-4" />, href: "#", name: "Instagram" },
                { icon: <Facebook className="w-4 h-4" />, href: "#", name: "Facebook" },
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/msinnovatex", name: "GitHub" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href="mailto:info@msinnovatex.com" className="hover:text-cyan-400 transition-colors">
                  info@msinnovatex.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href="tel:+919090625821" className="hover:text-cyan-400 transition-colors">
                  +91 9090625821
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 MS InnovateX Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
