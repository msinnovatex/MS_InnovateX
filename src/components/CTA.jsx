import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, User, Send, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`Contact Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Full Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@msinnovatex.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative bg-cta-section py-16 lg:py-20 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/90 to-[#030914]/70 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Area (55% width) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
              <MessageSquare className="w-3.5 h-3.5" />
              Start a Conversation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Great Together
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
              Have a project in mind? Let's turn your idea into a practical, scalable, and high-performance digital solution.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="mailto:msinnovatex@gmail.com"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07132b]/90 border border-cyan-500/25 text-slate-100 text-xs sm:text-sm font-semibold hover:border-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>msinnovatex@gmail.com</span>
              </a>

              <a 
                href="mailto:info@msinnovatex.com"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07132b]/90 border border-cyan-500/25 text-slate-100 text-xs sm:text-sm font-semibold hover:border-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@msinnovatex.com</span>
              </a>

              <a 
                href="tel:+919090625821"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07132b]/90 border border-cyan-500/25 text-slate-100 text-xs sm:text-sm font-semibold hover:border-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 9090625821</span>
              </a>

              <a 
                href="tel:+916371485412"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07132b]/90 border border-cyan-500/25 text-slate-100 text-xs sm:text-sm font-semibold hover:border-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 6371485412</span>
              </a>
            </div>

          </div>

          {/* Right Content Area (45% width) - Contact Us Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#07132b]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80">
              
              {/* Center-aligned 'Contact Us' Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 text-center">
                Contact Us
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-400 text-center space-y-3 animate-fade-in-up">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">Thank you for reaching out. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#030914]/80 border border-cyan-500/25 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#030914]/80 border border-cyan-500/25 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#030914]/80 border border-cyan-500/25 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
