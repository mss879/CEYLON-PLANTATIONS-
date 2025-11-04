'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FooterSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="w-full bg-gray-200 p-4 md:p-6">
      <div className="bg-[#161616] rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Footer Content Wrapper */}
        <div className="space-y-12 relative z-10">
          {/* Top Section */}
          <div className="space-y-8">
            {/* Hero Heading */}
            <div className="space-y-2">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-normal text-gray-200 tracking-tight leading-[0.8]">
                CEYLON
              </h2>
              <p className="text-2xl md:text-4xl font-light text-gray-200 tracking-tight">
                PLANTATIONS
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[2px] bg-[#111111]"></div>
          </div>

          {/* Center Section */}
          <div className="space-y-8">
            {/* CTA Section */}
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg md:text-xl text-gray-300">
                Let's build something great together — whether you have a project in mind or just want to connect, we'd love to hear from you.
              </p>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-4 group"
              >
                <div className="bg-gray-200 hover:bg-white transition-colors duration-300 px-8 py-4 rounded-lg">
                  <span className="text-[#111111] font-medium">Book a 15-min call</span>
                </div>
                <div className="bg-gray-200 hover:bg-white transition-colors duration-300 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" className="text-[#111111]">
                    <path d="M1 1.5L9 9.5M9 9.5V1.5M9 9.5H1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </Link>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8">
              {/* Sitemap */}
              <div className="space-y-4">
                <h3 className="text-sm text-gray-400 opacity-60 uppercase tracking-wider">Sitemap</h3>
                <nav className="space-y-3">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Factory', href: '/factory' },
                    { label: 'B2B Services', href: '/b2b-services' },
                    { label: 'About', href: '/about' },
                    { label: 'Ceylon Tea', href: '/ceylon-tea' },
                    { label: 'Contact', href: '/contact' }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block relative"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-gray-300 hover:text-white transition-all duration-300 ${
                        hoveredLink === link.label ? 'translate-x-1' : ''
                      } inline-block`}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-sm text-gray-400 opacity-60 uppercase tracking-wider">Services</h3>
                <nav className="space-y-3">
                  {[
                    { label: 'Private Label (OEM) Tea', href: '/b2b-services/private-label' },
                    { label: 'Bulk Tea Exports', href: '/b2b-services/bulk-tea-exports' },
                    { label: 'Co-Packing Tea', href: '/b2b-services/co-packing-tea' }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block relative"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-gray-300 hover:text-white transition-all duration-300 ${
                        hoveredLink === link.label ? 'translate-x-1' : ''
                      } inline-block`}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h3 className="text-sm text-gray-400 opacity-60 uppercase tracking-wider">Social</h3>
                <nav className="space-y-3">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                    { label: 'Twitter', href: 'https://twitter.com' },
                    { label: 'GitHub', href: 'https://github.com' }
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-gray-300 hover:text-white transition-all duration-300 ${
                        hoveredLink === link.label ? 'translate-x-1' : ''
                      } inline-block`}>
                        {link.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Other */}
              <div className="space-y-4">
                <h3 className="text-sm text-gray-400 opacity-60 uppercase tracking-wider">Other</h3>
                <nav className="space-y-3">
                  {[
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Terms of Service', href: '/terms' }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block relative"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-gray-300 hover:text-white transition-all duration-300 ${
                        hoveredLink === link.label ? 'translate-x-1' : ''
                      } inline-block`}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Credits */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span>Copyright</span>
                  <span>©</span>
                  <span>{new Date().getFullYear()}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Developed by</span>
                  <span>ARC AI</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Powered by</span>
                  <span>Next.js</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'Instagram', href: 'https://instagram.com', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { name: 'Twitter', href: 'https://twitter.com', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { name: 'GitHub', href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 fill-gray-300" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
