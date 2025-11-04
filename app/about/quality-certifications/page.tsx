'use client';

import Image from 'next/image';
import FooterSection from '@/components/footer-section';

export default function QualityCertificationsPage() {
  const certifications = [
    {
      name: "Lion Logo for Pure Ceylon Tea",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-pure-ceylon-tea-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "Ozone Friendly Tea",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-ozone-friendly-ceylon-tea-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "BREEAM Certification 0061-2929",
      image: "https://venturetea.com/wp-content/uploads/2023/06/venture-tea-breeam-quality-certification-4-300x300.jpg.webp",
      link: "https://bregroup.com/products/breeam/"
    },
    {
      name: "USDA Organic Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-usda-organic-certification-300x300.jpg.webp",
      link: "https://www.usda.gov/topics/organic"
    },
    {
      name: "LEED Gold Certificate",
      image: "https://venturetea.com/wp-content/uploads/2023/09/venture-tea-leed-building-certification-300x300.jpg.webp",
      link: "https://www.gbig.org/activities/leed-1000065814/dashboard"
    },
    {
      name: "EU Organic Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-eu-organic-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "The Vegan Society Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-vegan-quality-certification-300x300.jpg.webp",
      link: "https://www.vegansociety.com"
    },
    {
      name: "BRCGS Global Food Safety Standards Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-brcgs-food-safety-certification-300x300.jpg.webp",
      link: "https://www.brcgs.com/our-standards/food-safety/"
    },
    {
      name: "Rainforest Alliance Chain of Custody Certification",
      image: "https://venturetea.com/wp-content/uploads/2025/01/rainforest-alliance-1-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "GMP : Good Manufacturing Practices Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-sgs-gmp-good-manufacturing-process-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "FSSC 22000 - Food Safety Systems certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-sgs-fssc-22000-food-safety-system-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "HACCP - Hazard Analysis & Critical Control Points Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-sgs-haccp-hazard-analysis-critical-control-point-certification-300x300.jpg.webp",
      link: "#"
    },
    {
      name: "ISO 22000 - Food Safety Standards Certification",
      image: "https://venturetea.com/wp-content/uploads/2022/01/venture-tea-sgs-iso-22000-food-safety-management-system-certification-300x300.jpg.webp",
      link: "#"
    }
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
            Quality Certifications
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Quality certifications for your products.
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

      {/* Quality Standards Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">International Quality Standards</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">The quality standards you can expect for your private label tea products.</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  At Ceylon Plantation, we uphold the highest quality standards for all tea, herbal teas, fruit teas, wellness teas and custom blends that leave our factory.
                </p>
                <p>
                  We do this by implementing strict prevention, detection, and quality control procedures throughout every stage of production. From sourcing premium raw materials and managing our production and packaging processes to maintaining secure storage facilities and ensuring the health and safety of our team, quality is our priority. Our modern factory is equipped with advanced technology at multiple checkpoints to guarantee that every product meets rigorous standards.
                </p>
                <p>
                  Our commitment, expertise, and professionalism are reflected in the international certifications we have earned, clear evidence of our dedication to delivering excellence.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-72-768x432.jpg.webp"
                alt="Packaging process at Ceylon Plantation"
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
              src="https://www.youtube.com/embed/RU1baJ_5bsE?mute=1&loop=1&playlist=RU1baJ_5bsE"
              title="Ceylon Plantation Quality Control"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Our Quality Assurance</h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/80">International Standard Certifications</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-black rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-light text-white leading-snug">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
