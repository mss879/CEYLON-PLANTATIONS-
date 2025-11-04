'use client';

import { MapPin, Phone } from 'lucide-react';

export default function PackagingOptions() {
  const packagingTypes = [
    {
      title: 'Single chamber tagless tea bags.',
      description: '1.5gr / 2gr - 25 & 100 Tea Bags. Perfect for traditional pot-brewing methods where elegance meets taste. These tagless options are ideal for formal tea service, complete with teapot, cups, and saucers in a classic presentation style.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-2.jpg.webp'
    },
    {
      title: 'Single chamber string and tag tea bags.',
      description: '1.5gr / 2gr - 25 & 100 Tea Bags. The most practical tea bag design, featuring dual-sided water exposure for optimal flavor extraction. Widely recognized for its convenience, this format delivers instant access to premium Pure Ceylon Tea whenever desired.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-3.jpg'
    },
    {
      title: 'Double chamber string and tag tea bags.',
      description: '(With Staple / Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags. An enhanced version of the single chamber design, these bags maximize water contact for superior flavor infusion and aroma release.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-4.jpg.webp'
    },
    {
      title: 'Single chamber envelope tea bags.',
      description: '1.5gr / 2gr - 25 & 100 Tea Bags. Similar to standard string and tag varieties but featuring protective envelope packaging. The enhanced covering provides superior protection from external elements while extending freshness and quality retention.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-5.jpg.webp'
    },
    {
      title: 'Double chamber envelope tea bags.',
      description: 'Paper / Paper Foil / Aluminium Foil (Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags. Premium double chamber bags protected by sophisticated envelope packaging, ensuring your tea remains fresh and ready for sophisticated tea moments.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-6.jpg.webp'
    },
    {
      title: 'Nylon or biodegradable pyramid tea bags.',
      description: '1.59 to 3g - 15 Tea Bags / 20 Tea Bags / 25 Tea Bags. The cutting-edge solution in convenient tea preparation, pyramid sachets have transformed how discerning tea enthusiasts worldwide enjoy premium specialty teas.',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-7.jpg'
    },
    {
      title: 'Special packaging for loose leaf tea.',
      description: 'Paper Boxes / Metal Tins / Alu Pouches / Glass Jars / Paper Canisters / Metal Canisters / Special Shape Boxes and Tins',
      image: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-1.jpg.webp'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-900">
            Diverse Packaging Portfolio
          </h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-gray-800">
            Extensive tea packaging variations.
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gray-700">
            <p>
              Your brand's packaging possibilities are boundless, limited only by imagination. We offer numerous industry-standard packaging formats, plus innovative custom solutions tailored to your vision.
            </p>
            
            <p>
              Our tea bag collection spans multiple sizes and configurations. Beyond bags, our packaging repertoire encompasses metal tins, paper canisters, premium boxes, elegant glass jars, and bespoke gift presentations in wooden chests—available in countless shapes and dimensions.
            </p>
            
            <p>
              Our private label offerings include versatile options: single or double chamber tea bags (available with or without string, tag, and envelope), luxurious silken pyramid sachets (with optional tag and envelope), plus metal-free alternatives for eco-conscious brands.
            </p>
          </div>
        </div>

        {/* Packaging Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packagingTypes.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-center">
              Ready to launch your tea brand?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Venture Tea (Pvt) Ltd.</p>
                    <p>144, Veediya Bandara Mawatha,</p>
                    <p>Mulleriyawa North,</p>
                    <p>Sri Lanka.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <a href="tel:+94112567350" className="flex items-center gap-3 hover:underline">
                  <Phone className="w-5 h-5" />
                  <span>+94-11-2567350</span>
                </a>
                <a href="tel:+94112567305" className="flex items-center gap-3 hover:underline">
                  <Phone className="w-5 h-5" />
                  <span>+94-112-567305</span>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/contact" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
