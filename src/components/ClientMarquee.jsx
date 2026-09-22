// File: src/components/ClientMarquee.jsx
import React from 'react';
// Import data dari file yang baru dibuat
import { clients } from '../data/clientData';

export default function ClientMarquee() {
  return (
    <section className="bg-white py-12 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm sm:text-base font-medium text-slate-500 tracking-wide">
          Telah dipercaya oleh berbagai korporasi nasional
        </p>
      </div>

      {/* Marquee Track Container dengan efek Fade di Kiri & Kanan */}
      <div className="relative w-full overflow-hidden mask-linear">
        {/* Subtle Gradient Shadow Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Kontainer yang di-animasikan secara kontinu */}
        <div className="animate-marquee">
          {/* Loop Set 1 */}
          <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
            {clients.map((client) => (
              <div
                key={`first-${client.id}`}
                className="w-44 sm:w-52 h-24 sm:h-28 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-center p-4 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex-shrink-0"
              >
                {client.render()}
              </div>
            ))}
          </div>

          {/* Loop Set 2 (Duplikasi untuk efek seamless tanpa putus) */}
          <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10" aria-hidden="true">
            {clients.map((client) => (
              <div
                key={`second-${client.id}`}
                className="w-44 sm:w-52 h-24 sm:h-28 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-center p-4 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex-shrink-0"
              >
                {client.render()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}