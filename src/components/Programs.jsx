import React, { useState } from 'react';

const categories = [
  'Leadership',
  'HR & People Development',
  'Soft Skills',
  'Business Coaching',
  'Sektoral',
];

const programData = {
  Leadership: [
    {
      id: 1,
      title: 'Leadership Transformation Program',
      description:
        'Membangun pemimpin adaptif yang mampu mengelola perubahan organisasi dan menginspirasi tim lintas generasi.',
    },
    {
      id: 2,
      title: 'Executive Leadership Masterclass',
      description:
        'Program intensif untuk eksekutif senior dalam pengambilan keputusan strategis dan manajemen krisis.',
    },
    {
      id: 3,
      title: 'Supervisory Management Skills',
      description:
        'Membekali supervisor dengan keterampilan coaching, delegasi, dan manajemen kinerja tim.',
    },
    {
      id: 4,
      title: 'Team Building & Organizational Culture',
      description:
        'Membangun sinergi tim yang solid melalui pendekatan experiential learning dan simulasi lapangan.',
    },
  ],
  'HR & People Development': [
    {
      id: 5,
      title: 'Strategic Talent Management',
      description:
        'Merancang arsitektur suksesi, retensi talenta kunci, dan pemetaan kompetensi terintegrasi.',
    },
    {
      id: 6,
      title: 'KPI & Performance Appraisal Design',
      description:
        'Menyusun metrik penilaian kinerja objektif berbasis OKR dan KPI yang mendorong produktivitas.',
    },
  ],
  'Soft Skills': [
    {
      id: 7,
      title: 'High-Impact Business Communication',
      description:
        'Teknik komunikasi persuasif, negosiasi tingkat lanjut, dan presentasi efektif untuk profesional.',
    },
    {
      id: 8,
      title: 'Critical Thinking & Problem Solving',
      description:
        'Metodologi terstruktur dalam memecahkan masalah kompleks dan pengambilan keputusan berbasis data.',
    },
  ],
  'Business Coaching': [
    {
      id: 9,
      title: 'Executive 1-on-1 Coaching',
      description:
        'Pendampingan intensif bagi C-level untuk memetakan visi, performa individu, dan kepemimpinan strategis.',
    },
    {
      id: 10,
      title: 'Group Business Acceleration',
      description:
        'Fasilitasi coaching kelompok untuk alignment sasaran bisnis antar kepala divisi dan manajer tim.',
    },
  ],
  Sektoral: [
    {
      id: 11,
      title: 'Hospitality & Service Excellence',
      description:
        'Pelatihan standar layanan premium yang disesuaikan khusus untuk industri perhotelan dan retail.',
    },
    {
      id: 12,
      title: 'Manufacturing Operational Leadership',
      description:
        'Pengembangan kapasitas manajerial di lini produksi industri manufaktur dan continuous improvement.',
    },
  ],
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState('Leadership');
  const activePrograms = programData[activeTab] || programData['Leadership'];

  return (
    <section id="program" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2140] tracking-tight mb-4">
            Program Pengembangan SDM
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih program sesuai kebutuhan organisasi Anda — semua dapat dikustomisasi penuh untuk konteks bisnis Anda.
          </p>
        </div>

        {/* Tab Kategori Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0D254C] text-white shadow-md shadow-blue-950/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid Kartu Program (2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {activePrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Kartu & Icon */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="mt-1 text-slate-700 group-hover:text-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4v16" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0D2140] leading-snug">
                    {prog.title}
                  </h3>
                </div>

                {/* Deskripsi */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed ml-8">
                  {prog.description}
                </p>
              </div>

              {/* Tautan Aksi */}
              <div className="mt-6 ml-8">
                <a
                  href="#konsultasi"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-600 group/link transition-colors"
                >
                  <span>Detail Program</span>
                  <span className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}