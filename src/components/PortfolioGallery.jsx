import React, { useState, useEffect, useRef } from 'react';

// Koleksi 7 foto dokumentasi pelatihan sesuai tema desain
const photos = [
  {
    id: 1,
    title: 'Financial & Corporate Briefing',
    category: 'Executive In-House',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Product Leadership Summit',
    category: 'Keynote & Conference',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Organizational Stage Talk',
    category: 'Culture & Motivation',
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Interactive Case Study Workshop',
    category: 'Supervisory Training',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Cross-Department Alignment',
    category: 'Team Building',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Focus Group Discussion & Strategy',
    category: 'Strategic Planning',
    url: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'Official Certification Handover',
    category: 'Closing & Awarding',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  },
];

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = photos.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay loop: Berjalan otomatis setiap 3.2 detik
  // Jeda otomatis jika kursor berada di atas galeri
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  // Kalkulasi posisi relatif setiap kartu terhadap foto yang sedang aktif
  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="portofolio"
      className="bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2140] tracking-tight mb-4">
            Momen Pelatihan Kami
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Semua harga bersifat estimasi. Hubungi kami untuk penawaran yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.
          </p>
        </div>

        {/* Stage Slider: Seluruh kartu bergeser secara fisik dengan CSS transform */}
        <div className="relative h-[440px] sm:h-[480px] lg:h-[530px] w-full max-w-5xl mx-auto flex items-center justify-center">
          {photos.map((photo, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Pengaturan posisi dan transformasi geser fisik
            let transformClass = '';
            let opacityClass = '';
            let zIndex = 0;
            let pointerEvents = 'pointer-events-none';

            if (isCenter) {
              // Posisi Tengah (Aktif)
              transformClass = 'translate-x-0 scale-100';
              opacityClass = 'opacity-100';
              zIndex = 30;
              pointerEvents = 'pointer-events-auto';
            } else if (isLeft) {
              // Posisi Kiri
              transformClass = '-translate-x-[75%] sm:-translate-x-[85%] lg:-translate-x-[92%] scale-[0.82]';
              opacityClass = 'opacity-70 hover:opacity-95';
              zIndex = 20;
              pointerEvents = 'pointer-events-auto cursor-pointer';
            } else if (isRight) {
              // Posisi Kanan
              transformClass = 'translate-x-[75%] sm:translate-x-[85%] lg:translate-x-[92%] scale-[0.82]';
              opacityClass = 'opacity-70 hover:opacity-95';
              zIndex = 20;
              pointerEvents = 'pointer-events-auto cursor-pointer';
            } else if (offset < -1) {
              // Di luar layar sisi kiri
              transformClass = '-translate-x-[150%] scale-70';
              opacityClass = 'opacity-0';
              zIndex = 10;
            } else {
              // Di luar layar sisi kanan
              transformClass = 'translate-x-[150%] scale-70';
              opacityClass = 'opacity-0';
              zIndex = 10;
            }

            return (
              <div
                key={photo.id}
                onClick={() => {
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                }}
                style={{ zIndex }}
                className={`absolute top-0 bottom-0 m-auto w-[82vw] sm:w-[360px] lg:w-[410px] h-[380px] sm:h-[440px] lg:h-[490px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease- ${transformClass} ${opacityClass} ${pointerEvents}`}
              >
                <div className="relative w-full h-full bg-slate-200">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Efek Dark Backdrop pada kartu samping */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-slate-950/25 transition-colors" />
                  )}

                  {/* Keterangan Teks pada kartu tengah */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                      <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        {photo.category}
                      </span>
                      <h3 className="text-white text-sm sm:text-base font-bold">
                        {photo.title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol Geser Navigasi Bawah & Indikator 7 Titik */}
        <div className="flex items-center justify-center gap-6 mt-8 sm:mt-12">
          {/* Tombol Panah Kiri */}
          <button
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 7 Titik Indikator Foto */}
          <div className="flex items-center gap-2">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Lihat foto ke-${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 h-2.5 bg-orange-500'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Tombol Panah Kanan */}
          <button
            onClick={nextSlide}
            aria-label="Foto Berikutnya"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}