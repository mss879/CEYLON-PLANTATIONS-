'use client';

export default function CoPackingIntro() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Co-Packing for Existing Brands of Tea
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-700">
              Get your tea or herbal and wellness beverages packed.
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>Contract Tea Packaging</strong> or Co-Packing Tea, is a process where we put together your products at various stages into it's finished packaging and ship them ready for your distribution or shelves. There are several types of Co-Packing systems available with us based on the requirement you have. Venture Tea is a premier CoPacker / CoPacking partner service for Tea in Colombo, Sri Lanka.
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-46.jpg.webp"
              alt="tea production and packaging in venture tea, advanced machinery, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
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
