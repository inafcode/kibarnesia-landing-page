import React, { useState, useEffect, useRef } from 'react';
// 1. Mengimpor data dari folder terpusat src/data/
import { portfolioPhotos } from '../data/portofolioData';

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Menggunakan data terpusat
  const photos = portfolioPhotos;
  const total = photos.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay geser otomatis tiap 3.2 detik (jeda saat hover)
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

  // Hitung posisi relatif kartu terhadap kartu yang sedang aktif
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

        {/* Stage Slider 3D */}
        <div className="relative h-[440px] sm:h-[480px] lg:h-[530px] w-full max-w-5xl mx-auto flex items-center justify-center">
          {photos.map((photo, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            let transformClass = '';
            let opacityClass = '';
            let zIndex = 0;
            let pointerEvents = 'pointer-events-none';

            if (isCenter) {
              transformClass = 'translate-x-0 scale-100';
              opacityClass = 'opacity-100';
              zIndex = 30;
              pointerEvents = 'pointer-events-auto';
            } else if (isLeft) {
              transformClass = '-translate-x-[75%] sm:-translate-x-[85%] lg:-translate-x-[92%] scale-[0.82]';
              opacityClass = 'opacity-70 hover:opacity-95';
              zIndex = 20;
              pointerEvents = 'pointer-events-auto cursor-pointer';
            } else if (isRight) {
              transformClass = 'translate-x-[75%] sm:translate-x-[85%] lg:translate-x-[92%] scale-[0.82]';
              opacityClass = 'opacity-70 hover:opacity-95';
              zIndex = 20;
              pointerEvents = 'pointer-events-auto cursor-pointer';
            } else if (offset < -1) {
              transformClass = '-translate-x-[150%] scale-[0.7]';
              opacityClass = 'opacity-0';
              zIndex = 10;
            } else {
              transformClass = 'translate-x-[150%] scale-[0.7]';
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
                className={`absolute top-0 bottom-0 m-auto w-[82vw] sm:w-[360px] lg:w-[410px] h-[380px] sm:h-[440px] lg:h-[490px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out ${transformClass} ${opacityClass} ${pointerEvents}`}
              >
                <div className="relative w-full h-full bg-slate-200">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Backdrop Gelap untuk Foto Samping */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-slate-950/25 transition-colors" />
                  )}

                  {/* Keterangan Teks Foto Tengah */}
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

        {/* Tombol Geser Navigasi Bawah & 7 Titik */}
        <div className="flex items-center justify-center gap-6 mt-8 sm:mt-12">
          {/* Tombol Kiri */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 7 Titik Indikator */}
          <div className="flex items-center gap-2">
            {photos.map((_, idx) => (
              <button
                key={idx}
                type="button"
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

          {/* Tombol Kanan */}
          <button
            type="button"
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