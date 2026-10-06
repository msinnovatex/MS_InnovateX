import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, GraduationCap, Laptop, CheckCircle2, Users, Headphones, ShieldCheck, Zap, HeartHandshake, Play, Star, ChevronRight, Award, Briefcase } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpg';
import officeBg from '../../assets/office.jpg';
import internshipBg from '../../assets/internship-bg.jpg';
import statsBg from '../../assets/stats-bg.jpg';
import whyUsBg from '../../assets/why-us-bg.jpg';
import globeBg from '../../assets/globe-bg.jpg';
import aboutImg from '../../assets/about.jpg';
import logoImg from '../../assets/logo.png';
import mainBg from '../../assets/main-bg.png';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import StatsCounter from '../../components/StatsCounter';

const Home = ({ darkMode }) => {
  return (
    <div 
      className="min-h-screen font-sans bg-cover bg-top bg-no-repeat text-slate-900 dark:text-white transition-colors"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      
      {/* 1. HERO SECTION WITH CRISP BACKGROUND IMAGE & ELEGANT DARK OVERLAY */}
      <section 
        className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-no-repeat bg-cover bg-center border-b border-blue-900/40 text-white"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Crisp Dark Gradient Overlay for Maximum Text Legibility and Image Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/95 via-[#031126]/80 to-[#031126]/45 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl space-y-5">
            
            {/* Small Subtitle Label */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                DIGITAL SOLUTIONS | EMAIL MARKETING | STUDENT INTERNSHIP
              </span>
              <span className="h-0.5 w-10 rounded-full bg-cyan-400"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.14] text-white">
              Building Businesses, <br />
              Growing Talent, <br />
              Creating a <span className="text-cyan-400">Better Tomorrow</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed font-semibold max-w-xl text-slate-200">
              MS InnovateX provides digital solutions, professional email marketing and practical technology training to help businesses grow and students build successful careers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full border-2 border-cyan-400/80 text-cyan-300 hover:bg-cyan-950/40 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Reliable Solutions */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1264FF] via-blue-600 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Reliable Solutions
                </span>
              </div>

              {/* Expert Team */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Expert Team
                </span>
              </div>

              {/* Pan India Support */}
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md bg-[#071936]/80 border border-blue-900/60 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-lg shadow-black/20 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/25 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                  Pan India Support
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS / OUR FOCUS SECTION */}
      <section className={`py-14 lg:py-20 transition-colors ${darkMode ? 'bg-[#061A3A]/80' : 'bg-transparent'}`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
                OUR FOCUS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-1 text-slate-900 dark:text-white">
                Three Pillars for a Brighter <span className="text-[#1264FF] dark:text-cyan-400">Tomorrow</span>
              </h2>
            </div>
            <Link 
              to="/about"
              className="mt-3 md:mt-0 text-xs sm:text-sm font-extrabold text-[#1264FF] dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              Discover How We Create Impact <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: Email Marketing */}
            <div className={`group rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between ${
              darkMode ? 'bg-[#031126] border-blue-900/40 hover:border-cyan-400/50 shadow-lg shadow-black/20' : 'bg-white border-slate-200/80 shadow-md hover:shadow-blue-500/10'
            }`}>
              <div>
                {/* Image Banner Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img 
                    src={globeBg} 
                    alt="Email Marketing Solutions" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031126] via-[#031126]/40 to-transparent opacity-90 dark:opacity-90" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#1264FF]/90 backdrop-blur-md border border-white/20 shadow-md">
                    Digital Outreach
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">Email Marketing</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
                    Reach the right audience, engage customers and grow your business with professional email marketing solutions.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/email-marketing"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Explore Email Marketing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Student Internship */}
            <div className={`group rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between ${
              darkMode ? 'bg-[#031126] border-blue-900/40 hover:border-emerald-400/50 shadow-lg shadow-black/20' : 'bg-white border-slate-200/80 shadow-md hover:shadow-emerald-500/10'
            }`}>
              <div>
                {/* Image Banner Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img 
                    src={internshipBg} 
                    alt="Student Internship & Training" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031126] via-[#031126]/40 to-transparent opacity-90 dark:opacity-90" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald-600/90 backdrop-blur-md border border-white/20 shadow-md">
                    Skill & Career Growth
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">Student Internship</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
                    Learn real-world skills, work on live projects and build your career with expert mentorship and recognized certification.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/internship"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-500/20 transition-all"
                >
                  <span>Explore Internship</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Client Solutions & Support */}
            <div className={`group rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between ${
              darkMode ? 'bg-[#031126] border-blue-900/40 hover:border-purple-400/50 shadow-lg shadow-black/20' : 'bg-white border-slate-200/80 shadow-md hover:shadow-purple-500/10'
            }`}>
              <div>
                {/* Image Banner Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img 
                    src={aboutImg} 
                    alt="Client Solutions & Support" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031126] via-[#031126]/40 to-transparent opacity-90 dark:opacity-90" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-purple-600/90 backdrop-blur-md border border-white/20 shadow-md">
                    Custom Software & Apps
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">Client Solutions & Support</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-2">
                    From websites and mobile apps to custom software and ongoing technical support, we deliver solutions for every business.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-500/20 transition-all"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLIENT SOLUTIONS SERVICES */}
      <Services darkMode={darkMode} />

      {/* 4. ABOUT SECTION */}
      <section 
        className="relative py-16 lg:py-24 bg-cover bg-center border-y border-blue-900/30 text-white"
        style={{ backgroundImage: `url(${officeBg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                ABOUT MS INNOVATEX
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Turning Ideas into <br />
                <span className="text-cyan-300">Real-World Impact</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100 max-w-xl font-normal">
                MS InnovateX is a technology company focused on delivering practical digital solutions, professional email marketing services and industry-focused training programs for students and professionals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Client-Focused Approach</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Innovation & Quality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Affordable & Scalable Solutions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Long-Term Support</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center w-full">
              <div 
                className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/25 shadow-2xl bg-cover bg-center p-6 text-center group transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundImage: `url(${officeBg})` }}
              >
                {/* Overlay Tint for Video Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031126]/95 via-[#031126]/80 to-[#031126]/60 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-400/20 text-cyan-300 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h3 className="text-base font-bold text-white">Watch Our Company Video</h3>
                  <p className="text-xs text-slate-200">See how we work, what we do and our vision for the future.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STATS BANNER WITH AUTO-COUNT & SOLID NAVY BLUE BACKGROUND */}
      <StatsCounter />

      {/* 6. WHY CHOOSE US SECTION - NO BACKGROUND IMAGE */}
      <section className={`py-16 lg:py-20 transition-colors ${
        darkMode ? 'bg-[#031126]/80 text-white' : 'bg-transparent text-slate-900'
      }`}>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
              }`}>
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-1 text-slate-900 dark:text-white">
                Your Trusted <span className="text-[#1264FF] dark:text-cyan-400">Technology Partner</span>
              </h2>
            </div>
            <Link to="/about" className="mt-3 md:mt-0 text-xs sm:text-sm font-extrabold text-[#1264FF] dark:text-cyan-400 hover:underline flex items-center gap-1">
              More About Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl flex items-start gap-4 ${
              darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
            }`}>
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Users className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1 text-slate-900 dark:text-white">Experienced Team</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Skilled professionals with real-world industry experience across multiple verticals.</p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl flex items-start gap-4 ${
              darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
            }`}>
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Zap className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1 text-slate-900 dark:text-white">Practical Solutions</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Tailored software and email strategies engineered for your exact business goals.</p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl flex items-start gap-4 ${
              darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
            }`}>
              <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1 text-slate-900 dark:text-white">End-to-End Support</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">From initial design & development to long-term maintenance and technical helpdesk.</p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl flex items-start gap-4 ${
              darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
            }`}>
              <div className="w-11 h-11 rounded-xl bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <HeartHandshake className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1 text-slate-900 dark:text-white">Growth Focused</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Helping businesses grow revenue and students succeed with hands-on skill development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDENT INTERNSHIP BANNER */}
      <section 
        className="relative py-16 lg:py-24 bg-cover bg-center text-white border-y border-cyan-500/30"
        style={{ backgroundImage: `url(${internshipBg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-xs uppercase tracking-widest border border-cyan-400/30">
              STUDENT INTERNSHIP PROGRAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Learn. Build. Grow with <br />
              <span className="text-cyan-300">Real Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
              Join our industry-focused internship program, work on live client projects, learn from experts and build the skills for a successful career.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-slate-100 py-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <Laptop className="w-3.5 h-3.5 text-cyan-300" />
                <span>Live Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <Users className="w-3.5 h-3.5 text-cyan-300" />
                <span>Expert Mentorship</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-cyan-300" />
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
                <span>Career Guidance</span>
              </div>
            </div>
            
            <div className="pt-1">
              <Link
                to="/internship"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-cyan-50 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Join Internship Program</span>
                <ArrowRight className="w-4 h-4 text-[#1264FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <Contact darkMode={darkMode} />

    </div>
  );
};

export default Home;
