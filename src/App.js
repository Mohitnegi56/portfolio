import { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { CursorEffect } from './components/CursorEffect';
import { Certificates } from './components/Certificates';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress bar logic
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll animation reveal logic (Intersection Observer)
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    // Add scroll reveal selector targeting key sections
    const sectionsToReveal = document.querySelectorAll(
      '.banner, .skill-bx, .project-bx, .resume-bx, .certificates-bx, .contact-form-box'
    );
    sectionsToReveal.forEach(section => {
      section.classList.add('reveal-on-scroll');
      revealObserver.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionsToReveal.forEach(section => revealObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <CursorEffect />
      
      {/* Background Aurora Glow Elements */}
      <div className="aurora-glow-1"></div>
      <div className="aurora-glow-2"></div>
      <div className="bg-grid-overlay"></div>

      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Resume/>
      <Certificates/>
      <Contact/>
      <Footer/>
      <Chatbot />
    </div>
  );
}

export default App;
