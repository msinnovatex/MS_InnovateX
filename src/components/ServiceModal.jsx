import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';

const ServiceModal = ({ service, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const IconComponent = service.icon || Code2;

  const handleGetStarted = () => {
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm animate-backdrop-fade cursor-pointer"
      />

      {/* Modal Dialog Content */}
      <div className={`relative w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-modal-scale transition-colors ${
        darkMode ? 'bg-[#061A3A] text-white border border-blue-800/60' : 'bg-white text-slate-900 border border-slate-100'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            darkMode ? 'bg-blue-900/40 text-slate-300 hover:text-white hover:bg-blue-900' : 'bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200'
          }`}
          title="Close (ESC)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
            darkMode ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white' : 'bg-[#1264FF] text-white'
          }`}>
            <IconComponent className="w-7 h-7" />
          </div>

          <div>
            <span className={`text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'text-cyan-400' : 'text-[#1264FF]'
            }`}>
              MS INNOVATEX SERVICE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {service.description}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className={`text-sm font-extrabold uppercase tracking-wider mb-3 ${
            darkMode ? 'text-slate-200' : 'text-slate-800'
          }`}>
            Key Features:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-5 h-5 shrink-0 ${darkMode ? 'text-cyan-400' : 'text-[#1264FF]'}`} />
                <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used Badges */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="mb-8">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    darkMode ? 'bg-blue-900/50 text-cyan-300 border border-blue-800' : 'bg-blue-50 text-[#1264FF] border border-blue-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-blue-900/50">
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              darkMode ? 'text-slate-300 hover:text-white hover:bg-blue-900/40' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Close
          </button>

          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#1264FF] hover:bg-[#0052E0] rounded-full shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceModal;
