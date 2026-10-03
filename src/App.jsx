import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Internship from './components/Internship';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030914] text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Industries />
        <Process />
        <About />
        <WhyChooseUs />
        <Internship />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
