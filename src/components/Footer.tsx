import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import logoImage from '../assets/logo.png';

interface FooterProps {
  scrollToSection: (section: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', section: 'about' },
      { label: 'Services', section: 'services' },
      { label: 'Contact', section: 'contact' },
    ],
    forYou: [
      { label: 'Employers', section: 'employers' },
      { label: 'Candidates', section: 'candidates' },
      { label: 'Book Call', section: 'contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:hello@jobladder.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 text-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center"
              >
                <img 
                  src={logoImage} 
                  alt="JobLadder Recruitment" 
                  className="h-12 w-auto min-w-[120px] transition-transform duration-300 hover:scale-105"
                />
              </button>
            </div>
            <p className="text-gray-700 mb-8 max-w-sm" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Strategic recruitment and HR consulting for ambitious companies and professionals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-[#0066CC] hover:text-white transition-all hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="mb-5 text-gray-900" style={{ fontWeight: '600', fontSize: '15px' }}>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-700 hover:text-[#0066CC] transition-colors"
                    style={{ fontSize: '15px' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-5 text-gray-900" style={{ fontWeight: '600', fontSize: '15px' }}>
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.forYou.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-700 hover:text-[#0066CC] transition-colors"
                    style={{ fontSize: '15px' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600" style={{ fontSize: '14px' }}>
            © {currentYear} JobLadder. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button className="text-gray-600 hover:text-[#0066CC] transition-colors" style={{ fontSize: '14px' }}>
              Privacy
            </button>
            <button className="text-gray-600 hover:text-[#0066CC] transition-colors" style={{ fontSize: '14px' }}>
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
