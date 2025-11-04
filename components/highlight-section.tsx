'use client';

import { useEffect, useRef, useState } from 'react';

export default function HighlightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const fullText = "From the lush highlands of Ceylon to your shelves, we cultivate, blend, and export with excellence delivering premium tea that reflects three generations of expertise.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 10); // Speed of typing (lower = faster)

      return () => clearInterval(typingInterval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 md:py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-4xl md:text-5xl leading-snug font-light"
          >
            {typedText}
            <span className="inline-block w-0.5 h-8 bg-green-500 ml-1 animate-pulse" 
                  style={{ opacity: typedText.length >= fullText.length ? 0 : 1 }}
            />
          </h3>
        </div>
      </div>
    </section>
  );
}
