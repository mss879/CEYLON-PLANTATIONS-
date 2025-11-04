'use client';

import Image from 'next/image';
import FooterSection from '@/components/footer-section';

export default function AboutPage() {
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
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Tea isn't just our business, it's our passion.
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

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">We do tea differently</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Ceylon Plantation began with a simple question: what if a single cup of tea could carry the essence of a country? That question turned into a mission: to take the world on a journey through Pure Ceylon Tea.
                </p>
                <p>
                  From our roots in Colombo, Sri Lanka, we've grown into one of the most trusted names in tea exports, helping shape over 45 brands around the globe. But our story isn't just about numbers, it's about relationships. With partners building brands from the ground up and with consumers seeking comfort and quality in every product we design for our clients.
                </p>
                <p>
                  Over the years, we've blended tradition with innovation, investing in one of the most advanced tea packaging facilities in South Asia while keeping the soul of Ceylon's tea heritage alive. Today, whether we're crafting bulk blends, premium gift boxes, or private label products, we remain grounded in our purpose: to deliver world-class tea, grown with care, packed with precision, and shared with pride.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-pure-ceylon-tea-sourcing-blending-testing-48-768x432.jpg.webp"
                alt="Tea grading at Ceylon Plantation factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AFt9tkKeW6w?mute=1&loop=1&playlist=AFt9tkKeW6w"
              title="Ceylon Plantation Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-tea-warehouse-in-venture-tea-12-768x432.jpg.webp"
                alt="Tea warehouse at Ceylon Plantation"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Strong Partnerships, Lasting Impact.</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Empowering brands worldwide with trusted relationships.</h2>
              <div className="text-white/80 leading-relaxed">
                <p>
                  At Ceylon Plantation, we believe that building strong, long-term relationships with our clients is just as important as delivering great tea. We work closely with each partner, understanding their goals and adapting our services to meet their unique brand needs. From sourcing the freshest Pure Ceylon Tea to blending, packaging, and private labeling, our team ensures a collaborative and transparent process every step of the way. With a flexible model that gives our clients full control over their product and identity, we're proud to be more than just a supplier – we're a trusted partner in their growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Two Decades of Passion & Progress</h3>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Our history and growth.</h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-left">
            <p>
              Over the past two decades, Ceylon Plantation has steadily grown into one of Sri Lanka's most trusted and recognized names in tea exports, private label co-packing, and value-added tea manufacturing. What began as a focused initiative to share the richness of Pure Ceylon Tea with the world has evolved into a full-service tea export business that manages everything from sourcing and blending to design, packaging, and distribution. With a strong foundation built on transparency, consistency, and deep-rooted industry expertise, our journey has been marked by a clear commitment to innovation and client success.
            </p>
            <p>
              Our team brings together decades of experience in sourcing high-quality teas through the Colombo Tea Auctions, expertly grading and curating custom blends, and delivering finished products to meet a wide range of market preferences. Over the years, we've diversified our portfolio to include black tea, green tea, herbal infusions, flavored teas, wellness blends, and other value-added products, all tailored to the needs of private label partners and global distributors.
            </p>
            <p>
              In response to growing international demand and evolving consumer trends, Ceylon Plantation has recently expanded its operations with the development of a state-of-the-art factory and headquarters. Designed to meet the highest international safety, hygiene, and efficiency standards, this modern facility houses dedicated units for blending, packing, warehousing, and shipping, all under one roof. It significantly increases our capacity while ensuring greater speed, consistency, and flexibility in fulfilling diverse client needs.
            </p>
            <p>
              As part of our forward-looking strategy, we continue to venture into new markets and have made it a priority to represent the Ceylon Plantation brand and its products at leading global food and beverage exhibitions and trade conventions. This active participation helps us stay ahead of trends, build strong international networks, and keep our finger on the pulse of the global tea industry.
            </p>
            <p>
              Today, Ceylon Plantation is not just a tea exporter – it's a partner in growth for businesses around the world looking to build successful tea brands with confidence, creativity, and a strong foundation in quality.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
