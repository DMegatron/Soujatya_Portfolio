   import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import SEO from './components/SEO';
import TechSkillsSchema from './components/TechSkillsSchema';
import SEOContentHub from './components/SEOContentHub';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Analytics />
      <SEO />
      <TechSkillsSchema />
      <SEOContentHub />
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main role="main">
          <section id="home" aria-label="Hero section">
            <Hero />
          </section>
          <section id="about" aria-label="About section">
            <About />
          </section>
          <section id="experience" aria-label="Experience section">
            <Experience />
          </section>
          <section id="projects" aria-label="Projects section">
            <Projects />
          </section>
          <section id="skills" aria-label="Skills section">
            <Skills />
          </section>
          <section id="certifications" aria-label="Certifications section">
            <Certifications />
          </section>
          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;