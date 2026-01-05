import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-background-dark text-gray-200 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;