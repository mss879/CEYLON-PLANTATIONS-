'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-10-768x432.jpg.webp',
      alt: 'Designing ceylon tea packages at venture tea',
      description: 'Package Design & Development'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-14-768x432.jpg.webp',
      alt: 'Designing ceylon tea packages',
      description: 'Custom Branding Solutions'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-9-768x432.jpg.webp',
      alt: 'Tea design process',
      description: 'Creative Development Process'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-12-768x432.jpg.webp',
      alt: 'Tea package design',
      description: 'Professional Tea Blending'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-13-768x432.jpg.webp',
      alt: 'Ceylon tea blending',
      description: 'Quality Assurance Standards'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-32-768x432.jpg.webp',
      alt: 'Tea tasting at venture tea factory',
      description: 'Expert Tea Tasting Sessions'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-39-768x432.jpg.webp',
      alt: 'Professional tea tasting',
      description: 'Sensory Evaluation Process'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-36-768x432.jpg.webp',
      alt: 'Tea quality control',
      description: 'Rigorous Quality Testing'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-48-768x432.jpg.webp',
      alt: 'Tea grading at venture tea factory',
      description: 'Professional Tea Grading'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-67-768x432.jpg.webp',
      alt: 'Packaging process at venture tea',
      description: 'Advanced Packaging Technology'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-73-768x432.jpg.webp',
      alt: 'Tea packaging facility',
      description: 'Modern Production Lines'
    },
    { 
      url: 'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-80-768x432.jpg.webp',
      alt: 'Final packaging process',
      description: 'Final Product Assembly'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-white overflow-hidden">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-gray-50" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-12">
        {/* Gallery Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-video relative">
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white text-lg font-light">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-gray-50" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>
    </section>
  );
}
