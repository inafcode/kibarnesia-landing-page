import React from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Rp 15 Jt',
    period: '/program',
    isPopular: false,
    features: [
      '1 Topik Pelatihan',
      'Maks. 25 Peserta',
      'Durasi 1 Hari',
      'Modul Standar',
      'Sertifikat Peserta',
      'Laporan Pelatihan',
    ],
  },
  {
    name: 'Professional',
    price: 'Rp 35 Jt',
    period: '/program',
    isPopular: false,
    features: [
      '3 Topik Pelatihan',
      'Maks. 50 Peserta',
      'Durasi 2 Hari',
      'Modul Kustomisasi',
      'Sertifikat Peserta',
      'Pre & Post Assessment',
      'Laporan Evaluasi Lengkap',
    ],
  },
  {
    name: 'Premium',
    badge: 'BEST VALUE',
    price: 'Rp 75 Jt',
    period: '/program',
    isPopular: true,
    features: [
      '5 Topik Pelatihan',
      'Peserta Tidak Terbatas',
      'Durasi 3 Hari',
      'Modul Full Kustomisasi',
      'Sertifikat + BNSP',
      'Pre & Post Assessment',
      '1:1 Coaching Session',
      'Laporan Komprehensif',
    ],
  },
  {
    name: 'Executive',
    price: 'Custom',
    period: 'hubungi kami',
    isPopular: false,
    features: [
      'Custom Topik Pelatihan',
      'Fleksibel Peserta',
      'Durasi Disesuaikan',
      'Modul Eksekutif',
      'Sertifikat Khusus',
      'Pendampingan Lanjutan',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="paket" className="bg-[#0B1A30] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 block">
            Paket Harga
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Pilih Paket yang Tepat untuk Organisasi Anda
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Semua harga bersifat estimasi. Hubungi kami untuk penawaran yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.
          </p>
        </div>

        {/* Grid 4 Kartu Harga */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-[#0E2242] border-2 border-orange-500 shadow-2xl shadow-orange-500/10 lg:-translate-y-2'
                  : 'bg-[#0E203B]/80 border border-white/10 hover:border-white/20 hover:bg-[#0E203B]'
              }`}
            >
              {/* Badge Best Value */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header Kartu: Nama & Harga */}
                <h3 className="text-lg font-bold text-white mb-3">{plan.name}</h3>
                <div className="mb-6 pb-6 border-b border-white/10">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold ${
                      plan.isPopular ? 'text-orange-400' : 'text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">{plan.period}</span>
                </div>

                {/* List Fitur */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.isPopular ? 'text-orange-400' : 'text-slate-300'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tombol Minta Estimasi */}
              <a
                href="https://wa.me/6288210131313"
                className={`w-full py-3 rounded-full text-center text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  plan.isPopular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white/5 hover:bg-white/15 text-white border border-white/15'
                }`}
              >
                Minta Estimasi
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}