'use client';

export default function BlendingFacility() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Largest tea blending facility In Sri Lanka.
            </h1>
            
            <div className="max-w-2xl space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Housing the largest blending facility in Sri Lanka, we are able to fulfil large capacity orders in efficient timelines. Throughout the past two decades Venture Tea continues to be a premium tea buyer at the Colombo Tea Auctions and enjoys the privilege of entertaining over tens of thousands of varieties of tea produced in Sri Lankan tea estates.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                This allows us to create specific blends based on client requirements. Our tea tasters use their decades of experience to consistently provide the taste required by our clients worldwide.
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-21-768x432.jpg.webp"
              alt="blending machines at venture tea factory, largest tea producer, wholesale and bulk tea exporter, private label tea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
