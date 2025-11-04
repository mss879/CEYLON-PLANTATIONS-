'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WarehouseGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://venturetea.com/wp-content/uploads/2025/07/venture-tea-office-005-768x432.jpg.webp",
      alt: "cold rooms, warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-tea-warehouse-in-venture-tea-9-768x435.jpg.webp",
      alt: "tea warehouse at venture tea, pure ceylon tea, wholesale and bulk tea exporter, private tea label, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-tea-warehouse-in-venture-tea-17-768x432.jpg.webp",
      alt: "tea warehouse in venture tea factory, pure ceylon tea, wholesale and bulk tea exporter, private tea label, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-43-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-35-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-34-768x432.jpg.webp",
      alt: "cold rooms at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-37-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-31-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-23-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    },
    {
      src: "https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-19-768x432.jpg.webp",
      alt: "warehouse at venture tea, private label tea, wholesale and bulk tea exporter, pure ceylon tea, largest tea producer, largest tea exporter"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-green-50 to-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-12 md:h-16" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="white">
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative pt-8">
        {/* Gallery Container */}
        <div className="relative">
          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleImages().map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-50 transition-colors z-10"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-green-50 transition-colors z-10"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentIndex / 3) === index 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
