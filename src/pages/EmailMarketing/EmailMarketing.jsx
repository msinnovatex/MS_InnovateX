import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, Mail, Sparkles, TrendingUp, Users, CheckCircle2, ArrowRight,
  MousePointerClick, PieChart, ShieldCheck, Award, Heart, Utensils,
  ShoppingBag, GraduationCap, Stethoscope, Rocket, Building2, Briefcase,
  Layers, Settings, Repeat, UserCheck, MessageSquare, ChevronRight, Star,
  Phone, MapPin, Globe, Check
} from 'lucide-react';
import logoImg from '../../assets/logo.png';
import waveBg from '../../assets/wave-bg.jpg';
import cityBg from '../../assets/city-bg.jpg';
import globeBg from '../../assets/globe-bg.jpg';
import heroBg from '../../assets/hero-bg.jpg';
import statsBg from '../../assets/stats-bg.jpg';
import './EmailMarketing.css';

const EmailMarketing = ({ darkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    campaignType: 'Promotional Campaigns',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const apiBase = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/submissions/emailMarketing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Unable to submit your campaign request.');
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', company: '', campaignType: 'Promotional Campaigns', message: '' });
      }, 4000);
    } catch (err) {
      alert(err.message || 'Unable to submit your campaign request.');
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { icon: Send, title: 'Email Campaign Management', desc: 'Plan and manage effective email campaigns targeted directly to your customer segments.' },
    { icon: Mail, title: 'Newsletter Management', desc: 'Share regular updates, blogs, stories, and company insights with your audience.' },
    { icon: Sparkles, title: 'Promotional Emails', desc: 'Create and send high-converting sales offers, product launches, discounts and announcements.' },
    { icon: Layers, title: 'Email Template Design', desc: 'Professional, fully responsive and branded email templates tailored to your brand.' },
    { icon: Settings, title: 'Email Automation', desc: 'Automate welcome sequences, drip campaigns, and trigger-based emails for continuous engagement.' },
    { icon: Repeat, title: 'Customer Follow-ups', desc: 'Re-engage inactive subscribers and convert warm leads into recurring loyal customers.' },
    { icon: UserCheck, title: 'Subscriber Management', desc: 'Organize, clean, segment, and manage your email list for maximum deliverability.' },
    { icon: PieChart, title: 'Campaign Analytics', desc: 'Track open rates, click-through rates, conversions and detailed performance reports.' }
  ];

  const steps = [
    { num: '01', title: 'Understand Your Business', desc: 'We learn about your goals, brand voice, products and target audience.' },
    { num: '02', title: 'Create Email Strategy', desc: 'Plan the right campaign schedules, messaging angles and audience segmentation.' },
    { num: '03', title: 'Design Campaign', desc: 'Create attractive, mobile-responsive email templates with compelling copy.' },
    { num: '04', title: 'Send to Subscribers', desc: 'Deliver emails at optimal peak hours to maximize open rates.' },
    { num: '05', title: 'Track Results', desc: 'Monitor real-time opens, clicks, unsubscribes and audience engagement.' },
    { num: '06', title: 'Improve Campaign', desc: 'Optimize content, CTAs, subject lines and timings for future continuous growth.' }
  ];

  const campaignTypes = [
    { title: 'Promotional Campaigns', desc: 'Boost immediate sales with targeted promotional discounts & product deals.', icon: ShoppingBag },
    { title: 'Welcome Emails', desc: 'Make a lasting first impression with automated welcome emails for new signups.', icon: Heart },
    { title: 'Product & Service Updates', desc: 'Keep existing clients informed about new features, upgrades, and services.', icon: Rocket },
    { title: 'Newsletters', desc: 'Build long-term trust by delivering weekly or monthly value-packed newsletters.', icon: Mail },
    { title: 'Special Offers', desc: 'Drive holiday, seasonal, and flash sale conversions with high-converting templates.', icon: Sparkles },
    { title: 'Customer Re-engagement', desc: 'Win back inactive users with targeted re-activation and win-back offers.', icon: Repeat }
  ];

  const industries = [
    { title: 'Restaurants & Cafes', icon: Utensils },
    { title: 'E-commerce', icon: ShoppingBag },
    { title: 'Education', icon: GraduationCap },
    { title: 'Healthcare', icon: Stethoscope },
    { title: 'Startups', icon: Rocket },
    { title: 'NGOs', icon: Heart },
    { title: 'Small & Medium Businesses', icon: Building2 },
    { title: 'Professional Services', icon: Briefcase }
  ];

  const whyUs = [
    { title: 'Business-Focused Strategy', desc: 'Customized email strategies aligned with your specific revenue and customer growth goals.', icon: Award },
    { title: 'Professional Email Design', desc: 'Branded, beautiful, and fully responsive templates engineered for high readability.', icon: Sparkles },
    { title: 'Targeted Communication', desc: 'Reach the right audience segments with hyper-relevant offers and personalized content.', icon: UserCheck },
    { title: 'Performance Reporting', desc: 'Transparent, detailed reports and analytics to track ROI and continuously optimize results.', icon: TrendingUp }
  ];

  const testimonials = [
    { name: 'Rohan Mehta', role: 'Cafe Owner', text: 'Email campaigns helped us bring back many old customers. Sales improved and the service was excellent.' },
    { name: 'Priya Sharma', role: 'E-commerce Store', text: 'Professional email templates and campaign management. Highly recommended!' },
    { name: 'Amit Kumar', role: 'Training Institute', text: 'Our newsletter engagement improved a lot. Great support and timely reporting.' }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#031126] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* 1. EMAIL MARKETING HERO WITH FULL SECTION BACKGROUND IMAGE */}
      <section 
        className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center border-b border-blue-900/40 text-white"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        <div className={`absolute inset-0 transition-colors ${
          darkMode 
            ? 'bg-gradient-to-r from-[#031126] via-[#031126]/95 to-[#031126]/80' 
            : 'bg-gradient-to-r from-[#061A3A] via-[#061A3A]/95 to-[#061A3A]/80'
        }`} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-extrabold text-xs uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL MARKETING</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Connect With <br />
                Your Customers. <br />
                <span className="text-cyan-300">Grow Your Business.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                Reach the right audience with professional email campaigns, newsletters, automation and customer engagement solutions that bring real results.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-cyan-300 rounded-full border-2 border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
                >
                  <span>Contact Us</span>
                </a>
              </div>

              {/* Bottom 3 Badges */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-blue-800/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold leading-snug">Targeted Campaigns</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold leading-snug">Email Automation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold leading-snug">Campaign Analytics</span>
                </div>
              </div>

            </div>

            {/* Right Dashboard Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl p-6 border border-cyan-400/30 shadow-2xl bg-[#031126]/90 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-300 ml-2">Email Analytics Dashboard</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[11px]">
                    Every Year Business
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-900 text-center">
                    <div className="text-[11px] font-bold text-slate-400">Sent</div>
                    <div className="text-sm font-black text-cyan-300">12,500</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-900 text-center">
                    <div className="text-[11px] font-bold text-slate-400">Delivered</div>
                    <div className="text-sm font-black text-emerald-300">11,850</div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-900 text-center">
                    <div className="text-[11px] font-bold text-slate-400">Open Rate</div>
                    <div className="text-sm font-black text-purple-300">45.2%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-900 text-center">
                    <div className="text-[11px] font-bold text-slate-400">Click Rate</div>
                    <div className="text-sm font-black text-amber-300">8.6%</div>
                  </div>
                </div>

                <div className="h-28 w-full bg-gradient-to-t from-cyan-500/20 to-transparent rounded-xl border border-blue-900/60 p-3 flex items-end justify-between gap-1">
                  {[35, 45, 60, 50, 75, 80, 65, 90, 85, 95, 100].map((h, i) => (
                    <div key={i} className="w-full bg-cyan-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT EMAIL MARKETING WITH FULL BACKGROUND */}
      <section 
        className="relative py-20 lg:py-24 bg-cover bg-center border-b border-blue-900/40 text-white"
        style={{ backgroundImage: `url(${waveBg})` }}
      >
        <div className="absolute inset-0 bg-[#061A3A]/92 backdrop-blur-xs" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#031126]/90 border border-cyan-400/30 shadow-2xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Maximize Email ROI</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Email marketing consistently remains the highest ROI marketing channel for businesses across the globe.
                </p>
                <div className="space-y-3 pt-3 border-t border-blue-900">
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>4000% Average Return on Investment</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Direct Access to Customer Inbox</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Automated 24/7 Nurturing Workflows</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400">
                ABOUT EMAIL MARKETING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Turn Every Email Into an <span className="text-cyan-300">Opportunity</span>
              </h2>
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                Email marketing helps businesses communicate with customers, promote products and services, share updates and build long-term relationships through targeted email communication.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-extrabold">Target the Right Audience</h4>
                  <p className="text-xs text-slate-300">Create relevant campaigns for your subscribers.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-extrabold">Build Customer Relationships</h4>
                  <p className="text-xs text-slate-300">Stay connected with customers through useful communication.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-extrabold">Measure Performance</h4>
                  <p className="text-xs text-slate-300">Track campaign performance and improve results.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR EMAIL MARKETING SERVICES */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              SOLUTIONS WE PROVIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              Our Email Marketing Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Everything you need to communicate with your audience professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border email-card-hover transition-all ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/50 text-[#1264FF] dark:text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW OUR EMAIL MARKETING WORKS WITH FULL BACKGROUND IMAGE */}
      <section 
        className="relative py-20 lg:py-28 bg-cover bg-center text-white border-y border-blue-900/50"
        style={{ backgroundImage: `url(${globeBg})` }}
      >
        <div className="absolute inset-0 bg-[#061A3A]/90 backdrop-blur-xs" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-400">
              WORKFLOW PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              How Our Email Marketing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-[#031126]/90 p-6 rounded-2xl border border-blue-900/60 flex flex-col items-center text-center shadow-xl">
                <div className="w-10 h-10 rounded-full bg-[#1264FF] text-white font-black text-sm flex items-center justify-center mb-4 shadow-lg">
                  {s.num}
                </div>
                <h3 className="text-sm font-extrabold mb-2 text-white">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAMPAIGN TYPES */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
                CAMPAIGN TYPES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-1 text-slate-900 dark:text-white">
                Campaigns That Keep Your Audience Connected
              </h2>
            </div>
            <a href="#contact-form" className="mt-4 sm:mt-0 text-sm font-extrabold text-[#1264FF] dark:text-cyan-400 hover:underline flex items-center gap-1">
              View All Campaign Types <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-[#1264FF] dark:text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ANALYTICS & REPORTING */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#061A3A]' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
                ANALYTICS & REPORTING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Measure. Understand. Improve.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Track campaign performance and understand how your audience interacts with your emails in real time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40">
                  <div className="text-2xl font-black text-[#1264FF] dark:text-cyan-400">12,500</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Emails Delivered</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/40">
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">45.2%</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Open Rate</div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/40">
                  <div className="text-2xl font-black text-purple-600 dark:text-purple-400">8.6%</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Click Rate</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-900/40">
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400">2.1%</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Bounce Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className={`p-6 rounded-3xl border shadow-xl ${darkMode ? 'bg-[#031126] border-blue-900/50' : 'bg-white border-slate-200/80'}`}>
                <h4 className="text-sm font-extrabold mb-4 flex items-center justify-between text-slate-900 dark:text-white">
                  <span>Campaign Performance Summary</span>
                  <span className="text-xs font-normal text-slate-400">Last 30 Days</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold py-2 border-b border-slate-100 dark:border-blue-900/40">
                    <span className="text-slate-500 dark:text-slate-400">Total Sent</span>
                    <span className="font-mono text-sm text-slate-900 dark:text-white">12,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold py-2 border-b border-slate-100 dark:border-blue-900/40">
                    <span className="text-slate-500 dark:text-slate-400">Delivered</span>
                    <span className="font-mono text-sm text-emerald-500">11,850</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold py-2 border-b border-slate-100 dark:border-blue-900/40">
                    <span className="text-slate-500 dark:text-slate-400">Opened</span>
                    <span className="font-mono text-sm text-[#1264FF] dark:text-cyan-400">1,970</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold py-2 border-b border-slate-100 dark:border-blue-900/40">
                    <span className="text-slate-500 dark:text-slate-400">Bounced</span>
                    <span className="font-mono text-sm text-amber-500">263</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold py-2">
                    <span className="text-slate-500 dark:text-slate-400">Unsubscribed</span>
                    <span className="font-mono text-sm text-rose-500">42</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE HELP */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              INDUSTRIES WE HELP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              Email Marketing for Growing Businesses
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border text-center transition-all hover:scale-105 ${
                    darkMode ? 'bg-[#061A3A] border-blue-900/40' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/50 text-[#1264FF] dark:text-cyan-400 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{ind.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MS INNOVATEX */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#061A3A]' : 'bg-white'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Why Choose MS InnovateX?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border ${
                    darkMode ? 'bg-[#031126] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold mb-2 text-slate-900 dark:text-white">{w.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WHAT OUR CLIENTS SAY */}
      <section className={`py-16 lg:py-24 transition-colors ${darkMode ? 'bg-[#031126]' : 'bg-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1264FF] dark:text-cyan-400">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-900 dark:text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-3xl border ${
                  darkMode ? 'bg-[#061A3A] border-blue-900/50' : 'bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mb-6">
                  "{t.text}"
                </p>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. EMAIL MARKETING CTA WITH FULL BACKGROUND IMAGE */}
      <section 
        id="contact-form" 
        className="relative py-20 lg:py-28 bg-cover bg-center text-white border-t border-cyan-500/30"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A] via-[#061A3A]/95 to-[#061A3A]/85" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-xs uppercase tracking-widest border border-cyan-400/30">
                READY TO GROW?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Ready to Reach Your <span className="text-cyan-300">Customers Better?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl">
                Let's create an email marketing strategy that keeps your audience connected with your business.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-blue-900/60">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold">+91 9090625821</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold">msinnovatex@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            {/* Email Marketing Quick Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#031126]/95 border border-cyan-400/30 shadow-2xl space-y-4">
                <h3 className="text-lg font-extrabold text-white">Start Email Marketing Campaign</h3>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-bold">
                    Thank you! Your email marketing enquiry has been received. Our team will contact you shortly.
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter phone number" 
                      className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Campaign Type</label>
                  <select
                    value={formData.campaignType}
                    onChange={(e) => setFormData({...formData, campaignType: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Promotional Campaigns">Promotional Campaigns</option>
                    <option value="Newsletter Management">Newsletter Management</option>
                    <option value="Email Automation">Email Automation</option>
                    <option value="Email Template Design">Email Template Design</option>
                    <option value="Customer Re-engagement">Customer Re-engagement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Message</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your business & campaign goals..." 
                    className="w-full px-4 py-2.5 rounded-xl bg-blue-950/70 border border-blue-900 text-white text-xs focus:outline-none focus:border-cyan-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Campaign Request →'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EmailMarketing;
