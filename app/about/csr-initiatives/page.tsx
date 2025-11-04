'use client';

import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/footer-section';

export default function CSRInitiativesPage() {
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
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            Giving back to our community
          </h2>
          <h2 className="text-2xl md:text-3xl font-light text-emerald-400 mb-6">
            Nourishing Justice
          </h2>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            A CSR Initiative by Ceylon Plantation & Leads Sri Lanka.
          </h1>
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
              <h3 className="text-lg text-emerald-500 mb-4 font-light tracking-wide">Our Commitment Beyond Tea</h3>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Supporting children at the Juvenile Magistrate Court through care, nutrition and hope.</h2>
              <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                <p>
                  At Ceylon Plantation, our responsibility goes far beyond producing Pure Ceylon Tea. We believe in creating lasting value for our communities, especially for children who deserve care, dignity, and a fair chance at life. Through our CSR initiatives, we channel our resources and passion toward uplifting lives and building a more compassionate future.
                </p>
              </div>
              <h3 className="text-xl font-light text-white mb-4">To know more information or to contribute towards their mission, please visit the LEADS website.</h3>
              <Link 
                href="https://leads.lk/"
                target="_blank"
                rel="nofollow"
                className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
              >
                View the Project
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://venturetea.com/wp-content/uploads/2025/09/venture-tea-csr-project-04.jpg.webp"
                alt="CSR projects by Ceylon Plantation together with Leads Sri Lanka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="py-0">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src="https://venturetea.com/wp-content/uploads/2025/09/csr-banner-02-scaled.jpg.webp"
            alt="CSR banner"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Nourishing Justice Project */}
            <div className="bg-black rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-4">The Nourishing Justice Project</h2>
              <h3 className="text-xl font-light text-emerald-500 mb-6">Launched on Children's Day, 1st October 2025</h3>
              <p className="text-white/80 leading-relaxed">
                Every day, many children attend hearings at the Juvenile Magistrate Court without having had a proper meal. They face long, stressful proceedings that can leave them exhausted and vulnerable. To address this need, Ceylon Plantation, together with LEADS, launched the Nourishing Justice Project. This initiative provides every child attending court with a nutritious snack, ensuring not only physical nourishment but also a gesture of care and hope during a difficult moment in their lives.
              </p>
            </div>

            {/* Creating Real Change */}
            <div className="bg-black rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-6">Creating Real Change</h2>
              <p className="text-white/80 leading-relaxed">
                Through this programme, approximately 550 children each month benefit from nutritional support, while also gaining access to counselling and psychosocial services for emotional well-being. By addressing both physical and emotional needs, Ceylon Plantation aims to create a safer, healthier, and more compassionate environment for children navigating the justice system.
              </p>
            </div>

            {/* Partnership with LEADS */}
            <div className="bg-black rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-6">In Partnership with LEADS Sri Lanka</h2>
              <div className="relative w-full h-24 mb-6">
                <Image
                  src="https://venturetea.com/wp-content/uploads/2025/09/leads-logo-2.jpg.webp"
                  alt="LEADS Sri Lanka logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                The Nourishing Justice Project is made possible through our partnership with LEADS, a respected organization dedicated to child protection and development in Sri Lanka. Together, we combine resources, expertise, and a shared vision of justice with care — ensuring that children are not left unseen or unsupported.
              </p>
            </div>

            {/* Together for a Better Tomorrow */}
            <div className="bg-black rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-6">Together for a Better Tomorrow</h2>
              <p className="text-white/80 leading-relaxed">
                This project reflects Ceylon Plantation's commitment to meaningful social responsibility and to investing in the well-being of future generations. As we continue our journey, we remain dedicated to creating opportunities where care, community, and justice meet. Updates on the impact of this initiative will be shared throughout the year, as we work to make a lasting difference, one child at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
