import React from 'react';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-[#0E1A2C] overflow-hidden py-16 lg:py-24">
      {/* Background Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#60A5FA 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Teks (Kiri) */}
          <div className="lg:col-span-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <span className="w-1 h-3.5 bg-orange-500 rounded-sm"></span>
                <span className="w-1 h-3.5 bg-orange-500 rounded-sm"></span>
                <span className="w-1 h-3.5 bg-orange-500 rounded-sm"></span>
              </div>
              <span className="text-orange-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
                Expert-Led Corporate Training Solutions
              </span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              In-House Training & Konsultan{' '}
              <span className="text-white block mt-1">Pengembangan SDM</span>
            </h1>

            {/* Deskripsi */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Tingkatkan produktivitas, kepemimpinan, dan budaya kerja organisasi Anda
              melalui program pelatihan in-house yang dirancang khusus berdasarkan
              kebutuhan riil dan asesmen terukur.
            </p>

            {/* Tombol Aksi */}
            <div>
              <a
                href="#program"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
              >
                Explore Program
              </a>
            </div>
          </div>

          {/* Kolom Visual & Kartu Statistik (Kanan) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[460px] aspect-[4/4]">
              
              {/* Bingkai Luar Aksen Orange */}
              <div className="absolute inset-0 rounded-[45%_55%_48%_52%_/_52%_48%_52%_48%] border-2 border-orange-500/80 -rotate-2 transform scale-102 pointer-events-none transition-transform duration-700 hover:rotate-0" />

              {/* Wadah Gambar Lengkung */}
              <div className="relative w-full h-full rounded-[45%_55%_48%_52%_/_52%_48%_52%_48%] overflow-hidden shadow-2xl border-4 border-[#0E1A2C] bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate Training & Consulting Session"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge 1: 200+ Client (Kanan Atas) */}
              <div className="absolute -top-3 right-6 sm:right-12 bg-white/95 backdrop-blur-md text-slate-800 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                <span className="font-extrabold text-sm sm:text-base text-slate-900">200+</span>
                <span className="text-slate-400">|</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">Client</span>
              </div>

              {/* Floating Badge 2: 500+ Sesi Pelatihan (Kiri Tengah) */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                <span className="font-extrabold text-sm sm:text-base text-slate-900">500+</span>
                <span className="text-slate-400">|</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">Sesi Pelatihan</span>
              </div>

              {/* Floating Badge 3: 4+ Program Khusus (Kanan Bawah) */}
              <div className="absolute -bottom-4 right-8 sm:right-12 bg-white/95 backdrop-blur-md text-slate-800 px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 text-left hover:-translate-y-1 transition-transform duration-300">
                <p className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">4+</p>
                <p className="text-xs font-semibold text-slate-600">Program Khusus</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}