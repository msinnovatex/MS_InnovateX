import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, MessageSquare, AlertCircle, SendHorizontal } from 'lucide-react';
import globeBg from '../assets/globe-bg.jpg';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const apiBase = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/submissions/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Unable to send your message.');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Unable to send your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`relative py-16 lg:py-24 transition-colors ${
      darkMode ? 'bg-[#031126]/80 text-white' : 'bg-transparent text-slate-900'
    }`}>
      {/* Background Globe Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${globeBg})` }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side Content (45% width) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-3">
              <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${
                darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
              }`}>
                CONTACT US
              </span>
              <span className={`h-0.5 w-12 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-[#1264FF]'}`}></span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Let's Work <span className="text-[#1264FF] dark:text-cyan-400">Together</span>
            </h2>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Have a project in mind or want to know more about our services? Send us a message and our team will get back to you soon.
            </p>

            {/* Circular Blue Icon Info Cards */}
            <div className="space-y-4 pt-4">
              
              {/* Phone */}
              <a
                href="tel:+919090625821"
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-[1.02] ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50 hover:border-cyan-400/50 text-white' : 'bg-slate-50 border-slate-200/80 hover:border-blue-300 shadow-sm text-slate-900'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Phone
                  </span>
                  <span className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    +91 9090625821
                  </span>
                </div>
              </a>

              {/* Email */}
              <div
                className={`p-4 rounded-2xl border ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50 text-white' : 'bg-slate-50 border-slate-200/80 shadow-sm text-slate-900'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Email
                    </span>
                    <a href="mailto:msinnovatex@gmail.com" className="text-sm font-extrabold hover:underline text-[#1264FF] dark:text-cyan-300 block">
                      msinnovatex@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className={`flex items-center gap-4 p-4 rounded-2xl border ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50 text-white' : 'bg-slate-50 border-slate-200/80 shadow-sm text-slate-900'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1264FF] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Location
                  </span>
                  <span className={`text-base font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Form (55% width) */}
          <div className="lg:col-span-7">
            <div className={`relative p-8 sm:p-10 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-[#061A3A] border-blue-900/50 text-white' : 'bg-white border-slate-200/90 text-slate-900'
            }`}>
              
              {/* Paper Plane Decorative Graphic on Top Right */}
              <div className="absolute top-6 right-6 text-[#1264FF] dark:text-cyan-400 opacity-80">
                <SendHorizontal className="w-8 h-8 transform -rotate-12" />
              </div>

              <h3 className={`text-2xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-modal-scale">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-extrabold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full rounded-xl pl-10 pr-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                            darkMode 
                              ? 'bg-[#031126] border-blue-900/60 text-white placeholder-slate-500 focus:ring-cyan-400' 
                              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1264FF]'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-extrabold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-xl pl-10 pr-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                            darkMode 
                              ? 'bg-[#031126] border-blue-900/60 text-white placeholder-slate-500 focus:ring-cyan-400' 
                              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1264FF]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-extrabold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Subject *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full rounded-xl pl-10 pr-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                          darkMode 
                            ? 'bg-[#031126] border-blue-900/60 text-white placeholder-slate-500 focus:ring-cyan-400' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1264FF]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-extrabold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell us about your project or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-[#031126] border-blue-900/60 text-white placeholder-slate-500 focus:ring-cyan-400' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1264FF]'
                      }`}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
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

export default Contact;
