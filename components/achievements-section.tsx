'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  isVisible: boolean;
}

function AnimatedNumber({ value, suffix = '', duration = 2000, delay = 0, isVisible }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuad(progress));

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, duration, delay]);

  return <>{count}{suffix}</>;
}

export default function AchievementsSection() {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-200 pb-12 mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-4 h-4 bg-green-600 rounded-sm transform -rotate-12 flex-shrink-0 mt-1"></div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Our Impact</p>
              <p className="text-lg text-gray-600">Excellence in Every Leaf</p>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            {splitText('Behind every cup tells a story of quality')}
          </h2>
          
          <h5 className="text-xl text-gray-600 font-light">
            {splitText('Delivering premium Ceylon tea across continents with unwavering commitment to excellence')}
          </h5>
        </div>

        {/* Performance Snapshot */}
        <div className="mb-16">
          <p className="text-center text-gray-600 text-lg mb-8">Performance Snapshot</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
            }}>
              <p className="text-gray-500 text-sm mb-3">Countries Served</p>
              <h3 className="text-6xl md:text-7xl font-medium text-gray-800">
                <AnimatedNumber value={45} suffix="+" isVisible={isVisible} duration={2000} delay={200} />
              </h3>
            </div>
            
            <div className="text-center" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s'
            }}>
              <p className="text-gray-500 text-sm mb-3">Tea Varieties</p>
              <h3 className="text-6xl md:text-7xl font-medium text-gray-800">
                <AnimatedNumber value={120} suffix="+" isVisible={isVisible} duration={2000} delay={300} />
              </h3>
            </div>
            
            <div className="text-center" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s'
            }}>
              <p className="text-gray-500 text-sm mb-3">Quality Certifications</p>
              <h3 className="text-6xl md:text-7xl font-medium text-gray-800">
                <AnimatedNumber value={15} suffix="+" isVisible={isVisible} duration={2000} delay={400} />
              </h3>
            </div>
            
            <div className="text-center" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s'
            }}>
              <p className="text-gray-500 text-sm mb-3">Years of Heritage</p>
              <h3 className="text-6xl md:text-7xl font-medium text-gray-800">
                <AnimatedNumber value={75} isVisible={isVisible} duration={2000} delay={500} />
              </h3>
            </div>
          </div>
        </div>

        {/* Award Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-4 mb-6" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s'
          }}>
            <div className="w-4 h-4 bg-green-600 rounded-sm transform -rotate-12 flex-shrink-0 mt-1"></div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">BEST QUALITY TEA EXPORTER 2024</p>
          </div>
          
          <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s'
          }}>
            Ceylon Tea Excellence Award
          </h4>
          
          <p className="text-gray-600 text-lg mb-6 max-w-3xl" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s'
          }}>
            Recognized for our commitment to sustainable farming practices, superior quality control, and delivering the finest Ceylon tea to global markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s'
            }}>
              <p className="text-sm text-gray-500 mb-2">Export Growth</p>
              <h3 className="text-5xl font-medium text-gray-800">
                <AnimatedNumber value={42} suffix="%" isVisible={isVisible} duration={2000} delay={600} />
              </h3>
            </div>
            
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s'
            }}>
              <p className="text-sm text-gray-500 mb-2">Customer Satisfaction</p>
              <h3 className="text-5xl font-medium text-gray-800">
                <AnimatedNumber value={98} suffix="%" isVisible={isVisible} duration={2000} delay={700} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
