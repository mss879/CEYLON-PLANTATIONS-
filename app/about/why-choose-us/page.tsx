'use client';

import Image from 'next/image';
import { CheckCircle2, Award, Globe, Shield } from 'lucide-react';
import FooterSection from '@/components/footer-section';

export default function WhyChooseUsPage() {
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
            Why Choose Ceylon Plantation as Your Partner
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Experience, reliability, and a commitment to quality.
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

      {/* What Makes Us Unique Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">What Makes Us Unique</h3>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Built on quality. Chosen for trust.</h2>
            <p className="text-white/80 leading-relaxed max-w-4xl">
              At Ceylon Plantation, what sets us apart isn't just what we produce, it's how we think. Our operations are built on a modular production model, allowing clients to scale rapidly without changing suppliers. We offer granular-level customization, from blend development to smart barcoding for traceability across logistics networks. Our in-house data tools help analyze market trends so brands can adapt their products to suit changing consumer preferences. It's not just about packing tea, it's about building resilient tea businesses that can thrive in a dynamic global marketplace.
            </p>
          </div>

          {/* Quality Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2025/07/Quality-Control-04.png.webp"
                  alt="Quality Control Icon"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Providing Premium Quality Tea and Packaging
              </h3>
              <p className="text-white/70 text-center leading-relaxed">
                We specialize in delivering premium Pure Ceylon Tea along with complete packaging solutions tailored to your brand. From tea selection to final presentation, every step is personally managed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2025/07/Quality-Control-03-150x150.png.webp"
                  alt="Quality Control Icon"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Among The Top 10 Private Label Tea Manufacturers
              </h3>
              <p className="text-white/70 text-center leading-relaxed">
                With years of experience, we are recognized among the leading private label tea manufacturers. We help businesses build successful tea brands with flexible, end-to-end production services.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2025/07/Quality-Control-08-150x150.png.webp"
                  alt="Quality Control Icon"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Conforming to International Food & Quality Standards
              </h3>
              <p className="text-white/70 text-center leading-relaxed">
                Our production process and factory premises follows strict international food safety and quality standards. Regular audits and certifications ensure we meet the requirements of global markets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2025/07/Quality-Control-16-150x150.png.webp"
                  alt="Quality Control Icon"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Trusted by a Global Client Base in over 45 Countries
              </h3>
              <p className="text-white/70 text-center leading-relaxed">
                We proudly serve a diverse network of clients in over 45 countries. Our customisation, consistency, service, and product quality have helped us become a trusted name worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
