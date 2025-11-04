'use client';

import Image from 'next/image';
import FooterSection from '@/components/footer-section';

export default function GlobalPresencePage() {
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
            Global Presence
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Delivering Pure Ceylon Tea, Fruit Teas, Herbal Teas & Wellness Teas, to the world.
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

      {/* International Exports Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Decades Of Growth</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">International exports.</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Today, Ceylon Plantation stands as a leading producer and exporter of bulk Pure Ceylon Tea, serving diverse markets worldwide. Our brand has successfully expanded to meet the tastes of tea drinkers across various regions. In addition to exporting premium Pure Ceylon Black Tea, we provide comprehensive private label OEM services and co-packing solutions across multiple continents.
                </p>
                <p>
                  In addition to Premium tea, we also produce pure herbal teas, pure fruit teas and a wide assortment of wellness teas. Our portfolio allows us to customise blends and create special blends and flavours based on your requirements.
                </p>
                <p>
                  Recognized among the top exporters in Sri Lanka, Ceylon Plantation has consistently maintained high standards of quality and efficiency for over a decade. Our ability to blend tradition with innovation has helped us grow a global footprint, with our products featured in more than 45 countries.
                </p>
                <p>
                  These milestones highlight our dedication to excellence and reinforce our position as a trusted name in the international tea industry.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-tarlton-tea-shop-sri-lanka-24-768x432.jpg.webp"
                alt="Ceylon Plantation gift tea collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* International Distribution Centers Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Where Can You Find Us?</h3>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">International distribution centers.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ceylon Plantation Tea Card */}
            <div className="bg-black rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-40">
                  <Image
                    src="https://venturetea.com/wp-content/uploads/2025/05/home-tea-bags-3-e1746618806550.png.webp"
                    alt="Ceylon Plantation tea bags"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Ceylon Plantation Tea
              </h3>
              <p className="text-white/70 text-center leading-relaxed text-sm">
                Romania, Panama, China, Azerbaijan, Kyrgyzstan, Czech Republic, Slovakia, USA, Hong Kong, Gambia, Ghana, Guinea, Ivory Coast, Taiwan, Latvia, Lithuania, Poland, Estonia, Germany, Mongolia, New Zealand, Chile
              </p>
            </div>

            {/* Bulk Tea Card */}
            <div className="bg-black rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-40">
                  <Image
                    src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-3-e1714126056315.webp"
                    alt="Bulk Tea from Sri Lanka"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Bulk Tea
              </h3>
              <p className="text-white/70 text-center leading-relaxed text-sm">
                Vietnam, Azerbaijan, Albania, Kosovo, Taiwan, Germany, France, United Kingdom, Czech Republic, Kuwait, Macedonia, UAE, USA, Latvia, Jordan, China, Australia, Chile, Brazil, Oman, Qatar
              </p>
            </div>

            {/* Private Label Card */}
            <div className="bg-black rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-40">
                  <Image
                    src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-1.webp"
                    alt="Private Label Tea"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Private Label
              </h3>
              <p className="text-white/70 text-center leading-relaxed text-sm">
                Brazil, Azerbaijan, Belgium, Kuwait, Kosovo, Macedonia, Saudi Arabia, China, Poland, United Kingdom, Gambia, UAE, USA, Canada, Bahrain, Senegal, Angola, Guinea, Ivory Coast, Chile, Brazil, Oman, Qatar
              </p>
            </div>

            {/* Co-Packing Card */}
            <div className="bg-black rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-40">
                  <Image
                    src="https://venturetea.com/wp-content/uploads/2023/09/pure-ceylon-tea-packaging-company-colombo-2.webp"
                    alt="Co-Packing Tea"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center">
                Co-Packing
              </h3>
              <p className="text-white/70 text-center leading-relaxed text-sm">
                Poland, United Kingdom, Gambia, UAE, Guinea, Ivory Coast, Brazil, Azerbaijan, Belgium, Kuwait, Kosovo, Macedonia, Saudi Arabia, China, USA, Canada, Bahrain, Senegal, Angola
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
