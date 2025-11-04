'use client';

import { useEffect, useRef } from 'react';
import HeroSection from '@/components/hero-section';
import HighlightSection from '@/components/highlight-section';
import AchievementsSection from '@/components/achievements-section';
import ServicesSection from '@/components/services-section';
import WhatWeDoSection from '@/components/what-we-do-section';
import CertificationsSection from '@/components/certifications-section';
import FooterSection from '@/components/footer-section';

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <div ref={(el) => (sectionsRef.current[0] = el)} className="animate-section">
        <HighlightSection />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="animate-section">
        <AchievementsSection />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="animate-section">
        <ServicesSection />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} className="animate-section">
        <WhatWeDoSection />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)} className="animate-section">
        <CertificationsSection />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)} className="animate-section">
        <FooterSection />
      </div>
    </main>
  );
}
