'use client';

export default function ProductionVideo() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-2.jpg.webp"
            alt="tea production and packaging in venture tea, advanced machinery, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
