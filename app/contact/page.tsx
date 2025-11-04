'use client';

import { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/footer-section';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <main className="min-h-screen bg-white pt-40 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">Contact us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info Section */}
          <div className="space-y-12">
            {/* Social Media */}
            <div className="bg-[#2B2D31] rounded-lg py-4 px-6">
              <div className="flex items-center gap-8">
                <h3 className="text-white text-xl font-normal">Follow us</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.x.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.threads.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Threads"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142l-.126 1.974a11.943 11.943 0 00-2.582-.122c-1.078.063-1.935.386-2.548.962-.579.545-.862 1.262-.818 2.076.046.852.434 1.534 1.093 1.92.582.34 1.335.474 2.185.39 1.193-.118 2.128-.57 2.784-1.344.652-.771 1.011-1.844 1.064-3.196l.016-.407c-.006-1.026-.11-1.894-.313-2.58-.201-.681-.527-1.23-.97-1.633-.443-.402-1.037-.686-1.767-.846a8.54 8.54 0 00-2.282-.135c-1.564.07-2.935.537-4.074 1.387-1.138.851-1.912 2.033-2.302 3.514-.39 1.48-.29 3.043.298 4.643.588 1.601 1.54 2.962 2.832 4.047 1.29 1.086 2.84 1.629 4.608 1.616z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/94777575501" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Whatsapp"
                    className="text-white hover:text-[#FA6F45] transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Managing Director */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium">Managing Director</p>
                    <p className="text-gray-600">Mr. Nihal Wijesinghe</p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-2">Address</p>
                    <p className="text-gray-600 leading-relaxed">
                      <span>Ceylon Plantations Colombo (Pvt) Ltd,</span><br />
                      <span>No. 58, Elie House Road,</span><br />
                      <span>Colombo 15,</span><br />
                      <span>Sri Lanka.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-1">Email</p>
                    <a 
                      href="mailto:info@ceylonplantationscolombo.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FA6F45] transition-all duration-300 inline-block"
                    >
                      info@ceylonplantationscolombo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotline */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-1">Hotline</p>
                    <a 
                      href="tel:+94777575501" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FA6F45] transition-all duration-300 inline-block"
                    >
                      +94 777 575 501
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Numbers */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-2">Office</p>
                    <div className="space-y-1">
                      <div>
                        <a 
                          href="tel:+94112326669" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#FA6F45] transition-all duration-300 inline-block"
                        >
                          +94 112 326 669
                        </a>
                      </div>
                      <div>
                        <a 
                          href="tel:+94112527007" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#FA6F45] transition-all duration-300 inline-block"
                        >
                          +94 112 527 007
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Viber / WhatsApp */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-1">Viber / WhatsApp</p>
                    <a 
                      href="https://wa.me/94777575501" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FA6F45] transition-all duration-300 inline-block"
                    >
                      +94 777 575 501
                    </a>
                  </div>
                </div>
              </div>

              {/* Fax */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-100 transform-none">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 35 35">
                      <path d="M30.143,32.4h-20.1a1.25,1.25,0,0,1,0-2.5h20.1a1.952,1.952,0,0,0,2.107-1.74V13.67a1.952,1.952,0,0,0-2.107-1.739,1.25,1.25,0,0,1,0-2.5A4.439,4.439,0,0,1,34.75,13.67V28.159A4.44,4.44,0,0,1,30.143,32.4Z"/>
                      <path d="M14.53,11.931H10.043a1.25,1.25,0,0,1,0-2.5H14.53a1.25,1.25,0,0,1,0,2.5Z"/>
                      <path d="M7.1,33.655H4.441A4.2,4.2,0,0,1,.25,29.464V11.129a4.2,4.2,0,0,1,4.191-4.19H7.1a4.2,4.2,0,0,1,4.191,4.19V29.464A4.2,4.2,0,0,1,7.1,33.655ZM4.441,9.439a1.692,1.692,0,0,0-1.691,1.69V29.464a1.692,1.692,0,0,0,1.691,1.691H7.1a1.693,1.693,0,0,0,1.691-1.691V11.129A1.693,1.693,0,0,0,7.1,9.439Z"/>
                      <path d="M28.657,16.612H14.886a1.25,1.25,0,0,1-1.25-1.25V2.6a1.25,1.25,0,0,1,1.25-1.25H28.657a1.25,1.25,0,0,1,1.25,1.25V15.362A1.25,1.25,0,0,1,28.657,16.612Zm-12.521-2.5H27.407V3.845H16.136Z"/>
                      <path d="M16.616,22.165a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                      <path d="M21.772,22.165a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                      <path d="M26.928,22.165a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                      <path d="M16.616,26.35a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                      <path d="M21.772,26.35a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                      <path d="M26.928,26.35a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-medium mb-1">Fax</p>
                    <p className="text-gray-600">+94 112 326 669</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-100 transform-none">
              <h5 className="text-black text-lg font-medium">
                Got a question, challenge, or idea?
              </h5>
              <p className="text-gray-600">
                Fill out the form — we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="opacity-100">
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-black placeholder:text-gray-500 px-4 py-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#FA6F45] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="opacity-100">
                <div className="relative">
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-black placeholder:text-gray-500 px-4 py-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#FA6F45] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Company Input */}
              <div className="opacity-100">
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-100 text-black placeholder:text-gray-500 px-4 py-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#FA6F45] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="opacity-100">
                <div className="relative">
                  <textarea
                    required
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-100 text-black placeholder:text-gray-500 px-4 py-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#FA6F45] focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Section */}
              <div className="space-y-6">
                <p className="text-center text-gray-600 text-sm">
                  <em>By submitting, you agree to our </em>
                  <Link href="/privacy-policy" className="text-[#FA6F45] hover:underline">
                    <em>Privacy Policy.</em>
                  </Link>
                </p>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    aria-label="Submit form"
                    className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <FooterSection />
    </>
  );
}
 