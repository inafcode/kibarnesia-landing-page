import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Program Pelatihan', href: '#program' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Paket', href: '#paket' },
    { name: 'Portofolio', href: '#portofolio' },
  ];

  return (
    <nav className="w-full bg-[#0E1A2C] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0">
            <a href="#beranda" className="flex flex-col">
              <span className="text-2xl font-extrabold text-white tracking-wide">
                Kibarnesia
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
                Consulting & Training SDM
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6288210131313"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1524] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#konsultasi"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full mt-4 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}