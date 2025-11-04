'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

export default function PureCeylonSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              Private Label Tea Solutions
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">
              Authentic Ceylon Tea Manufacturing
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A preferred partner for tea businesses spanning 45+ nations worldwide. Our Colombo-based facility is engineered for optimal efficiency, maintaining the highest hygiene standards and prioritizing employee well-being. Our production infrastructure adheres to international quality benchmarks, ensuring reliable output for markets around the globe. The facility's design promotes streamlined operations and comprehensive staff amenities, guaranteeing seamless daily productivity.
            </p>
          </div>

          {/* Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            {!isPlaying ? (
              <>
                <img 
                  src="https://venturetea.com/wp-content/uploads/2023/10/private-label-tea-factory-08-8.jpg.webp"
                  alt="Tea packing facility in Sri Lanka"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group"
                     onClick={() => setIsPlaying(true)}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-2" fill="white" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UJqgk9Y2vTo?autoplay=1"
                title="Factory Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
