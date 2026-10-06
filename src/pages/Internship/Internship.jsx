import React, { useState } from 'react';
import { 
  GraduationCap, Laptop, Award, Briefcase, CheckCircle2, ArrowRight,
  Code2, Smartphone, Cloud, Cpu, Wrench, Lightbulb, Users,
  TrendingUp, Calendar, Download, FileCheck, Check, Mail, ChevronRight
} from 'lucide-react';
import internshipPgImg from '../../assets/internship-pg.png';
import internshipFormImg from '../../assets/internship-form.png';
import './Internship.css';
import { isValidEmail, isValidPhone, normalizeSubmission } from '../../lib/validation';

const Internship = ({ darkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    duration: '1 Month',
    domain: 'Web Development',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      // Disallow numbers in full name
      const noNumbers = value.replace(/[0-9]/g, '');
      setFormData(prev => ({ ...prev, fullName: noNumbers }));
      return;
    }

    if (name === 'phone') {
      // Extract digits only
      let digits = value.replace(/\D/g, '');
      // Strip leading country code 91 if typed manually
      if (digits.startsWith('91')) {
        digits = digits.slice(2);
      }
      // Restrict to max 10 digits
      digits = digits.slice(0, 10);
      const formatted = digits ? `+91 ${digits}` : '';
      setFormData(prev => ({ ...prev, phone: formatted }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToFormWithSelection = (duration, domain) => {
    setFormData(prev => ({
      ...prev,
      ...(duration ? { duration } : {}),
      ...(domain ? { domain } : {})
    }));
    const el = document.getElementById('application-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
<<<<<<< HEAD
    setFormError('');
    const normalized = normalizeSubmission(formData);
    if (!isValidEmail(normalized.email)) {
      setFormError('Please enter a valid email address, for example name@gmail.com.');
      return;
    }
    if (!isValidPhone(normalized.phone)) {
      setFormError('Please enter a valid phone / WhatsApp number.');
      return;
    }
    if (!normalized.fullName || !normalized.college) {
      setFormError('Please complete all required fields.');
      return;
    }
    setFormData(normalized);
=======

    // Validate 10-digit mobile number
    const phoneDigits = formData.phone.replace(/\D/g, '').replace(/^91/, '');
    if (phoneDigits.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

>>>>>>> 6d5cf0a (Update)
    setLoading(true);
    try {
      const apiBase = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/submissions/internship`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
        body: JSON.stringify(normalized)
=======
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          qualification: 'Student',
          domain: formData.domain,
          duration: formData.duration,
          message: formData.message
        })
>>>>>>> 6d5cf0a (Update)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Unable to submit application.');
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: '', email: '', phone: '', college: '',
          duration: '1 Month', domain: 'Web Development', message: ''
        });
<<<<<<< HEAD
        setFormError('');
      }, 4000);
    } catch (err) {
      setFormError(err.message || 'Unable to submit registration.');
=======
      }, 5000);
    } catch (err) {
      alert(err.message || 'Unable to submit application.');
>>>>>>> 6d5cf0a (Update)
    } finally {
      setLoading(false);
    }
  };

  const whyChooseUs = [
    {
      title: 'Hands-on Learning',
      desc: 'Work on real projects with modern technologies.',
      icon: Lightbulb,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      title: 'Expert Guidance',
      desc: 'Learn from industry professionals.',
      icon: Users,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      title: 'Career Growth',
      desc: 'Build a strong portfolio for future opportunities.',
      icon: TrendingUp,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      title: 'Certification',
      desc: 'Get an internship certificate on successful completion.',
      icon: Award,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    }
  ];

  const programs = [
    {
      duration: '1 Month',
      title: '1 Month Internship',
      description: 'Ideal for beginners to build core fundamentals, work on guided coding tasks, and deliver a starter live project.',
      badgeBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]',
      btnBg: 'bg-[#1769FF] hover:bg-[#1258d4] text-white shadow-md shadow-blue-500/15',
      features: [
        'Basic to Advanced Skill Building',
        'Small Live Guided Projects',
        'Mentor Code Reviews & Support',
        'Verified Internship Certificate'
      ]
    },
    {
      duration: '3 Months',
      title: '3 Months Internship',
      description: 'Designed for students seeking in-depth practical training, real-world workflow experience, and portfolio-ready client projects.',
      badgeBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]',
      btnBg: 'bg-[#1769FF] hover:bg-[#1258d4] text-white shadow-md shadow-blue-500/15',
      features: [
        'In-Depth Skill & Tool Training',
        'Real-World Client Projects',
        '1-on-1 Expert Tech Mentorship',
        'Letter of Recommendation (Top Performers)',
        'Verified Internship Certificate'
      ]
    },
    {
      duration: '6 Months',
      title: '6 Months Internship',
      description: 'Full professional immersion featuring advanced software architecture, production live projects, team collaboration, and career placement guidance.',
      badgeBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]',
      btnBg: 'bg-[#1769FF] hover:bg-[#1258d4] text-white shadow-md shadow-blue-500/15',
      features: [
        'Advanced System Architecture',
        'Multiple Live Production Projects',
        'Agile Workflow & Team Collaboration',
        'Resume & Career Placement Support',
        'Verified Internship Certificate'
      ]
    }
  ];

  const domains = [
    {
      name: 'Web Development',
      icon: Laptop,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      name: 'Mobile App Development',
      icon: Smartphone,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      name: 'Custom Software Development',
      icon: Code2,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      name: 'Cloud & Database Solutions',
      icon: Cloud,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      name: 'AI & Automation',
      icon: Cpu,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    },
    {
      name: 'Email Marketing',
      icon: Mail,
      iconBg: 'bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF]'
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors ${darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'}`}>
      
      {/* 1. HERO SECTION WITH FULL BACKGROUND IMAGE */}
      <section 
        className="relative py-8 sm:py-12 lg:py-14 bg-cover bg-center text-white overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-start pt-8 sm:pt-12"
        style={{ backgroundImage: `url(${internshipPgImg})` }}
      >
        {/* Subtle dark overlay for text contrast without blue color tinting */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-4xl space-y-3 sm:space-y-4">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white font-bold text-xs backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Learn • Practice • Build • Grow</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Student <br />
              <span className="text-cyan-400">Internship Program</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-100 leading-relaxed font-normal max-w-lg">
              Gain real-world experience, work on live projects and develop in-demand skills with expert guidance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollToFormWithSelection()}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToFormWithSelection()}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* 4 Compact Feature Badges with Premium Emojis */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3 border-t border-white/20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md shadow-sm">
                <span className="text-base sm:text-lg">💻</span>
                <span>Live Projects</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md shadow-sm">
                <span className="text-base sm:text-lg">👨‍💻</span>
                <span>Expert Mentorship</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md shadow-sm">
                <span className="text-base sm:text-lg">📜</span>
                <span>Certificate Provided</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md shadow-sm">
                <span className="text-base sm:text-lg">🚀</span>
                <span>Career Guidance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE OUR INTERNSHIP? */}
      <section className={`py-16 lg:py-24 relative overflow-hidden transition-colors ${
        darkMode ? 'bg-[#061A3A]/80' : 'bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FBFF] to-[#EAF5FF]/60'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              PROGRAM BENEFITS
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mt-1 mb-3 ${
              darkMode ? 'text-white' : 'text-[#102044]'
            }`}>
              Why Choose Our <span className="text-[#1769FF] dark:text-[#65C7FF]">Internship?</span>
            </h2>
            <p className={`text-sm sm:text-base font-normal ${
              darkMode ? 'text-slate-300' : 'text-[#536A8A]'
            }`}>
              A practical and industry-focused internship program designed to help you build skills, gain experience and kickstart your career.
            </p>
          </div>

          {/* Arrow-Style Process Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              const stepNum = `0${idx + 1}`;
              const isLast = idx === whyChooseUs.length - 1;

              return (
                <div key={idx} className="relative group">
                  {/* Main Card with Arrow Accent Header & Bottom Bar */}
                  <div
                    className={`relative p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden ${
                      darkMode 
                        ? 'bg-[#031126] border-blue-900/60 text-white shadow-xl shadow-black/30 hover:border-[#65C7FF]/50' 
                        : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5 hover:border-blue-300 hover:shadow-blue-500/15'
                    }`}
                  >
                    {/* Top Header: Step Badge with Arrow Icon + Feature Icon */}
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769FF] text-white text-xs font-black tracking-wider shadow-sm">
                        <span>STEP {stepNum}</span>
                        {!isLast && <ArrowRight className="w-3 h-3" />}
                      </div>

                      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-black mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                        {item.title}
                      </h3>

                      <p className={`text-xs sm:text-sm font-normal leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-[#536A8A]'
                      }`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Arrow Indicator Link */}
                    <div className="mt-6 pt-4 border-t border-blue-100 dark:border-blue-900/40 flex items-center justify-between text-xs font-bold text-[#1769FF] dark:text-[#65C7FF]">
                      <span className="uppercase tracking-wider">Phase {stepNum}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Connecting Arrow Circle Indicator (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1769FF] text-white shadow-lg ring-4 ring-[#F7FBFF] dark:ring-[#061A3A]">
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INTERNSHIP PROGRAMS */}
      <section className={`py-16 lg:py-24 transition-colors ${
        darkMode ? 'bg-[#031126]' : 'bg-[#F7FBFF]'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              STRUCTURED LEARNING
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mt-1 mb-3 ${
              darkMode ? 'text-white' : 'text-[#102044]'
            }`}>
              Internship <span className="text-[#1769FF] dark:text-[#65C7FF]">Programs</span>
            </h2>
            <p className={`text-sm sm:text-base font-normal ${
              darkMode ? 'text-slate-300' : 'text-[#536A8A]'
            }`}>
              Choose the duration that suits your goals and build practical skills with our expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl shadow-black/30 hover:border-[#65C7FF]/40'
                    : 'bg-white border-blue-100 text-[#102044] shadow-xl shadow-blue-500/5 hover:border-blue-300'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${prog.badgeBg} flex items-center justify-center mb-6 shadow-sm`}>
                    <Calendar className="w-6 h-6" />
                  </div>

                  <h3 className={`text-2xl font-black tracking-tight mb-3 ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                    {prog.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-normal leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                    {prog.description}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {prog.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold">
                        <div className="w-5 h-5 rounded-full bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={darkMode ? 'text-slate-200' : 'text-[#536A8A]'}>{feat}</span>
                      </div>
                    ))}
                  </div>
<<<<<<< HEAD
                )}
                {formError && (
                  <div role="alert" className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs font-bold">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter your full name" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter phone number" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">College / Institution *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      placeholder="Your college name" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Select Technology Domain</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({...formData, domain: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Android & Mobile App Development">Android & Mobile App Development</option>
                      <option value="Data Science & AI / Automation">Data Science & AI / Automation</option>
                      <option value="Cloud & Database Infrastructure">Cloud & Database Infrastructure</option>
                      <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Program Duration</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="4-6 Weeks Summer / Winter Internship">4-6 Weeks Summer / Winter Internship</option>
                      <option value="3 Months Industrial Training">3 Months Industrial Training</option>
                      <option value="6 Months Launchpad Program">6 Months Launchpad Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Additional Notes / Message</label>
                  <textarea 
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your background or learning goals..." 
                    className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                  ></textarea>
=======
>>>>>>> 6d5cf0a (Update)
                </div>

                <button
                  onClick={() => scrollToFormWithSelection(prog.duration)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md ${prog.btnBg}`}
                >
                  <span>Apply for {prog.duration}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTERNSHIP DOMAINS */}
      <section className={`py-16 lg:py-24 transition-colors ${
        darkMode ? 'bg-[#061A3A]/60' : 'bg-gradient-to-b from-[#EAF5FF]/60 via-[#F7FBFF] to-[#EAF5FF]/80'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
              darkMode ? 'text-[#65C7FF]' : 'text-[#1769FF]'
            }`}>
              SPECIALIZATION TRACKS
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mt-1 mb-3 ${
              darkMode ? 'text-white' : 'text-[#102044]'
            }`}>
              Internship <span className="text-[#1769FF] dark:text-[#65C7FF]">Domains</span>
            </h2>
            <p className={`text-sm sm:text-base font-normal ${
              darkMode ? 'text-slate-300' : 'text-[#536A8A]'
            }`}>
              Choose the domain that matches your interest and build in-demand skills.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              return (
                <div
                  key={idx}
                  onClick={() => scrollToFormWithSelection(null, dom.name)}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center ${
                    darkMode 
                      ? 'bg-[#031126] border-blue-900/50 text-white shadow-lg shadow-black/20 hover:border-[#65C7FF]/40' 
                      : 'bg-white border-blue-100 text-[#102044] shadow-md shadow-blue-500/5 hover:border-[#2F8FFF] hover:shadow-blue-500/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${dom.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`text-xs sm:text-sm font-extrabold tracking-tight leading-snug ${
                    darkMode ? 'text-white' : 'text-[#102044]'
                  }`}>
                    {dom.name}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INTERNSHIP APPLICATION FORM */}
      <section id="application-form" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div 
          className="relative rounded-3xl overflow-hidden bg-[#102044] text-white p-6 sm:p-10 lg:p-14 border border-blue-900/40 shadow-2xl min-h-[500px] flex items-center"
        >
          {/* Background Image - Full Contain on Right Side */}
          <div 
            className="absolute inset-0 bg-contain bg-right bg-no-repeat pointer-events-none opacity-90 sm:opacity-100"
            style={{ backgroundImage: `url(${internshipFormImg})` }}
          />

          {/* Left Gradient Overlay for text readability with corporate navy tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102044] via-[#102044]/95 to-transparent pointer-events-none" />

          {/* Form Content on Left Side */}
          <div className="relative z-10 w-full max-w-xl lg:max-w-2xl">
            <div className="mb-6 text-left">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#65C7FF]">
                START YOUR JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-1 mb-1.5 text-white">
                Internship <span className="text-[#65C7FF]">Application Form</span>
              </h2>
              <p className="text-xs sm:text-sm font-normal text-slate-300">
                Fill in your details to apply for the internship program.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-white">Application Submitted Successfully!</h3>
                <p className="text-xs font-medium">Thank you for applying. Our team will review your application and contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      Mobile Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={14}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    />
                  </div>

                  {/* Select Duration */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      Select Duration <span className="text-rose-400">*</span>
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    >
                      <option value="1 Month">1 Month</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                    </select>
                  </div>

                  {/* Select Domain */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      Select Domain <span className="text-rose-400">*</span>
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Cloud & Database Solutions">Cloud & Database Solutions</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="Email Marketing">Email Marketing</option>
                    </select>
                  </div>

                  {/* College / Institute Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                      College / Institute Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Enter your college or institute name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-200">
                    Why do you want to join? <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write a short message..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#071739]/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#65C7FF] transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-lg shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>{loading ? 'Submitting Application...' : 'Submit Application'}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Internship;
