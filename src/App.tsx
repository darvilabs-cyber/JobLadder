import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ForEmployers from './components/ForEmployers';
import ForCandidates from './components/ForCandidates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {showAnnouncement && !isScrolled && (
        <div className="bg-gradient-to-r from-[#FF8C42] to-[#FF6B35] text-white py-3 px-6 relative z-50">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 justify-center">
              <span className="hidden sm:inline">⚡</span>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>
                Start your UK recruitment journey - Applications are now open for January 2026 intake!
              </span>
            </div>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors ml-4"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="employers">
          <ForEmployers scrollToSection={scrollToSection} />
        </section>
        
        <section id="candidates">
          <ForCandidates scrollToSection={scrollToSection} />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}