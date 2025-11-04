'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <>
              <img 
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-9.jpg.webp"
                alt="Tea production and packaging facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer group"
                   onClick={() => setIsPlaying(true)}>
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-2" fill="white" />
                  </div>
                  <p className="text-white text-lg md:text-xl">Explore Our Manufacturing Excellence</p>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nl2zgI1JdqU?autoplay=1"
              title="Tea Production Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
