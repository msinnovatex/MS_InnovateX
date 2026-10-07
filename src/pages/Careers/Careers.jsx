import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Lightbulb, Users, TrendingUp, Gem, Search, Code2, 
  Palette, Cpu, Cloud, GraduationCap, Settings, Heart, FileText, 
  MessageSquare, CheckCircle2, ArrowRight, ChevronRight, X,
  Briefcase, Mail, ArrowUpRight, Send, MapPin
} from 'lucide-react';
import careerPicImg from '../../assets/career-pic.png';
import smallMediumBusinessImg from '../../assets/small-medium-business.png';

const Careers = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const topBenefits = [
    {
      title: 'Real Projects',
      desc: 'Work on live client projects',
      icon: Rocket,
      iconBg: 'bg-blue-100 text-[#1769FF] dark:bg-blue-900/60 dark:text-[#65C7FF]'
    },
    {
      title: 'Skill Development',
      desc: 'Learn from industry experts',
      icon: Lightbulb,
      iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-900/60 dark:text-amber-300'
    },
    {
      title: 'Collaborative Culture',
      desc: 'Be part of an innovative team',
      icon: Users,
      iconBg: 'bg-blue-100 text-[#1769FF] dark:bg-blue-900/60 dark:text-[#65C7FF]'
    },
    {
      title: 'Career Growth',
      desc: 'Get continuous growth opportunities',
      icon: TrendingUp,
      iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300'
    },
    {
      title: 'Work-Life Balance',
      desc: 'Flexible and positive work culture',
      icon: Gem,
      iconBg: 'bg-purple-100 text-purple-600 dark:bg-purple-900/60 dark:text-purple-300'
    }
  ];

  const [jobsList, setJobsList] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const base = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
        const res = await fetch(base + '/api/public/careers', { headers: { Accept: 'application/json' } });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Unable to load career openings.');
        if (!cancelled) setJobsList(Array.isArray(data.careers) ? data.careers : []);
      } catch (error) {
        console.error('[Careers]', error);
        if (!cancelled) setJobsList([]);
      } finally {
        if (!cancelled) setJobsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const iconMap = { Code2, Palette, Cpu, Cloud, Briefcase, Settings, Rocket, GraduationCap };
  const normalizedJobs = jobsList.map(job => ({
    ...job,
    icon: iconMap[job.icon] || Briefcase,
    iconBg: job.iconBg || 'bg-blue-500/15 text-[#1769FF] dark:text-[#65C7FF]'
  }));



  const whyWorkUs = [
    {
      title: 'Learning Opportunities',
      desc: 'Work on modern technologies',
      icon: GraduationCap,
      iconBg: 'bg-blue-100 text-[#1769FF] dark:bg-blue-900/60 dark:text-[#65C7FF]'
    },
    {
      title: 'Career Growth',
      desc: 'Clear career path and mentorship',
      icon: TrendingUp,
      iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300'
    },
    {
      title: 'Supportive Team',
      desc: 'Collaborative and friendly work culture',
      icon: Users,
      iconBg: 'bg-blue-100 text-[#1769FF] dark:bg-blue-900/60 dark:text-[#65C7FF]'
    },
    {
      title: 'Modern Tools',
      desc: 'Work with latest technologies',
      icon: Settings,
      iconBg: 'bg-blue-100 text-[#1769FF] dark:bg-blue-900/60 dark:text-[#65C7FF]'
    },
    {
      title: 'Employee Wellbeing',
      desc: 'Flexible hours and healthy environment',
      icon: Heart,
      iconBg: 'bg-rose-100 text-rose-600 dark:bg-rose-900/60 dark:text-rose-300'
    }
  ];

  const hiringSteps = [
    { num: '1', title: 'Apply', desc: 'Submit your application link or CV.', icon: FileText },
    { num: '2', title: 'Shortlisting', desc: 'Our technical team reviews your profile.', icon: Users },
    { num: '3', title: 'Interview', desc: 'Interactive technical & cultural fitment rounds.', icon: MessageSquare },
    { num: '4', title: 'Selection', desc: 'Receive your offer letter and join MS InnovateX.', icon: CheckCircle2 }
  ];

  const filteredJobs = normalizedJobs.filter(job => {
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const scrollToOpenings = () => {
    const el = document.getElementById('openings-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApply = (job) => {
    const targetUrl = job.applyUrl || `mailto:careers@msinnovatex.com?subject=Application for ${encodeURIComponent(job.title)}`;
    if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors ${darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'}`}>
      
      {/* 1. HERO SECTION WITH NO OVERLAY COLOR (SHOWING FULL ORIGINAL BANNER IMAGE CLEANLY) */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${careerPicImg})` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl space-y-3.5 sm:space-y-4">
            
            {/* Tagline Above Breadcrumb */}
            <p className="text-xs sm:text-sm font-extrabold text-[#1769FF] dark:text-[#65C7FF] tracking-wider uppercase">
              Your Career | Your Future | Your Opportunity.
            </p>

            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-[#1769FF] dark:text-[#65C7FF] font-bold text-xs">
              <Link to="/" className="text-slate-600 dark:text-slate-300 font-semibold hover:text-[#1769FF] hover:underline transition-colors">
                Home
              </Link>
              <span className="text-slate-400">&gt;</span>
              <span>Careers</span>
            </div>

            {/* Title in 3 lines */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#102044] dark:text-white">
              Start Your Journey <br />
              Build Your Career with <br />
              <span className="text-[#1769FF] dark:text-[#65C7FF]">MS InnovateX</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-[#536A8A] dark:text-slate-200 leading-relaxed font-normal max-w-lg">
              Join a team where innovation meets opportunity. Work on real projects, learn from industry experts and grow together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={scrollToOpenings}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Openings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:careers@msinnovatex.com?subject=Resume Submission - MS InnovateX"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#1769FF] dark:text-[#65C7FF] bg-white/90 dark:bg-slate-900/90 rounded-xl border border-[#1769FF]/40 hover:bg-[#EAF5FF] transition-all backdrop-blur-sm"
              >
                <Send className="w-4 h-4 text-[#1769FF] dark:text-[#65C7FF]" />
                <span>Send Your Resume</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPACT 5 FEATURE PILLS ROW */}
      <section className="py-6 sm:py-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {topBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${
                  darkMode 
                    ? 'bg-[#061A3A] border-blue-900/50 text-white shadow-md' 
                    : 'bg-white border-blue-100 text-[#102044] shadow-sm shadow-blue-500/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-black mb-1 leading-snug">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CURRENT OPENINGS SECTION */}
      <section id="openings-section" className="py-8 sm:py-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-[#102044] dark:text-white">
              Current <span className="text-[#1769FF] dark:text-[#65C7FF]">Openings</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#536A8A] dark:text-slate-300 font-normal">
              Explore exciting career opportunities and find the right role for you.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vacancies (e.g. Developer, Designer)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-100 dark:border-blue-900/60 bg-white dark:bg-[#061A3A] text-xs sm:text-sm text-[#102044] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
            />
          </div>
        </div>

        {/* Openings List or Empty State */}
        <div className="space-y-4">
          {jobsLoading ? (<div className="text-center py-12 text-sm font-bold text-[#536A8A] dark:text-slate-300">Loading current openings...</div>) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const Icon = job.icon || Briefcase;
              return (
                <div
                  key={job.id}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    darkMode 
                      ? 'bg-[#061A3A] border-blue-900/50 text-white hover:border-[#65C7FF]/40' 
                      : 'bg-white border-blue-100 text-[#102044] shadow-sm hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${job.iconBg || 'bg-blue-100 text-[#1769FF]'} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-black tracking-tight text-[#102044] dark:text-white mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#536A8A] dark:text-slate-300">
                        <span>{job.category}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center shrink-0 pt-2 md:pt-0">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="px-4 py-2 text-xs font-bold text-[#1769FF] dark:text-[#65C7FF] hover:underline"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleApply(job)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md transition-all"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : null}
        </div>

      </section>

      {/* 4. COMPACT WHY WORK WITH US? SECTION */}
      <section className={`py-8 lg:py-10 transition-colors ${
        darkMode ? 'bg-[#061A3A]/60' : 'bg-gradient-to-b from-[#EAF5FF]/60 via-[#F7FBFF] to-[#EAF5FF]/80'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-1 text-[#102044] dark:text-white">
              Why Work <span className="text-[#1769FF] dark:text-[#65C7FF]">With Us?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#536A8A] dark:text-slate-300 font-normal">
              We believe in people, ideas and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {whyWorkUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${
                    darkMode 
                      ? 'bg-[#031126] border-blue-900/50 text-white shadow-md' 
                      : 'bg-white border-blue-100 text-[#102044] shadow-sm shadow-blue-500/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black mb-1">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OUR HIRING PROCESS SECTION WITH PREMIUM ARROW STEPS */}
      <section className="py-12 lg:py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5FF] dark:bg-blue-900/50 text-[#1769FF] dark:text-[#65C7FF] font-bold text-xs mb-3">
            <span>Simple & Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-[#102044] dark:text-white">
            Our <span className="text-[#1769FF] dark:text-[#65C7FF]">Hiring Process</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#536A8A] dark:text-slate-300 font-normal">
            A smooth 4-step journey to join our team at MS InnovateX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hiringSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === hiringSteps.length - 1;
            return (
              <div key={idx} className="relative group">
                <div 
                  className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center relative z-10 ${
                    darkMode 
                      ? 'bg-[#061A3A] border-blue-900/60 text-white shadow-xl hover:border-[#65C7FF]/60 hover:shadow-blue-500/10' 
                      : 'bg-white border-blue-100 text-[#102044] shadow-md shadow-blue-500/5 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3.5 px-3.5 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-gradient-to-r from-[#1769FF] to-[#65C7FF] text-white shadow-md">
                    Step 0{step.num}
                  </div>

                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-950 dark:text-[#65C7FF] border border-blue-200/50 dark:border-blue-800/60 flex items-center justify-center mb-4 mt-2 shadow-inner group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-base font-black mb-2 text-[#102044] dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector between steps for Large Screens */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#1769FF] text-white items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-5 h-5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER (DECREASED SIZE) */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-6">
        <div 
          className="relative rounded-2xl overflow-hidden bg-cover bg-center text-white p-6 sm:p-8 lg:p-10 border border-blue-900/40 shadow-xl min-h-[220px] sm:min-h-[260px] flex items-center"
          style={{ backgroundImage: `url(${smallMediumBusinessImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#102044]/95 via-[#102044]/85 to-[#1769FF]/40 pointer-events-none" />

          <div className="relative z-10 max-w-xl space-y-3 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
              Ready to Grow <br />
              <span className="text-[#65C7FF]">Your Career</span> with Us?
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-lg">
              Explore opportunities, work on real projects and be part of a team that values innovation and learning.
            </p>

            <div className="pt-1">
              <button
                onClick={scrollToOpenings}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JOB DETAILS MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white dark:bg-[#061A3A] border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl text-left relative space-y-5 text-[#102044] dark:text-white max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Icon & Title */}
            <div className="flex items-start gap-4 pr-8">
              {selectedJob.icon && (
                <div className={`w-12 h-12 rounded-2xl ${selectedJob.iconBg || 'bg-blue-100 text-[#1769FF]'} flex items-center justify-center shrink-0 shadow-sm`}>
                  <selectedJob.icon className="w-6 h-6" />
                </div>
              )}
              <div>
                <h3 className="text-xl sm:text-2xl font-black leading-snug">{selectedJob.title}</h3>
                <p className="text-xs text-[#536A8A] dark:text-slate-300 font-medium">Position ID: {selectedJob.id}</p>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold">
              <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-[#1769FF] dark:text-[#65C7FF] border border-blue-200/60 dark:border-blue-800/60">
                {selectedJob.category}
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                {selectedJob.type}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/60">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> {selectedJob.location}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                <Briefcase className="w-3.5 h-3.5 shrink-0" /> Experience: {selectedJob.experience}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-blue-900/50">
              <h4 className="text-xs font-black uppercase text-[#536A8A] dark:text-slate-400 tracking-wider">
                Role Description & Requirements
              </h4>
              <p className="text-xs sm:text-sm text-[#536A8A] dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                {selectedJob.details}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-blue-900/50">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 text-xs font-bold text-[#536A8A] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const job = selectedJob;
                  setSelectedJob(null);
                  handleApply(job);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md transition-all"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
