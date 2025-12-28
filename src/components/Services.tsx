import { UserCheck, Briefcase, Users, LineChart, Shield, Target, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: 'Recruitment',
      icon: UserCheck,
      description: 'Elite talent acquisition for organizations that demand excellence',
      items: [
        {
          icon: Briefcase,
          title: 'Executive Search',
          description: 'C-suite and senior leadership placements that transform organizations.',
        },
        {
          icon: Users,
          title: 'Permanent Placement',
          description: 'End-to-end recruitment for full-time positions at all levels.',
        },
        {
          icon: Target,
          title: 'Contract Staffing',
          description: 'Agile workforce solutions for project-based and temporary needs.',
        },
      ],
    },
    {
      category: 'HR Consulting',
      icon: LineChart,
      description: 'Strategic HR solutions that drive organizational excellence',
      items: [
        {
          icon: LineChart,
          title: 'Talent Strategy',
          description: 'Workforce planning aligned with business objectives and growth.',
        },
        {
          icon: Shield,
          title: 'HR Compliance',
          description: 'Navigate regulations and ensure best-practice implementation.',
        },
        {
          icon: Users,
          title: 'Org Development',
          description: 'Build stronger teams through culture and performance initiatives.',
        },
      ],
    },
  ];

  return (
    <div className="py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0066CC]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[#0066CC] mb-6" style={{ fontWeight: '600', letterSpacing: '0.1em', fontSize: '13px' }}>
            WHAT WE DO
          </div>
          <h2 className="text-black mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
            Full-spectrum talent solutions
          </h2>
          <p className="text-gray-600" style={{ fontSize: '19px', lineHeight: '1.6' }}>
            Comprehensive recruitment and HR services designed to elevate your organization
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#FF8C42] rounded-[40px] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <div className="relative bg-white border border-gray-100 rounded-[32px] p-10 lg:p-12 hover:border-[#0066CC]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066CC]/10 h-full">
                {/* Category Header */}
                <div className="mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#1e3a8a] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0066CC]/20">
                    <service.icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-black mb-3" style={{ fontSize: '36px', fontWeight: '700', letterSpacing: '-0.02em' }}>
                    {service.category}
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                </div>
                
                {/* Service Items */}
                <div className="space-y-6">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group/item flex gap-5 p-5 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 -mx-2">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/5 rounded-xl flex items-center justify-center group-hover/item:bg-[#0066CC] group-hover/item:scale-110 transition-all duration-300">
                        <item.icon size={24} className="text-[#0066CC] group-hover/item:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-black mb-2 group-hover/item:text-[#0066CC] transition-colors" style={{ fontWeight: '600', fontSize: '18px' }}>
                          {item.title}
                        </h4>
                        <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight size={20} className="text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#0066CC] transition-all flex-shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#0066CC] to-[#0ea5e9] rounded-[40px] opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative p-12 lg:p-16">
            <div className="text-center mb-16">
              <h3 className="text-white mb-4" style={{ fontSize: '42px', fontWeight: '700', letterSpacing: '-0.02em' }}>
                Our Process
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.6' }}>
                A proven methodology that delivers exceptional results every time
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 lg:gap-10">
              {[
                { num: '01', title: 'Discovery', desc: 'Deep-dive into your needs' },
                { num: '02', title: 'Strategy', desc: 'Tailored recruitment plan' },
                { num: '03', title: 'Execute', desc: 'Source top-tier talent' },
                { num: '04', title: 'Support', desc: 'Long-term partnership' },
              ].map((phase, idx) => (
                <div key={idx} className="relative group/phase">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-white/30 group-hover/phase:text-white/40 transition-colors mb-4" style={{ fontSize: '64px', fontWeight: '700', letterSpacing: '-0.03em', lineHeight: '1' }}>
                      {phase.num}
                    </div>
                    <h4 className="text-white mb-2" style={{ fontWeight: '600', fontSize: '20px' }}>
                      {phase.title}
                    </h4>
                    <p className="text-white/70" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                      {phase.desc}
                    </p>
                  </div>
                  
                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-10 lg:w-10 h-0.5 bg-white/20 -translate-y-1/2 z-10">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}