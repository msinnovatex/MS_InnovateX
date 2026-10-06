import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Code2, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const Careers = ({ darkMode }) => {
  const positions = [
    {
      title: 'Senior Full Stack Developer (React & Node)',
      type: 'Full Time',
      location: 'Bhubaneswar, Odisha / Remote',
      experience: '2-4 Years',
      desc: 'Build scalable web applications and enterprise portals using React.js, Tailwind, Node.js and PostgreSQL.'
    },
    {
      title: 'Email Marketing Specialist',
      type: 'Full Time',
      location: 'Bhubaneswar / Hybrid',
      experience: '1-3 Years',
      desc: 'Manage email campaigns, automated newsletters, HTML email template design and client subscriber lists.'
    },
    {
      title: 'Technical Mentor & Trainer (Internships)',
      type: 'Full Time / Part Time',
      location: 'Bhubaneswar, Odisha',
      experience: '2+ Years',
      desc: 'Mentor engineering & MCA interns, guide them on live projects, conduct code reviews, and deliver practical workshops.'
    }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#031126] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* Careers Header */}
      <section className="py-16 lg:py-24 bg-[#061A3A] text-white border-b border-blue-900/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-xs uppercase tracking-widest mb-4">
            CAREERS AT MS INNOVATEX
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Join Our Growing Tech & Training Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            We are looking for passionate developers, email marketers, UI designers, and mentors who want to build great digital products and empower student talent.
          </p>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black mb-8 text-center">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {positions.map((pos, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-slate-50 border-slate-200/80 shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-[#1264FF] dark:text-cyan-400 text-xs font-bold">
                    {pos.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{pos.experience}</span>
                </div>
                <h3 className="text-xl font-black mb-2">{pos.title}</h3>
                <div className="text-xs font-semibold text-cyan-500 mb-4">{pos.location}</div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pos.desc}
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-md transition-all"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Careers;
