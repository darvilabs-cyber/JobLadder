import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/logo.png';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  showAnnouncement?: boolean;
}

export default function Navigation({ activeSection, scrollToSection, showAnnouncement = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'employers', label: 'Employers' },
    { id: 'candidates', label: 'Candidates' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-black/5 z-40" style={{ top: showAnnouncement ? '48px' : '12px' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logoImage} 
              alt="JobLadder Recruitment" 
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 transition-all relative ${
                  activeSection === item.id
                    ? 'text-[#1B2D4B]'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl'
                } ${activeSection === item.id ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%+16px)] after:h-[3px] after:bg-[#1B2D4B] after:rounded-full' : ''}`}
                style={{ 
                  fontWeight: activeSection === item.id ? '700' : '500', 
                  fontSize: '15px'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#0066CC] text-white px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-[#0066CC]/25 relative overflow-hidden group"
              style={{ fontWeight: '600', fontSize: '15px' }}
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 transition-all relative ${
                  activeSection === item.id
                    ? 'text-[#1B2D4B]'
                    : 'text-gray-600'
                } ${activeSection === item.id ? 'after:content-[""] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-32px)] after:h-[3px] after:bg-[#1B2D4B] after:rounded-full' : ''}`}
                style={{ 
                  fontWeight: activeSection === item.id ? '700' : '500'
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#0066CC] text-white px-6 py-3 rounded-full mt-4 hover:shadow-lg hover:shadow-[#0066CC]/25 transition-all"
              style={{ fontWeight: '600' }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}