import { ArrowRight, ArrowUpRight, Star, Award, TrendingUp } from 'lucide-react';
import arrowManImage from '../assets/arrow-man.jpg';

interface HeroProps {
  scrollToSection: (section: string) => void;
  showAnnouncement?: boolean;
}

export default function Hero({ scrollToSection, showAnnouncement = false }: HeroProps) {
  // Calculate padding-top: navbar (12px margin + 96px height) + banner (48px when visible) + extra spacing
  const paddingTop = showAnnouncement ? '180px' : '132px';
  
  return (
    <div className="pb-20 min-h-screen bg-gradient-to-b from-gray-50/50 via-white to-white relative overflow-hidden" style={{ paddingTop }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[15%] w-[600px] h-[600px] bg-[#0066CC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#FF8C42]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Main Hero Content - Build teams + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
          <div className="max-w-2xl mt-12">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Star size={14} className="text-[#0066CC] fill-[#0066CC]" />
              <span className="text-gray-700" style={{ fontSize: '14px', fontWeight: '500' }}>
                Premium Recruitment & HR Solutions
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="mb-6" style={{ fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              <span 
                className="block"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #1B2D4B, #1B2D4B 70%, #1F68B2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Build teams that
              </span>
              <span 
                className="block"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #1B2D4B, #1F68B2 30%, #1F68B2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                move mountains
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 mb-10" style={{ fontSize: '16px', lineHeight: '1.6', fontWeight: '400' }}>
              We connect ambitious talent with transformative opportunities. Strategic recruitment and HR consulting for companies that refuse to settle.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-[#1e3a8a] to-[#0066CC] text-white pl-8 pr-6 py-4 rounded-full transition-all flex items-center gap-3 hover:shadow-xl hover:shadow-[#0066CC]/30 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] via-[#3b82f6] to-[#FF8C42]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                  <ArrowUpRight size={16} />
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[#1e3a8a] border-2 border-[#0066CC] px-8 py-4 rounded-full hover:bg-[#0066CC]/5 transition-all hover:border-[#1e3a8a]"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Side Illustration/Image Area */}
          <div className="hidden lg:flex justify-end items-center relative">
            <div 
              className="relative w-full max-w-[500px]"
              style={{ 
                transform: 'translate(80px, 60px)', 
                transformOrigin: 'top right'
              }}
            >
              {/* Central Illustration */}
              <div className="relative z-0 rounded-3xl flex items-center justify-center overflow-hidden">
                <img 
                  src={arrowManImage} 
                  alt="Career progression - man walking on upward arrow"
                  className="w-full max-h-[500px] h-auto object-contain object-right"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 right-0 z-30 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-[#0066CC]/10 rounded-xl flex items-center justify-center">
                  <Award className="text-[#0066CC]" size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '14px' }} className="text-gray-900">Premium Service</p>
                  <p style={{ fontSize: '12px' }} className="text-gray-500">Top tier candidate matching</p>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 z-30 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed">
                <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-[#FF8C42]" size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '14px' }} className="text-gray-900">Growth</p>
                  <p style={{ fontSize: '12px' }} className="text-gray-500">Accelerated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
