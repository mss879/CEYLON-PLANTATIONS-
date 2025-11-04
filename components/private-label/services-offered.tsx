'use client';

import { Check, Play } from 'lucide-react';
import { useState } from 'react';

export default function ServicesOffered() {
  const [isPlaying, setIsPlaying] = useState(false);

  const services = [
    'Premium quality tea sourcing',
    'Comprehensive laboratory testing',
    'Bespoke blending solutions',
    'Flavor enhancement and infusions',
    'Brand identity development',
    'Custom packaging design',
    'Professional product mockups',
    'Complete manufacturing process',
    'Storage and logistics services',
    'Eco-friendly packaging solutions'
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-900">
            Creating Exceptional Tea Brands
          </h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-gray-800 max-w-4xl mx-auto">
            End-to-end private label services for global tea enterprises.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            Our comprehensive tea industry solutions begin with initial brand conception and design, extending through complete production and final package delivery. We provide extensive tea-related services including procurement, laboratory analysis, quality grading, professional tasting, and custom blending. Simultaneously, our creative design team specializes in developing region-specific and language-tailored branding alongside full-scale production capabilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-800">{service}</span>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            {!isPlaying ? (
              <>
                <img 
                  src="https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-14.jpg.webp"
                  alt="Ceylon tea package design process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer group"
                     onClick={() => setIsPlaying(true)}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-2" fill="white" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/IqACsqGq8tg?autoplay=1"
                title="Tea Services Overview"
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
