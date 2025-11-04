'use client';

import { Check } from 'lucide-react';

export default function WhatWeDoSection() {
  const teaTypes = [
    'Black Tea & Green Tea',
    'Flavoured Teas',
    'Pure Fruit Teas',
    'Pure Herbal Teas',
    'Wellness Teas'
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tea boxes image */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://venturetea.com/wp-content/uploads/2025/05/home-tea-boxes-2-e1746618705794-768x425.png.webp"
              alt="Custom tea packing company, private label tea manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 text-gray-900">
          Comprehensive solutions for your tea brand.
        </h2>

        <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-gray-700 max-w-4xl mx-auto">
          "Craft an exceptional collection of teas and herbal infusions, bursting with rich flavors and captivating aromas! From concept to shelf, we provide complete branding and packaging solutions."
        </h3>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            As a premier provider of private label tea services, we offer comprehensive sourcing and packaging solutions for tea companies worldwide. Our standing as a top-tier tea manufacturer in Asia positions us uniquely in the market. Operating from Colombo, Sri Lanka, as a major value-added tea exporter, we deliver an extensive selection of premium teas, including traditional, herbal, fruit-infused, and wellness varieties.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Our internationally certified manufacturing facility specializes in co-packing and private label production. Through our white label, OEM, and value-added services, we partner with tea brands across more than 45 countries globally, producing premium tea products tailored to their specifications.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Years of industry expertise have refined our production processes to perfection. Our skilled team of specialists handles every detail—from formulation and blending to design and packaging—ensuring your private label tea meets your exact specifications. This comprehensive approach allows you to concentrate on what matters most: marketing, distribution, and brand development.
          </p>
        </div>

        {/* Tea types list */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {teaTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
