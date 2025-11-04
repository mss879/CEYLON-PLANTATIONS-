'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import FooterSection from '@/components/footer-section';

export default function CoreValuesPage() {
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
            Who We Are
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Our mission, vision
          </h2>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto mt-2">
            & core values.
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

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">A better state of mind begins with a cup of tea.</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Who we are and why it matters.</h2>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Who We Are.</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Tea is our passion. Ceylon Plantation started its operation in 2005 with a handful of employees and it's growing each year by providing products and services to our business partners around the world.
                </p>
                <p>
                  Ceylon Plantation exports to all parts of the globe under our own Branded Tea, Private Label tea, Co-Packing products and Ceylon tea in Bulk Tea form.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-72-768x432.jpg.webp"
                alt="Ceylon Plantation factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus and Values Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* We Focus On 3 Things */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">We focus on 3 things.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Blending Excellence</h3>
                    <p className="text-white/70">
                      We create unique blends by combining traditional and wellness-driven ingredients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Perfecting Taste</h3>
                    <p className="text-white/70">
                      We never compromise on flavor. Our master blenders have spent years refining each recipe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Delivering Simplicity</h3>
                    <p className="text-white/70">
                      Tea is comforting, accessible, and universally loved. We make sure every cup reflects that.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Why it matters to us.</h2>
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Simply because we truly care about our customers, our employees and our community. They are at the center of all that we do. While our pride lies in the passionate work that is poured into our products out of the pure love for tea!
                </p>
                <blockquote className="text-2xl md:text-3xl font-light text-emerald-400 italic border-l-4 border-emerald-500 pl-6 py-4">
                  "Delivering the Highest Quality Pure Ceylon Tea to the World."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Our Vision</h1>
              <p className="text-white/80 leading-relaxed">
                At Ceylon Plantation, we are passionate about supplying our clients with the world's best tea products. Providing an exceptional tea experience is a key ingredient of our business. We continuously work to create the most unique and exciting flavour combinations, in order to offer our clients an extensive selection of teas.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Our Mission</h1>
              <p className="text-white/80 leading-relaxed">
                Our mission is to provide clients with high-quality products that create the true experience of tea. We aim to centralize our operations and provide our clients with the best service. Our extensive range of teas caters to customers who are as enthusiastic about tea as we are. We believe our products should provide value to our customers, employees and communities we work with. Therefore, we work extremely hard to build long-lasting relationships with the people who help produce our tea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
