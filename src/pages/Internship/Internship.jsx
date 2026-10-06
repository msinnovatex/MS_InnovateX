import React, { useState } from 'react';
import { 
  GraduationCap, Laptop, Award, Briefcase, CheckCircle2, ArrowRight,
  Code2, Terminal, Cpu, Database, Layout, Sparkles, ChevronDown, ChevronUp,
  FileCheck, UserCheck, Calendar, BookOpen, Clock, Users, HelpCircle, Send,
  Star, Phone, Mail, MapPin, Globe
} from 'lucide-react';
import internshipBg from '../../assets/internship-bg.jpg';
import waveBg from '../../assets/wave-bg.jpg';
import cityBg from '../../assets/city-bg.jpg';
import statsBg from '../../assets/stats-bg.jpg';
import heroBg from '../../assets/hero-bg.jpg';
import './Internship.css';

const Internship = ({ darkMode }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    qualification: 'B.Tech / BE',
    domain: 'Full Stack Web Development',
    duration: '3 Months Industrial Training',
    message: ''
  });

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const apiBase = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/submissions/internship`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Unable to submit registration.');
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: '', email: '', phone: '', college: '',
          qualification: 'B.Tech / BE',
          domain: 'Full Stack Web Development',
          duration: '3 Months Industrial Training',
          message: ''
        });
      }, 4000);
    } catch (err) {
      alert(err.message || 'Unable to submit registration.');
    } finally {
      setLoading(false);
    }
  };

  const courses = [
    { title: 'Full Stack Web Development', tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'], duration: '8-12 Weeks', icon: Code2, desc: 'Master front-end & back-end web development with real-world MERN stack projects.' },
    { title: 'Android & Mobile App Development', tech: ['Flutter', 'Dart', 'React Native', 'Firebase API'], duration: '8-12 Weeks', icon: Terminal, desc: 'Build cross-platform mobile apps for Android devices with modern UI components.' },
    { title: 'Data Science & AI / Automation', tech: ['Python', 'Pandas', 'Scikit-Learn', 'OpenAI APIs', 'Streamlit'], duration: '10-12 Weeks', icon: Cpu, desc: 'Learn data analysis, machine learning algorithms and AI automation workflows.' },
    { title: 'Cloud & Database Infrastructure', tech: ['AWS', 'Docker', 'PostgreSQL', 'SQL', 'Git / GitHub'], duration: '8-12 Weeks', icon: Database, desc: 'Deploy scalable applications on cloud servers with automated CI/CD pipelines.' },
    { title: 'UI/UX & Product Design', tech: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'], duration: '6-8 Weeks', icon: Layout, desc: 'Design beautiful, accessible user interfaces and wireframes for tech products.' },
    { title: 'Software Testing & QA', tech: ['Selenium', 'Jest', 'Postman', 'API Testing'], duration: '6-8 Weeks', icon: CheckCircle2, desc: 'Learn automated and manual software testing to ensure enterprise code quality.' }
  ];

  const learningMethods = [
    { title: 'Live Industry Projects', desc: 'No theoretical filler. Work directly on production-grade client codebases.', icon: Laptop },
    { title: '1-on-1 Senior Mentorship', desc: 'Get personal guidance and code reviews from experienced software architects.', icon: Users },
    { title: 'Hands-on Coding Labs', desc: 'Solve real algorithmic challenges, build components and push code to GitHub.', icon: Code2 },
    { title: 'Portfolio & Project Showcase', desc: 'Graduates leave with 2+ complete live projects to showcase on their resume.', icon: Briefcase }
  ];

  const processSteps = [
    { step: '01', title: 'Online Registration', desc: 'Fill out the student application form with your academic details and interest area.' },
    { step: '02', title: 'Screening & Discussion', desc: 'Short 15-min tech interaction with our program coordinator.' },
    { step: '03', title: 'Domain Selection & Setup', desc: 'Get enrolled in your chosen tech track and access development tools.' },
    { step: '04', title: 'Practical Training & Live Work', desc: 'Work on live project tasks alongside senior developer mentors.' },
    { step: '05', title: 'Code Evaluation', desc: 'Submit your completed project for code review and quality checks.' },
    { step: '06', title: 'Certification & Placement Support', desc: 'Receive your verified Certificate of Completion and career referral support.' }
  ];

  const availablePrograms = [
    { title: 'Short-Term Summer / Winter Internship', duration: '4 - 6 Weeks', target: 'B.Tech / BCA / MCA Students looking for semester credit training.', features: ['Live Project Training', 'Flexible Online / Hybrid Hours', 'Verified Certificate', 'GitHub Portfolio Setup'] },
    { title: '3-Month Industrial Training', duration: '12 Weeks', target: 'Final year engineering students & recent graduates.', features: ['End-to-End Project Development', '1-on-1 Mentor Code Reviews', 'Verified Internship Certificate', 'Resume & Interview Prep'] },
    { title: '6-Month Full Launchpad Program', duration: '24 Weeks', target: 'Career changers and freshers seeking job readiness.', features: ['Multiple Production Projects', 'Direct Placement Assistance', 'Mock Interviews with Tech Leads', 'Letter of Recommendation'] }
  ];

  const faqs = [
    { q: 'Is the MS InnovateX Internship available online?', a: 'Yes, we offer both flexible remote online internships as well as hybrid options depending on your location and college requirement.' },
    { q: 'Will I get an official Internship Certificate?', a: 'Absolutely! Upon successful completion of your live project, you will receive a verified Internship Completion Certificate and Letter of Recommendation for top performers.' },
    { q: 'Who is eligible to apply for this internship program?', a: 'Students pursuing B.Tech, BE, BCA, MCA, BSc CS/IT, Diploma in Engineering, or recent graduates who want practical hands-on software development skills.' },
    { q: 'Do I need prior advanced coding experience?', a: 'Basic knowledge of programming fundamentals is helpful. Our mentors guide you step-by-step from foundational concepts to building full-fledged live applications.' },
    { q: 'How do I apply for the program?', a: 'Simply fill out the Student Registration / Enquiry form below on this page. Our admissions coordinator will reach out to you within 24 hours.' }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#031126] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* 1. INTERNSHIP HERO WITH FULL SECTION BACKGROUND IMAGE */}
      <section 
        className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center border-b border-blue-900/40 text-white"
        style={{ backgroundImage: `url(${internshipBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A] via-[#061A3A]/95 to-[#061A3A]/75" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-extrabold text-xs uppercase tracking-widest backdrop-blur-md">
                <GraduationCap className="w-4 h-4" />
                <span>INTERNSHIP & TRAINING PROGRAM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Learn. Build. Grow. <br />
                Shape Your Future with <br />
                <span className="text-cyan-300">Real-World Projects</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Join our industry-focused technology internship program. Work on live client projects, receive 1-on-1 mentorship, and earn an industry-recognized certificate to launch your software career.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#registration-form"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-cyan-50 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <span>Apply For Internship</span>
                  <ArrowRight className="w-5 h-5 text-[#1264FF]" />
                </a>

                <a
                  href="#courses"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-cyan-300 rounded-full border-2 border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                >
                  <span>View Programs</span>
                </a>
              </div>

              {/* Stat Counters */}
              <div className="pt-8 grid grid-cols-4 gap-4 border-t border-blue-800/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">500+</div>
                  <div className="text-xs text-slate-300 font-extrabold mt-0.5">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">100%</div>
                  <div className="text-xs text-slate-300 font-extrabold mt-0.5">Practical Code</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">1-on-1</div>
                  <div className="text-xs text-slate-300 font-extrabold mt-0.5">Mentorship</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">100%</div>
                  <div className="text-xs text-slate-300 font-extrabold mt-0.5">Verified Cert</div>
                </div>
              </div>

            </div>

            {/* Right Side Quote */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-end text-right">
              <div className="p-6 rounded-3xl bg-[#031126]/80 backdrop-blur-md border border-cyan-400/30 shadow-2xl space-y-2">
                <Award className="w-10 h-10 text-cyan-300 ml-auto" />
                <h4 className="text-base font-extrabold text-white">Government & Industry Recognized</h4>
                <p className="text-xs text-slate-300">Hands-on practical development skills for BCA, MCA & B.Tech students.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT INTERNSHIP PROGRAM WITH FULL BACKGROUND */}
      <section 
        className="relative py-20 lg:py-24 bg-cover bg-center border-b border-blue-900/40 text-white"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        <div className="absolute inset-0 bg-[#031126]/92 backdrop-blur-xs" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400">
                ABOUT THE INTERNSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Bridge the Gap Between <br />
                <span className="text-cyan-300">Academics & IT Industry</span>
              </h2>
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                Traditional college curricula often focus heavily on theory. At MS InnovateX, our internship program provides students with real hands-on experience, modern tech stacks, version control workflows, and production coding practices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold">Real Live Client Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold">Senior Developer Code Reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold">Git & GitHub Version Control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold">Resume & Placement Guidance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#061A3A]/90 border border-cyan-400/30 shadow-xl space-y-4">
                <h3 className="text-xl font-black flex items-center gap-3 text-cyan-300">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  What You Will Gain
                </h3>
                <ul className="space-y-4 text-sm font-semibold text-slate-200">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                    <span>Practical experience building modern full-stack websites and mobile applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                    <span>Understanding of Agile development methodology, daily standups, and team collaboration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                    <span>Verified Internship Completion Certificate with project credentials to highlight on LinkedIn.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COURSES / TECHNOLOGY TRAINING */}
      <section id="courses" className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              AVAILABLE TRACKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              Technology Training Domains
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Choose your domain of interest and build real production projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border internship-card-hover transition-all ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-[#1264FF] dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-blue-950 text-slate-600 dark:text-cyan-300 text-xs font-extrabold">
                      {c.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-extrabold mb-2 text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{c.desc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-blue-900/40">
                    {c.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 text-[11px] font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEARNING METHOD */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#061A3A]' : 'bg-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              How You Will Learn & Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningMethods.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border ${
                    darkMode ? 'bg-[#031126] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold mb-2 text-slate-900 dark:text-white">{m.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL PROJECTS & MENTORSHIP & CERTIFICATE */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-slate-50 border-slate-200/80'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="w-8 h-8 text-[#1264FF] dark:text-cyan-400" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Practical Projects & Mentorship</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Work on real client projects under the supervision of senior developers. Get weekly code reviews, refactoring advice, and architectural feedback.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real industry codebases with modern REST APIs</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1-on-1 code reviews and debugging support</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Git commit standards and pull request workflows</span>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-slate-50 border-slate-200/80'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-emerald-500" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Certificate & Career Guidance</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Receive an official, verifiable Internship Certificate and Letter of Recommendation upon program completion, paired with resume & interview preparation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>ISO & Industry verified certificate of completion</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Resume building & ATS keyword optimization</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Mock interviews with technical leads</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. INTERNSHIP PROCESS WITH FULL BACKGROUND */}
      <section 
        className="relative py-20 lg:py-28 bg-cover bg-center text-white border-y border-blue-900/50"
        style={{ backgroundImage: `url(${waveBg})` }}
      >
        <div className="absolute inset-0 bg-[#061A3A]/90 backdrop-blur-xs" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400">
              STEP-BY-STEP ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-white">
              Our 6-Step Internship Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-[#031126]/90 p-6 rounded-2xl border border-blue-900/60 flex flex-col items-center text-center shadow-xl">
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-900 font-black text-sm flex items-center justify-center mb-4 shadow-lg">
                  {p.step}
                </div>
                <h3 className="text-sm font-extrabold mb-2 text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. AVAILABLE PROGRAMS */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              PROGRAM DURATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              Available Training Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availablePrograms.map((prog, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col justify-between ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-black mb-4">
                    {prog.duration}
                  </div>
                  <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-white">{prog.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{prog.target}</p>

                  <ul className="space-y-3 mb-8">
                    {prog.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#registration-form"
                  className="w-full py-3 px-6 text-center text-xs font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-md transition-all"
                >
                  Enroll In This Program →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. STUDENT REGISTRATION / ENQUIRY FORM WITH FULL BACKGROUND IMAGE */}
      <section 
        id="registration-form" 
        className="relative py-20 lg:py-28 bg-cover bg-center text-white border-t border-cyan-500/30"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A] via-[#061A3A]/95 to-[#061A3A]/85" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-xs uppercase tracking-widest border border-cyan-400/30">
                START YOUR APPLICATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Apply for MS InnovateX <span className="text-cyan-300">Internship</span>
              </h2>
              <p className="text-base text-slate-200">
                Fill out the registration form below. Our admissions team will get in touch with program details and onboarding steps.
              </p>

              <div className="space-y-4 pt-4 border-t border-blue-900/60 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Helpline: +91 9090625821</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email: msinnovatex@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Location: Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleRegistrationSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#031126]/95 border border-cyan-400/30 shadow-2xl space-y-4">
                <h3 className="text-lg font-extrabold text-white">Student Registration Form</h3>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-bold">
                    Success! Your internship registration has been received. We will contact you shortly.
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
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 text-sm font-bold text-slate-900 bg-cyan-300 hover:bg-cyan-200 rounded-xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Registration Form →'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-slate-50'}`}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between font-extrabold text-sm text-slate-900 dark:text-white">
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
                {activeFaq === idx && (
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t pt-3 border-slate-100 dark:border-blue-900/40">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INTERNSHIP CTA WITH FULL SECTION BACKGROUND IMAGE */}
      <section 
        className="relative py-20 bg-cover bg-center text-white text-center border-t border-blue-900/50"
        style={{ backgroundImage: `url(${statsBg})` }}
      >
        <div className="absolute inset-0 bg-[#061A3A]/90" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Build Your Tech Career?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">
            Join hundreds of successful engineering and computer science students who launched their careers with MS InnovateX.
          </p>
          <a
            href="#registration-form"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-cyan-50 rounded-full shadow-xl transition-all"
          >
            <span>Join Internship Program</span>
            <ArrowRight className="w-5 h-5 text-[#1264FF]" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Internship;
