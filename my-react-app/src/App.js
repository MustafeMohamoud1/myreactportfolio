import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navigation from './components/Navigation';

const App = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section.toLowerCase().replace(/\s/g, '-'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Navigation scrollToSection={scrollToSection} />
      <div id="about-me" className="section">
        <AboutMe />
      </div>
      <div id="portfolio" className="section">
        <Portfolio />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <div id="resume" className="section">
        <Resume />
      </div>
    </div>
  );
};

export default App;
