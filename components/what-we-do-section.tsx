'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatWeDoSection() {
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

  const manufacturingItems = [
    'Black Tea & Green Tea',
    'Pure Herbal Tea & Wellness Tea',
    'Pure Fruit Teas',
    'Custom Flavours & Infusions',
    'Custom Blended Tea',
    'Wide variety of Tea Grades',
    'Specialty Tea Types',
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 pb-12 mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-4 h-4 bg-green-600 rounded-sm transform rotate-45 flex-shrink-0 mt-1"></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Our Approach</p>
              <p className="text-lg text-gray-600">We do tea differently</p>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            {splitText('What we do')}
          </h2>
          
          <h5 className="text-xl text-gray-600 font-light">
            {splitText('Crafting exceptional tea experiences through innovation and tradition')}
          </h5>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
                <p className="text-sm font-medium text-gray-700">What we do</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At CEYLON PLANTATIONS, we house one of the largest tea blending plants at our factory in Colombo and grade several thousands tea samples every week direct from the Colombo Tea Auctions. As one of the largest tea buyers, our benefits are passed on to our customers.
            </p>
          </motion.div>

          {/* What we manufacture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
                <p className="text-sm font-medium text-gray-700">What we manufacture</p>
              </div>
            </div>
            <ul className="space-y-4">
              {manufacturingItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="h-1 bg-gradient-to-r from-green-600 via-green-500 to-transparent origin-left"
        ></motion.div>
      </div>
    </section>
  );
}
