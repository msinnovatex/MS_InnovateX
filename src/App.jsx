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

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-[#031126] text-white dark' : 'bg-white text-slate-900'
    }`}>
      <ScrollToTop />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />

        {/* 1. EMAIL MARKETING (Independent Division) */}
        <Route path="/email-marketing" element={<EmailMarketing darkMode={darkMode} />} />

        {/* 2. INTERNSHIP & TRAINING (Independent Division) */}
        <Route path="/internship" element={<Internship darkMode={darkMode} />} />

        {/* 3. CLIENT SOLUTIONS DIVISION - Single Unified Services Page */}
        <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
        <Route path="/services/*" element={<ServicesPage darkMode={darkMode} />} />

        {/* Careers & Contact */}
        <Route path="/careers" element={<Careers darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
