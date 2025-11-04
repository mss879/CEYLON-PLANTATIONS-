'use client';

import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/footer-section';

export default function OurBusinessProcessPage() {
  const processSteps = [
    {
      number: 1,
      title: "Reach out to us.",
      description: "Contact us via our contact methods with your interest in brief detail, along with our broad requirements, timeline and MOQ's."
    },
    {
      number: 2,
      title: "Costing approvals.",
      description: "Rough estimates and payment methods are discussed for approval in order to begin sampling and production process."
    },
    {
      number: 3,
      title: "Establishing tea standards.",
      description: "Tea Samples are matched or created from scratch to suit the characteristics you require your requirement."
    },
    {
      number: 4,
      title: "Branding, product & packaging design.",
      description: "Branding, packaging and Tea Samples are created and matched in order to finalize the final product or range for your requirement."
    },
    {
      number: 5,
      title: "Sample creation & final approvals.",
      description: "Samples are finalized and approved by your organization in order to commence operations at our brand new production facility."
    },
    {
      number: 6,
      title: "Production & delivery.",
      description: "Commencement of production and packaging. Once completed the consignment will be shipped via pre agreed method."
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
            Our Process
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto">
            Our seamless process for your tea imports.
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

      {/* Getting Started Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Getting Started With Your Tea Orders</h1>
              <h2 className="text-2xl md:text-3xl font-light text-emerald-500 mb-6">When your tea company starts to work with us.</h2>
              <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                <p>
                  At Ceylon Plantation, we provide products and services at various stages of your tea company requirements. With the assistance of our experienced and qualified professionals, we are able to step in and create consistent, quality certified tea, in numerous types of packaging and branding within the right timeframe. Whether it is bulk blending, purchasing, branding and design to marketing, our state of the art factory is suited for SME's as well as large multinational requirements.
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">Our quality assurance.</h2>
              <p className="text-white/80 leading-relaxed">
                At Ceylon Plantation, we are passionate about supplying our clients with the world's best tea products. Providing an exceptional tea experience is a key ingredient of our business. We continuously work to create the most unique and exciting flavour combinations, in order to offer our clients an extensive selection of teas.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-37-768x432.jpg.webp"
                alt="Warehouse at Ceylon Plantation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">Our process.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="bg-black rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300"
              >
                <div className="mb-6">
                  <Image
                    src={`https://venturetea.com/wp-content/uploads/2024/04/numbers-a-${step.number}.svg`}
                    alt={`Step ${step.number}`}
                    width={80}
                    height={80}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-black rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">What next?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/factory"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300 font-light"
              >
                Tour our Factory
              </Link>
              <span className="text-white/60 text-xl">or</span>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 font-light border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
