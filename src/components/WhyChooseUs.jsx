import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Asesmen Kebutuhan',
    description:
      'Kami memulai dengan analisis mendalam terhadap gap kompetensi, budaya organisasi, dan target bisnis klien melalui wawancara, survei, dan focus group discussion.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sesi Asesmen dan Presentasi Pelatihan',
    reverse: false, // Teks di kiri, Gambar di kanan
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Modul Kustom',
    description:
      'Tim ahli kami merancang kurikulum dan modul pelatihan yang sepenuhnya disesuaikan dengan industri, tantangan, dan target kompetensi spesifik organisasi Anda.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Diskusi dan Perancangan Modul Kustom',
    reverse: true, // Gambar di kiri, Teks di kanan
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Full Practice & Evaluasi',
    description:
      'Implementasi pelatihan dengan porsi praktik 70% menggunakan simulasi, role-play, dan studi kasus nyata, disertai evaluasi pre & post training yang terukur.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Praktik Pelatihan dan Evaluasi Catatan',
    reverse: false, // Teks di kiri, Gambar di kanan
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Pendampingan & Sertifikasi',
    description:
      'Pasca pelatihan, kami memberikan pendampingan implementasi di tempat kerja dan penerbitan sertifikasi resmi yang diakui secara nasional maupun internasional.',
    image:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Buku Pedoman dan Dokumen Sertifikasi',
    reverse: true, // Gambar di kiri, Teks di kanan
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2140] tracking-tight">
            Mengapa Memilih Kibarnesia?
          </h2>
        </div>

        {/* List Alternating Rows */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                step.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Kolom Teks */}
              <div
                className={`lg:col-span-6 ${
                  step.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Header Item: Icon Box & Large Number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0D254C] flex items-center justify-center shadow-md shadow-blue-950/20">
                    {step.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-300">
                    {step.number}
                  </span>
                </div>

                {/* Judul Langkah */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D2140] mb-4">
                  {step.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Kolom Gambar */}
              <div
                className={`lg:col-span-6 ${
                  step.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg border border-slate-100 bg-slate-100 group aspect-[16/10]">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradien halus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}