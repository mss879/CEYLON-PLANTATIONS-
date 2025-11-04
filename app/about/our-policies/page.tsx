'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import FooterSection from '@/components/footer-section';

export default function OurPoliciesPage() {
  const policies = [
    {
      title: "Dissemination of Information",
      href: "#"
    },
    {
      title: "Freedom of Association",
      href: "#"
    },
    {
      title: "Gender Equality",
      href: "#"
    },
    {
      title: "Environmental",
      href: "#"
    },
    {
      title: "Social & Welfare",
      href: "#"
    },
    {
      title: "Privacy",
      href: "#"
    }
  ];

  return (
    <main className="bg-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #1a4d2e 0%, #2d5016 100%)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/30" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 py-24">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Our policies.</h2>
            <p className="text-white/80 leading-relaxed mb-12">
              Our organization proudly upholds a diverse set of corporate policies, each crafted with a keen focus on our commitment to responsible corporate citizenship. We have implemented robust environmental policies, underscoring our dedication to sustainable practices that reduce our ecological footprint. Gender equality is a fundamental pillar of our corporate ethos, with policies in place to foster an inclusive and empowering work environment for all. Our information policies prioritize data security and ethical handling, safeguarding sensitive information with unwavering diligence. Furthermore, our social policies reflect our deep-rooted commitment to community welfare, aiming to make a positive impact on society at large. Lastly, our welfare policies prioritize the well-being of our employees, ensuring a supportive and nurturing workplace where everyone can thrive. Together, these policies define our holistic approach to responsible business practices, striving for a better future for all stakeholders.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8">Click the links below to read more.</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {policies.map((policy, index) => (
                <Link
                  key={index}
                  href={policy.href}
                  className="group flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-emerald-500/50"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/90 group-hover:text-white text-lg font-light">
                    {policy.title}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-200 text-center">
                For detailed policy documents and inquiries, please <Link href="/contact" className="underline hover:text-emerald-300 transition-colors">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
