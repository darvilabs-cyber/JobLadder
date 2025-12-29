export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          <div className="text-center flex flex-col items-center min-w-[140px]">
            <div className="text-black mb-3" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1' }}>
              100+
            </div>
            <div className="text-gray-600 max-w-[150px]" style={{ fontSize: '16px', fontWeight: '500' }}>
              Successful Placements
            </div>
          </div>
          <div className="text-center flex flex-col items-center min-w-[140px]">
            <div className="text-black mb-3" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1' }}>
              100%
            </div>
            <div className="text-gray-600 max-w-[150px]" style={{ fontSize: '16px', fontWeight: '500' }}>
              Client Satisfaction
            </div>
          </div>
          <div className="text-center flex flex-col items-center min-w-[140px]">
            <div className="text-black mb-3" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1' }}>
              10+
            </div>
            <div className="text-gray-600 max-w-[150px]" style={{ fontSize: '16px', fontWeight: '500' }}>
              Partnerships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

