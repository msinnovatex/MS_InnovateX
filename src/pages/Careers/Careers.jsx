import React, { useState } from 'react';
import { 
  Rocket, Lightbulb, Users, TrendingUp, Gem, Search, Code2, 
  Palette, Cpu, Cloud, GraduationCap, Settings, Heart, FileText, 
  MessageSquare, CheckCircle2, ArrowRight, ChevronRight, X
} from 'lucide-react';
import careerPicImg from '../../assets/career-pic.png';
import cityBgImg from '../../assets/city-bg.jpg';

const Careers = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });

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

  const categories = ['All', 'Development', 'Design', 'AI & Data', 'Cloud', 'Support', 'Internship'];

  const jobsList = [
    {
      id: 'full-stack-dev',
      title: 'Full Stack Developer',
      category: 'Development',
      type: 'Full Time',
      location: 'Bhubaneswar (On-site/Hybrid)',
      experience: '2-4 Years',
      icon: Code2,
      iconBg: 'bg-blue-500/15 text-[#1769FF] dark:text-[#65C7FF]',
      details: 'We are looking for a skilled Full Stack Developer experienced in React.js, Node.js, and PostgreSQL to design and build high-performance web applications.'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      category: 'Design',
      type: 'Full Time',
      location: 'Bhubaneswar (On-site/Hybrid)',
      experience: '1-3 Years',
      icon: Palette,
      iconBg: 'bg-purple-500/15 text-purple-600 dark:text-purple-400',
      details: 'Craft user-centered visual designs, interactive wireframes, and responsive prototypes using Figma and Adobe Creative Suite.'
    },
    {
      id: 'ai-automation-intern',
      title: 'AI & Automation Intern',
      category: 'Internship',
      type: '1 Month / 3 Months / 6 Months',
      location: 'Remote/Hybrid',
      experience: 'Freshers / Students',
      icon: Cpu,
      iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
      details: 'Work with AI chatbots, process automation tools, Python scripts, and machine learning pipelines under expert tech mentorship.'
    },
    {
      id: 'cloud-db-dev',
      title: 'Cloud & Database Developer',
      category: 'Cloud',
      type: 'Full Time',
      location: 'Bhubaneswar (On-site/Hybrid)',
      experience: '2+ Years',
      icon: Cloud,
      iconBg: 'bg-blue-500/15 text-[#1769FF] dark:text-[#65C7FF]',
      details: 'Manage AWS/Azure cloud deployments, database optimization, CI/CD pipelines, and server backup infrastructure.'
    }
  ];

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
    { num: '1', title: 'Apply', desc: 'Submit your application through our career page.', icon: FileText },
    { num: '2', title: 'Shortlisting', desc: 'Our team reviews your profile.', icon: Users },
    { num: '3', title: 'Interview', desc: 'Technical & HR rounds.', icon: MessageSquare },
    { num: '4', title: 'Selection', desc: 'Receive your offer and join our team.', icon: CheckCircle2 }
  ];

  const filteredJobs = jobsList.filter(job => {
    const matchesCat = activeCategory === 'All' || job.category === activeCategory || (activeCategory === 'AI & Data' && job.category === 'AI & Data');
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const scrollToOpenings = () => {
    const el = document.getElementById('openings-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplyModalJob(null);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors ${darkMode ? 'bg-[#031126] text-white' : 'bg-[#F7FBFF] text-[#102044]'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-[#EAF5FF]/80 via-[#F7FBFF] to-[#F7FBFF] dark:from-[#061A3A]/80 dark:via-[#031126] dark:to-[#031126]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF5FF] dark:bg-blue-900/50 border border-[#65C7FF]/40 text-[#1769FF] dark:text-[#65C7FF] font-extrabold text-xs sm:text-sm">
                <span>Careers at MS InnovateX</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#102044] dark:text-white">
                Build Your Career <br />
                with <span className="text-[#1769FF] dark:text-[#65C7FF]">MS InnovateX</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#536A8A] dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                Be part of our growing team and work on real projects that create value. Learn, innovate and grow together in a supportive and dynamic environment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToOpenings}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={scrollToOpenings}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-[#1769FF] dark:text-[#65C7FF] bg-white dark:bg-blue-950/60 rounded-xl border border-[#1769FF]/40 hover:bg-[#EAF5FF] transition-all"
                >
                  <span>Life at MS InnovateX</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-blue-900/40">
                <img 
                  src={careerPicImg} 
                  alt="Team collaborating at MS InnovateX" 
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                
                {/* Floating Handwritten Style Badge Top-Right */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-[#061A3A]/90 backdrop-blur-md p-4 rounded-2xl border border-blue-100 dark:border-blue-900/50 shadow-xl max-w-[200px] text-left">
                  <p className="text-sm sm:text-base font-black text-[#1769FF] dark:text-[#65C7FF] leading-snug">
                    Grow <br />
                    Learn <br />
                    Innovate <br />
                    Together <span className="text-xl">~</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 FEATURE PILLS ROW */}
      <section className="py-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {topBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${
                  darkMode 
                    ? 'bg-[#061A3A] border-blue-900/50 text-white shadow-lg' 
                    : 'bg-white border-blue-100 text-[#102044] shadow-md shadow-blue-500/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-black mb-1 leading-snug">{item.title}</h3>
                <p className="text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CURRENT OPENINGS SECTION */}
      <section id="openings-section" className="py-14 lg:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-[#102044] dark:text-white">
              Current <span className="text-[#1769FF] dark:text-[#65C7FF]">Openings</span>
            </h2>
            <p className="text-sm text-[#536A8A] dark:text-slate-300 font-normal">
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
              placeholder="Search jobs (e.g. Developer, Designer)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-100 dark:border-blue-900/60 bg-white dark:bg-[#061A3A] text-xs sm:text-sm text-[#102044] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 overflow-x-auto pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1769FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#EAF5FF] dark:bg-blue-950/60 text-[#536A8A] dark:text-slate-300 hover:bg-[#1769FF]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Openings List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const Icon = job.icon;
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
                    <div className={`w-12 h-12 rounded-2xl ${job.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
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
                      onClick={() => setApplyModalJob(job)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md transition-all"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 p-8 rounded-3xl border border-dashed border-slate-300 dark:border-blue-900/50">
              <p className="text-sm font-semibold text-[#536A8A] dark:text-slate-300">No positions found matching your filter criteria.</p>
            </div>
          )}
        </div>

      </section>

      {/* 4. WHY WORK WITH US? SECTION */}
      <section className={`py-14 lg:py-20 transition-colors ${
        darkMode ? 'bg-[#061A3A]/60' : 'bg-gradient-to-b from-[#EAF5FF]/60 via-[#F7FBFF] to-[#EAF5FF]/80'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-[#102044] dark:text-white">
              Why Work <span className="text-[#1769FF] dark:text-[#65C7FF]">With Us?</span>
            </h2>
            <p className="text-sm text-[#536A8A] dark:text-slate-300 font-normal">
              We believe in people, ideas and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {whyWorkUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${
                    darkMode 
                      ? 'bg-[#031126] border-blue-900/50 text-white shadow-lg' 
                      : 'bg-white border-blue-100 text-[#102044] shadow-md shadow-blue-500/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-black mb-1">{item.title}</h3>
                  <p className="text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. OUR HIRING PROCESS SECTION */}
      <section className="py-14 lg:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-[#102044] dark:text-white">
            Our <span className="text-[#1769FF] dark:text-[#65C7FF]">Hiring Process</span>
          </h2>
          <p className="text-sm text-[#536A8A] dark:text-slate-300 font-normal">
            A simple and transparent process to join our team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hiringSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === hiringSteps.length - 1;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className={`w-14 h-14 rounded-2xl bg-[#EAF5FF] text-[#1769FF] dark:bg-blue-900/50 dark:text-[#65C7FF] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-black mb-1 text-[#102044] dark:text-white">
                  {step.num}. {step.title}
                </h3>
                <p className="text-xs text-[#536A8A] dark:text-slate-300 font-normal leading-relaxed max-w-xs">
                  {step.desc}
                </p>

                {/* Arrow connector for desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-7 -right-4 z-10 text-[#1769FF] dark:text-[#65C7FF]">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 6. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-12">
        <div 
          className="relative rounded-3xl overflow-hidden bg-cover bg-center text-white p-8 sm:p-12 lg:p-16 border border-blue-900/40 shadow-2xl min-h-[380px] flex items-center"
          style={{ backgroundImage: `url(${cityBgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#102044]/95 via-[#102044]/80 to-[#1769FF]/40 pointer-events-none" />

          <div className="relative z-10 max-w-xl space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Ready to Grow <br />
              <span className="text-[#65C7FF]">Your Career</span> with Us?
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal">
              Explore opportunities, work on real projects and be part of a team that values innovation and learning.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToOpenings}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JOB DETAILS MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#061A3A] border border-blue-100 dark:border-blue-900/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-left relative space-y-4 text-[#102044] dark:text-white">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-black">{selectedJob.title}</h3>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-[#1769FF] dark:text-[#65C7FF]">
              <span className="px-3 py-1 rounded-full bg-[#EAF5FF] dark:bg-blue-900/50">{selectedJob.category}</span>
              <span className="px-3 py-1 rounded-full bg-[#EAF5FF] dark:bg-blue-900/50">{selectedJob.type}</span>
              <span className="px-3 py-1 rounded-full bg-[#EAF5FF] dark:bg-blue-900/50">{selectedJob.location}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#536A8A] dark:text-slate-300 leading-relaxed font-normal">
              {selectedJob.details}
            </p>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 text-xs font-bold text-[#536A8A] dark:text-slate-300 hover:underline"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const job = selectedJob;
                  setSelectedJob(null);
                  setApplyModalJob(job);
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md"
              >
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APPLY NOW FORM MODAL */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#061A3A] border border-blue-100 dark:border-blue-900/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-left relative space-y-4 text-[#102044] dark:text-white">
            <button 
              onClick={() => setApplyModalJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black">Apply for {applyModalJob.title}</h3>
            <p className="text-xs text-[#536A8A] dark:text-slate-300">Submit your details to apply for this role.</p>

            {formSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 mx-auto" />
                <h4 className="font-bold text-sm">Application Sent Successfully!</h4>
                <p className="text-xs">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.fullName} 
                    onChange={e => setFormData({...formData, fullName: e.target.value.replace(/[0-9]/g, '')})} 
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-blue-900/60 bg-slate-50 dark:bg-[#031126] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    placeholder="Your email address"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-blue-900/60 bg-slate-50 dark:bg-[#031126] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Mobile Number *</label>
                  <input 
                    type="tel" 
                    required 
                    maxLength={14}
                    value={formData.phone} 
                    onChange={e => {
                      let digits = e.target.value.replace(/\D/g, '');
                      if (digits.startsWith('91')) digits = digits.slice(2);
                      digits = digits.slice(0, 10);
                      setFormData({...formData, phone: digits ? `+91 ${digits}` : ''});
                    }} 
                    placeholder="Enter mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-blue-900/60 bg-slate-50 dark:bg-[#031126] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Short Message / Cover Note *</label>
                  <textarea 
                    rows="3" 
                    required 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    placeholder="Tell us about yourself..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-blue-900/60 bg-slate-50 dark:bg-[#031126] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-bold text-white bg-[#1769FF] hover:bg-[#2F8FFF] rounded-xl shadow-md transition-all mt-2"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
