'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, MapPin, Phone } from 'lucide-react';
import FooterSection from '@/components/footer-section';

export default function B2BTeaSupplierPage() {
  const teaTypes = [
    "Black Tea & Green Tea",
    "Pure Herbal Tea & Wellness Tea",
    "Pure Fruit Teas",
    "Custom Tea Flavours & Infusions",
    "Custom Blended Tea",
    "Special Wellness Tea Formulations",
    "Specialty Tea Types"
  ];

  return (
    <main className="bg-black pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #1a4d2e 0%, #2d5016 100%)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/30" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            B2B Tea Supplier
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Our business to business services for tea brands.
          </h2>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative -mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path fill="#000000" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-10-768x432.jpg.webp"
                alt="Designing Ceylon tea packages"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Your Trusted B2B Partner in the Tea Industry</h3>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">Customized solutions for tea & beverage brands.</h3>
              <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                <p>
                  At Ceylon Plantation, we specialize in tailored business-to-business services that support tea brands around the world.
                </p>
                <p>
                  Whether you're a startup looking to launch your own label, a wholesaler sourcing bulk tea, or an established brand in need of a reliable co-packing partner, we offer flexible solutions to match your goals.
                </p>
                <p>
                  From blending and sourcing to packaging and international logistics, our expertise and infrastructure help streamline your supply chain and elevate your product offerings. With decades of industry experience and a fully integrated facility in Colombo, we're here to help you grow your tea business with confidence.
                </p>
              </div>

              {/* Tea Types Checklist */}
              <div className="grid grid-cols-1 gap-3">
                {teaTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-white/80">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Private Label Card */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300 text-center">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-1.webp"
                  alt="Private Label Tea"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-light text-white mb-4">Private Labeling Tea & White Labeling Tea</h2>
              <p className="text-white/70 mb-6">Private label (OEM) or white label tea for your own brand. Total outsourcing of tea manufacturing.</p>
              <Link 
                href="/b2b-services/private-label"
                className="inline-block px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
              >
                Private Label Tea
              </Link>
            </div>

            {/* Co-Packing Card */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300 text-center">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-2.webp"
                  alt="Co-Packing Tea"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-light text-white mb-4">Co-Packing & Co-Manufacturing Tea</h2>
              <p className="text-white/70 mb-6">Fulfilling Tea bagging, packing and warehousing requirements for your established brand.</p>
              <Link 
                href="/b2b-services/co-packing"
                className="inline-block px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
              >
                Co Packing Tea
              </Link>
            </div>

            {/* Bulk Tea Card */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300 text-center">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-3-e1714126056315.webp"
                  alt="Bulk Tea Supply"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-light text-white mb-4">Bulk Tea Sourcing & Wholesale Supply of Tea</h2>
              <p className="text-white/70 mb-6">Custom blended wholesale supply of Pure Ceylon Tea, direct from the Colombo Tea Auctions.</p>
              <Link 
                href="/b2b-services/bulk-tea"
                className="inline-block px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
              >
                Bulk Tea Supply
              </Link>
            </div>
          </div>

          {/* Contact CTA Section */}
          <div className="bg-zinc-900 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center">Let us create your brand of tea!</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <p>Ceylon Plantation (Pvt) Ltd.</p>
                    <p>144, Veediya Bandara Mawatha,</p>
                    <p>Mulleriyawa North,</p>
                    <p>Sri Lanka.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <a href="tel:+94112567350" className="text-white/80 hover:text-white transition-colors">
                    +94-11-2567350
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <a href="tel:+94112567305" className="text-white/80 hover:text-white transition-colors">
                    +94-112-567305
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link 
                  href="/contact"
                  className="px-12 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300 text-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
