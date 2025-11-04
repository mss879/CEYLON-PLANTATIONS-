'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} style={{ whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            style={{
              display: 'inline-block',
              opacity: isVisible ? 1 : 0.001,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: `opacity 0.5s ease ${(wordIndex * 0.05 + charIndex * 0.02)}s, transform 0.5s ease ${(wordIndex * 0.05 + charIndex * 0.02)}s`
            }}
          >
            {char}
          </span>
        ))}
        {' '}
      </span>
    ));
  };

  const certifications = [
    { name: 'Pure Ceylon Tea', region: 'Global' },
    { name: 'SGS', region: 'Global' },
    { name: 'GMP', region: 'Global' },
    { name: 'HACCP', region: 'Global' },
    { name: 'ISO', region: 'Global' },
    { name: 'BRCGS', region: 'Europe' },
    { name: 'LEED Gold', region: 'USA' },
    { name: 'Rainforest Alliance', region: 'Global' },
    { name: 'Vegan', region: 'Global' },
    { name: 'FDA', region: 'USA' },
    { name: 'EU', region: 'Europe' },
    { name: 'USDA', region: 'USA' },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 pb-12 mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-4 h-4 bg-green-600 rounded-sm transform -rotate-12 flex-shrink-0 mt-1"></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Global Standards</p>
              <p className="text-lg text-gray-600">Certified Excellence</p>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            {splitText('Our International Certifications')}
          </h2>
          
          <h5 className="text-xl text-gray-600 font-light">
            {splitText('Certified to Meet the Quality requirements of your region')}
          </h5>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              At <span className="font-semibold text-gray-900">CEYLON PLANTATIONS</span>, certifications aren't just stamps, they're systems that power how we work every day. Our compliance framework is designed to integrate with evolving international regulations, giving our partners peace of mind as they expand into new markets. From farm to final pack, every step of our process is validated against globally recognized food safety and quality benchmarks. We don't just meet the standards, we build our own internal checks that go beyond them, because staying ahead is part of who we are.
            </p>
          </div>
        </motion.div>

        {/* Certifications Marquee */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide">Recognized Worldwide</p>
            <p className="text-lg text-gray-600">Certified for USA, Europe, Japan and beyond</p>
          </motion.div>

          {/* Certification Grid with stagger */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center hover:border-green-500 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <p className="font-bold text-gray-900 text-sm mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {cert.name}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                        {cert.region}
                      </span>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            All certifications are regularly audited and maintained to the highest standards, ensuring compliance with international food safety and quality regulations.
          </p>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.7 }}
          className="h-1 bg-gradient-to-r from-green-600 via-green-500 to-transparent origin-left mt-16"
        ></motion.div>
      </div>
    </section>
  );
}
