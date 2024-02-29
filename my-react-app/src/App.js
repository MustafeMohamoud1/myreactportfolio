import React from 'react';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  return (
    <div>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
