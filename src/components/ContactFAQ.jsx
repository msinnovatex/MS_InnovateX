import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone, MessageSquare, ShieldCheck, Clock, FileText } from 'lucide-react';

const ContactFAQ = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for immediate preview

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      icon: Clock,
      question: "How quickly will MS InnovateX respond to my message?",
      answer: "Our dedicated technical and client success teams respond to all form submissions and email inquiries within 24 business hours. If you have an urgent or time-sensitive request, you can reach us directly via phone or WhatsApp at +91 9090625821."
    },
    {
      icon: FileText,
      question: "What information should I include when requesting a quote?",
      answer: "To help us provide an accurate estimate and project roadmap, please mention your core project goals, expected deliverables, preferred technology stack (if any), target timeline, and budget range. We will prepare a detailed proposal tailored to your needs."
    },
    {
      icon: ShieldCheck,
      question: "Can we sign a Non-Disclosure Agreement (NDA) before sharing details?",
      answer: "Yes, absolutely. We prioritize IP protection and data confidentiality. We are happy to sign a mutual or unilateral Non-Disclosure Agreement (NDA) before reviewing proprietary business logic, wireframes, or source code."
    },
    {
      icon: MessageSquare,
      question: "Do you offer free technical consultation discovery calls?",
      answer: "Yes! We offer a free 30-minute introductory discovery session with our senior solution architects to discuss your technical requirements, architectural feasibility, and project milestones."
    },
    {
      icon: HelpCircle,
      question: "How do I apply for Student Internship or Career opportunities?",
      answer: "For internship applications, please visit our Internship page or apply directly via the Internship Application form. For full-time or contract career roles, navigate to our Careers page or email your resume to msinnovatex@gmail.com."
    },
    {
      icon: Mail,
      question: "Do you work with international clients across different time zones?",
      answer: "Yes, MS InnovateX serves clients globally across North America, Europe, the Middle East, and Asia-Pacific. We establish flexible communication channels (Slack, Teams, Zoom) and overlapping working hours to ensure seamless sync."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 transition-colors relative border-t ${
      darkMode ? 'bg-[#031126] border-blue-900/40 text-white' : 'bg-[#F7FBFF] border-blue-100 text-[#102044]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#1769FF]/10 text-[#1769FF] dark:bg-cyan-400/10 dark:text-cyan-400 mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
            Frequently Asked <span className="text-[#1769FF] dark:text-cyan-400">Questions</span>
          </h2>
          <p className={`text-base font-medium ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
            Find quick answers to common questions about contacting our team, scheduling discovery calls, project quotes, and NDAs.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#061A3A] border-cyan-400/60 shadow-lg shadow-cyan-950/20'
                      : 'bg-white border-[#1769FF] shadow-md shadow-blue-500/10'
                    : darkMode
                      ? 'bg-[#061A3A]/60 border-blue-900/50 hover:border-blue-700/60'
                      : 'bg-white border-slate-200/80 hover:border-blue-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#1769FF] text-white shadow-md'
                        : darkMode
                          ? 'bg-blue-900/40 text-cyan-400 group-hover:bg-[#1769FF] group-hover:text-white'
                          : 'bg-[#EAF5FF] text-[#1769FF] group-hover:bg-[#1769FF] group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold text-base sm:text-lg transition-colors ${
                      isOpen
                        ? darkMode ? 'text-cyan-300' : 'text-[#1769FF]'
                        : darkMode ? 'text-white' : 'text-[#102044]'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#1769FF]/10 text-[#1769FF] dark:bg-cyan-400/10 dark:text-cyan-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-blue-900/30 text-slate-600 dark:text-slate-300 animate-fadeIn">
                    <p className="ml-14">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className={`mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border text-center relative overflow-hidden ${
          darkMode ? 'bg-gradient-to-r from-[#061A3A] to-[#031126] border-blue-900/60' : 'bg-gradient-to-r from-[#EAF5FF] to-[#F7FBFF] border-blue-200/80 shadow-sm'
        }`}>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <h3 className={`text-lg sm:text-xl font-extrabold ${darkMode ? 'text-white' : 'text-[#102044]'}`}>
                Still have unanswered questions?
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-[#536A8A]'}`}>
                We're here to help! Get in touch with our support team directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="mailto:msinnovatex@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1769FF] hover:bg-[#2F8FFF] shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+919090625821"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white hover:bg-slate-50 text-[#102044] border border-slate-200 shadow-sm'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 9090625821</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;
