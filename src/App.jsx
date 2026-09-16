import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ScrollCanvas from './components/ScrollCanvas/ScrollCanvas';
import CyberCorners from './components/CyberCorners/CyberCorners';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Education from './components/Education/Education';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background 50-frame sequence connected to scroll */}
      <ScrollCanvas />

      {/* Subtle Cyberpunk HUD Corner Brackets */}
      <CyberCorners />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Structured Sections per visual hierarchy */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Philosophy */}
        <About />

        {/* 3. Offensive Skills & VAPT Methodology */}
        <Skills />

        {/* 4. Projects Showcase (All 6 verified works) */}
        <Projects />

        {/* 5. Certificates & Hackathon Honors */}
        <Certificates />

        {/* 6. Academic Education */}
        <Education />

        {/* 7. Resume & Candidate Dossier */}
        <Resume />

        {/* 8. Contact & Transmission Hub */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
