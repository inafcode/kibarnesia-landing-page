import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0D254C] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Kolom Utama Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Kolom 1: Profil Brand */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-black text-white tracking-wide mb-1">
              Kibarnesia
            </h3>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-4">
              Consulting & Training SDM
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              &quot;Empowering Your Human Capital&quot; — mitra terpercaya dalam pengembangan SDM dan transformasi organisasi di Indonesia.
            </p>
          </div>

          {/* Kolom 2: Program */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Program
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#program" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">HR & People Development</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Soft Skills</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Business Coaching</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Sektoral</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kantor Kami */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Kantor Kami
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="text-orange-400 text-xs">📍</span>
                <span>Jakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400 text-xs">📍</span>
                <span>Pontianak</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400 text-xs">📍</span>
                <span>Makasar</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <a href="tel:088210131313" className="hover:text-white transition-colors">
                  0882-1013-1313
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <a href="mailto:info@kibarnesia.co.id" className="hover:text-white transition-colors">
                  info@kibarnesia.co.id
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-400">
          <p>© 2024 Kibarnesia Consulting & Training SDM. Hak Cipta Dilindungi.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}