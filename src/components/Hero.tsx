import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="pt-48 pb-20 min-h-screen flex items-center bg-gradient-to-b from-gray-50/50 via-white to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[15%] w-[600px] h-[600px] bg-[#0066CC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#FF8C42]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-[#1e3a8a] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Start Your Journey to Study
            <br />
            <span className="text-[#0066CC]">in the UK</span>
          </h1>
          
          {/* Feature List with Checkmarks */}
          <div className="space-y-4 mb-10">
            {[
              { text: 'Expert guidance from', highlight: 'British Council Certified Counsellors' },
              { text: 'Personalized video consultations', highlight: null },
              { text: 'End-to-end support from application to arrival', highlight: null },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#0066CC] flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '400' }}>
                  {item.highlight ? (
                    <>
                      {item.text} <span style={{ fontWeight: '600' }} className="text-gray-900">{item.highlight}</span>
                    </>
                  ) : item.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-[#1e3a8a] to-[#0066CC] text-white pl-8 pr-7 py-4 rounded-full transition-all flex items-center gap-3 hover:shadow-xl hover:shadow-[#0066CC]/30 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
              style={{ fontWeight: '600', fontSize: '16px' }}
            >
              <span className="relative z-10">Book Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] via-[#3b82f6] to-[#FF8C42]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white text-[#1e3a8a] border-2 border-[#0066CC] px-8 py-4 rounded-full hover:bg-[#0066CC]/5 transition-all hover:border-[#1e3a8a]"
              style={{ fontWeight: '600', fontSize: '16px' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Illustration/Image Area */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-full max-w-[500px]">
            {/* Floating Cards */}
            <div className="absolute top-10 right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
              <div className="w-12 h-12 bg-[#0066CC]/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '14px' }} className="text-gray-900">Accommodation Help</p>
                <p style={{ fontSize: '12px' }} className="text-gray-500">Find your perfect place</p>
              </div>
            </div>

            <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed">
              <div className="w-12 h-12 bg-[#FF8C42]/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '14px' }} className="text-gray-900">Scholarship Guidance</p>
                <p style={{ fontSize: '12px' }} className="text-gray-500">Get funded support</p>
              </div>
            </div>

            {/* Central Illustration */}
            <div className="relative z-10 bg-gradient-to-br from-[#0066CC]/5 to-[#FF8C42]/5 rounded-3xl p-12 flex items-center justify-center">
              <svg width="300" height="350" viewBox="0 0 300 350" fill="none">
                {/* Ladder illustration */}
                <g className="animate-pulse-slow">
                  <rect x="110" y="50" width="16" height="250" fill="#1e3a8a" rx="8"/>
                  <rect x="174" y="50" width="16" height="250" fill="#1e3a8a" rx="8"/>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <rect key={i} x="126" y={80 + i * 45} width="48" height="10" fill="#0066CC" rx="5"/>
                  ))}
                </g>
                {/* Person climbing */}
                <g transform="translate(140, 120)">
                  <circle cx="10" cy="0" r="12" fill="#FF8C42"/>
                  <rect x="5" y="15" width="10" height="20" fill="#0066CC" rx="5"/>
                  <rect x="0" y="20" width="6" height="15" fill="#0066CC" rx="3"/>
                  <rect x="14" y="20" width="6" height="15" fill="#0066CC" rx="3"/>
                </g>
              </svg>
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