"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { 
      name: "Factory", 
      href: "/factory",
      submenu: [
        { name: "OFFICE PREMISES", href: "/factory/office-premises" },
        { name: "TEA PACKING FACILITY", href: "/factory/tea-packing-facility" },
        { name: "TEA PACKING MACHINERY", href: "/factory/tea-packing-machinery" },
        { name: "TEA ROOMS & GRADING", href: "/factory/tea-rooms-grading" },
        { name: "TEA BLENDING", href: "/factory/tea-blending" },
        { name: "WAREHOUSING FACILITIES", href: "/factory/warehousing-facilities" },
      ]
    },
    { 
      name: "B2B Services", 
      href: "/b2b-services",
      submenu: [
        { name: "PRIVATE LABEL (OEM) TEA", href: "/b2b-services/private-label" },
        { name: "BULK TEA EXPORTS", href: "/b2b-services/bulk-tea" },
        { name: "CO-PACKING TEA", href: "/b2b-services/co-packing" },
      ]
    },
    { 
      name: "About", 
      href: "/about",
      submenu: [
        { name: "ABOUT US", href: "/about" },
        { name: "WHY CHOOSE US", href: "/about/why-choose-us" },
        { name: "GLOBAL PRESENCE", href: "/about/global-presence" },
        { name: "QUALITY CERTIFICATIONS", href: "/about/quality-certifications" },
        { name: "CORE VALUES", href: "/about/core-values" },
        { name: "OUR BUSINESS PROCESS", href: "/about/our-business-process" },
        { name: "B2B TEA SUPPLIER", href: "/about/b2b-tea-supplier" },
        { name: "CSR INITIATIVES", href: "/about/csr-initiatives" },
        { name: "SUSTAINABILITY INITIATIVES", href: "/about/sustainability-initiatives" },
        { name: "OUR POLICIES", href: "/about/our-policies" },
      ]
    },
    { name: "Ceylon Tea", href: "/ceylon-tea" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'top-0 px-0' : 'top-7 px-4'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled 
          ? 'flex items-center justify-between bg-black/95 backdrop-blur-md border-b border-white/20 px-8 py-3 rounded-b-2xl' 
          : 'flex items-center justify-between'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={90}
            className={`transition-all duration-300 ${
              isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'
            }`}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-transparent border-0 px-0 py-0' 
              : 'backdrop-blur-md bg-black/70 border border-white/20 rounded-lg px-8 py-4 shadow-lg'
          }`}>
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg 
                        className="inline-block ml-1 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown menu */}
                  {item.submenu && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-black border border-white/20 rounded-lg shadow-xl overflow-hidden">
                        <ul className="py-2">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.name}>
                              <Link
                                href={subitem.href}
                                className="block px-6 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200 text-sm font-light tracking-wide"
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-2"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="backdrop-blur-md bg-black/80 border border-white/20 rounded-2xl px-4 py-4 shadow-lg">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.name} className="border-b border-white/10 last:border-0">
                  <Link
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors duration-200 font-medium block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg 
                        className="inline-block ml-1 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <ul className="pl-4 pb-2">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.name}>
                          <Link
                            href={subitem.href}
                            className="text-white/70 hover:text-white transition-colors duration-200 text-sm block py-1.5 font-light"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
