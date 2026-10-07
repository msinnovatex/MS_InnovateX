import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Independent Business Divisions & Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import EmailMarketing from './pages/EmailMarketing/EmailMarketing';
import Internship from './pages/Internship/Internship';
import ServicesPage from './pages/Services/ServicesPage';
import Careers from './pages/Careers/Careers';
import ContactPage from './pages/Contact/ContactPage';
import OfferInternship from './pages/OfferInternship/OfferInternship';
import SeoManager from './components/SeoManager';
import AdvertisementPopup from './components/AdvertisementPopup';

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    images.forEach((img, index) => {
      img.decoding = 'async';
      if (index > 2 && !img.getAttribute('loading')) img.loading = 'lazy';
      img.draggable = false;
    });

    const isEditable = (target) => {
      if (!target) return false;
      const el = target instanceof Element ? target : target.parentElement;
      return !!el?.closest('input, textarea, select, [contenteditable="true"]');
    };

    const blockContextMenu = (event) => event.preventDefault();
    const blockDrag = (event) => event.preventDefault();
    const blockCopyKeys = (event) => {
      if (isEditable(event.target)) return;
      const key = String(event.key || '').toLowerCase();
      if ((event.ctrlKey || event.metaKey) && ['c', 'x', 'a', 'u', 's'].includes(key)) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockDrag);
    document.addEventListener('keydown', blockCopyKeys);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('keydown', blockCopyKeys);
    };
  }, []);

  return (
    <div className={`client-protected min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-[#031126] text-white dark' : 'bg-white text-slate-900'
    }`}>
      <ScrollToTop />
      <SeoManager />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />

        {/* 1. EMAIL MARKETING (Independent Division) */}
        <Route path="/email-marketing" element={<EmailMarketing darkMode={darkMode} />} />

        {/* 2. INTERNSHIP & TRAINING (Independent Division) */}
        <Route path="/internship" element={<Internship darkMode={darkMode} />} />
        <Route path="/offerinternship" element={<OfferInternship darkMode={darkMode} />} />

        {/* 3. CLIENT SOLUTIONS DIVISION - Single Unified Services Page */}
        <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
        <Route path="/services/*" element={<ServicesPage darkMode={darkMode} />} />

        {/* Careers & Contact */}
        <Route path="/careers" element={<Careers darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        <Route path="*" element={
          <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
            <div>
              <div className="text-sm font-extrabold uppercase tracking-widest text-[#1264FF]">404</div>
              <h1 className="text-4xl font-black mt-2">Page not found</h1>
              <p className="text-slate-500 dark:text-slate-300 mt-3 max-w-md">The page you requested does not exist or may have moved.</p>
              <a href="/" className="inline-flex mt-6 px-6 py-3 rounded-full bg-[#1264FF] text-white font-bold">Back to Home</a>
            </div>
          </div>
        } />
      </Routes>

      <AdvertisementPopup />
      <Footer />
    </div>
  );
}

export default App;
