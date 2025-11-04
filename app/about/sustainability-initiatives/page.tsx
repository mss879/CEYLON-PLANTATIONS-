'use client';

import Image from 'next/image';
import FooterSection from '@/components/footer-section';

export default function SustainabilityInitiativesPage() {
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
            Sustainability Initiatives
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Dedicated to sustainable & eco friendly practices.
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

      {/* Our Commitment Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Our Commitment</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Milestones in our sustainability journey</h2>
              <p className="text-white/80 leading-relaxed">
                Ceylon Plantation (Pvt) Ltd is actively committed to environmental sustainability and responsible business practices. Through our membership and support the Rainforest Alliance, contribute to environmental preservation, improve the livelihoods of farmers and forest communities, promote human rights and gender equality, and address climate change challenges.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/01/venture-tea-and-tarlton-tea-certifications-2-768x428.jpg.webp"
                alt="Ceylon Plantation International Certifications"
                fill
                className="object-contain bg-white/5 p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Power Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide text-center">Sustainable Power</h3>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 text-center">100% solar powered office & factory</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                With our latest investment of over Rs. 100 Million in renewable energy, we generate 100% of our energy through solar power and have earned the prestigious LEED Gold certification, to step forward in our dedication and initiative to deliver long term sustainability based growth.
              </p>
              <p>
                With 1091 solar panels covering 2800 sq M of roof, we generate approximately 68,500 units of electricity each month. This capacity helps us to offset 50.5 Tons of CO2 per month.
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 max-w-5xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://venturetea.com/wp-content/uploads/2023/10/venture-tea-colombo-solar-powered-tea-factory-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-colors duration-300 border border-white/40">
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rainforest Alliance */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-6">Rainforest alliance member.</h2>
              <p className="text-white/80 leading-relaxed">
                Ceylon Plantation (Pvt) Ltd is actively committed to environmental sustainability and responsible business practices. Through our membership and support the Rainforest Alliance, contribute to environmental preservation, improve the livelihoods of farmers and forest communities, promote human rights and gender equality, and address climate change challenges.
              </p>
            </div>

            {/* Water Saving Equipment */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-6">Water saving equipment.</h2>
              <p className="text-white/80 leading-relaxed">
                In line with our steadfast commitment to sustainability, we have taken significant steps to equip our facilities with state-of-the-art water-saving dispensers. This comprehensive approach deals with conserving water resources. These water-saving dispensers are strategically placed across our premises, ensuring that every aspect of our operations, from manufacturing to daily usage, aligns with our sustainability goals. By utilizing cutting-edge technology, we've optimized water consumption, reducing it to the bare minimum. This not only minimizes our environmental impact but also highlights our commitment to responsible resource management.
              </p>
            </div>

            {/* Wastewater Purification */}
            <div className="bg-zinc-900 rounded-2xl p-8 md:col-span-2">
              <h2 className="text-3xl font-light text-white mb-6">Waste water purification.</h2>
              <p className="text-white/80 leading-relaxed">
                Our unwavering commitment to sustainability drove us to install cutting-edge wastewater purification infrastructure. This exemplifies our resolute dedication to curtailing our ecological footprint significantly. By using state-of-the-art technology, we ensure that the water used in our building undergoes a rigorous purification process. This not only minimizes environmental harm but also maximizes the efficient utilization of this vital resource.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
