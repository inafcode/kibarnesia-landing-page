import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Penggerak Utama Sistem',
    description:
      'Manusia adalah mesin penggerak utama setiap organisasi. Kami memastikan SDM Anda memiliki kompetensi, motivasi, dan mindset yang tepat untuk mendorong sistem bisnis ke level berikutnya.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Akselerator Pertumbuhan',
    description:
      'Program kami dirancang bukan sekadar pelatihan — melainkan katalisator nyata pertumbuhan bisnis. Setiap modul dikustomisasi untuk menghasilkan dampak terukur pada produktivitas dan revenue.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'High-Ownership Culture',
    description:
      'Kami membantu organisasi Anda membangun budaya kerja berbasis ownership tinggi, di mana setiap individu merasa bertanggung jawab penuh terhadap hasil dan kemajuan perusahaan.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="keunggulan" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2140] tracking-tight mb-4">
            Tiga Pilar Nilai Utama Kami
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pendekatan holistik kami menempatkan manusia sebagai aset terpenting yang perlu dikembangkan secara berkelanjutan.
          </p>
        </div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Kartu: Icon & Nomor Urut */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0D254C] flex items-center justify-center shadow-md shadow-blue-950/20 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-slate-400 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Judul Pilar */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0D2140] mb-4">
                  {pillar.title}
                </h3>

                {/* Penjelasan Konten */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Indikator Aksen Bawah saat di-hover */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0D254C] group-hover:text-orange-500 transition-colors">
                <span>Pelajari Selengkapnya</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}