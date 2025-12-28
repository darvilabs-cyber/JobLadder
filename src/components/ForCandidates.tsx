import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ForCandidatesProps {
  scrollToSection: (section: string) => void;
}

export default function ForCandidates({ scrollToSection }: ForCandidatesProps) {
  const benefits = [
    'Exclusive unadvertised roles',
    'Resume & interview coaching',
    'Confidential job search',
    'Career development guidance',
    'Salary negotiation support',
    'Industry insights & trends',
    'Long-term career partnership',
    'Zero cost to candidates',
  ];

  return (
    <div className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative group lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative overflow-hidden rounded-[32px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730162-09a142505bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMGludGVydmlld3xlbnwxfHx8fDE3NjQyNDExNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional interview"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-10 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#0066CC]/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={16} className="text-[#0066CC]" />
              <span className="text-[#0066CC]" style={{ fontWeight: '600', fontSize: '14px' }}>
                FOR CANDIDATES
              </span>
            </div>
            
            <h2 className="text-black" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Your career,
              <br />
              <span className="text-[#0066CC]">accelerated</span>
            </h2>
            
            <p className="text-gray-600" style={{ fontSize: '19px', lineHeight: '1.6', fontWeight: '400' }}>
              From your first role to the executive suite, JobLadder provides strategic guidance and exclusive access to opportunities that align with your ambitions.
            </p>
            
            <div className="grid gap-4">
              {['Entry Level', 'Mid-Career', 'Senior & Executive'].map((level, idx) => (
                <div key={idx} className="group/card relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC]/5 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-50 border border-black/5 rounded-2xl p-6 hover:border-[#0066CC]/20 transition-all flex items-center justify-between">
                    <span className="text-black" style={{ fontWeight: '600', fontSize: '18px' }}>
                      {level}
                    </span>
                    <ArrowUpRight className="text-gray-400 group-hover/card:text-[#0066CC] transition-colors" size={20} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white border border-black/5 rounded-3xl p-8">
              <h3 className="text-black mb-6" style={{ fontSize: '20px', fontWeight: '600' }}>
                What you get
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#0066CC] flex-shrink-0" size={18} />
                    <span className="text-gray-700" style={{ fontSize: '15px', fontWeight: '500' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-[#1e3a8a] to-[#0066CC] text-white pl-8 pr-6 py-4 rounded-full transition-all flex items-center gap-3 hover:shadow-xl hover:shadow-[#0066CC]/30 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] via-[#3b82f6] to-[#FF8C42]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                  <ArrowUpRight size={16} />
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#1e3a8a] border-2 border-[#0066CC] px-8 py-4 rounded-full hover:bg-[#0066CC]/5 transition-all hover:border-[#1e3a8a]"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}