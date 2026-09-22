import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    participants: '',
    program: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Tentukan nomor WA Admin Kibarnesia
    // PASTIKAN menggunakan kode negara (62) tanpa tanda plus (+) atau angka 0 di depan.
const nomorWhatsAppTujuan = "6288210131313";

    // 2. Buat template pesan yang rapi (menggunakan template literal/backtick ` `)
    const templatePesan = `Halo Tim Kibarnesia, 
Saya ingin berkonsultasi mengenai program pengembangan SDM. 

Berikut adalah data diri saya:
- *Nama Lengkap:* ${formData.fullName}
- *Nama Perusahaan:* ${formData.companyName}
- *No. WhatsApp:* ${formData.whatsapp}
- *Estimasi Peserta:* ${formData.participants}
- *Program Diminati:* ${formData.program}

Mohon informasi lebih lanjut. Terima kasih.`;

    // 3. Ubah teks pesan menjadi format yang terbaca oleh URL browser
    const pesanEncoded = encodeURIComponent(templatePesan);

    // 4. Buat Link WhatsApp
    const linkWhatsApp = `https://wa.me/${nomorWhatsAppTujuan}?text=${pesanEncoded}`;

    // 5. Buka tab baru yang mengarah langsung ke WhatsApp
    window.open(linkWhatsApp, '_blank');

    // 6. Tetap jalankan animasi sukses di form website
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        whatsapp: '',
        participants: '',
        program: '',
      });
    }, 4000);
  };

  return (
    <section id="konsultasi" className="bg-[#F8FAFC] py-20 lg:py-28 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Sisi Kiri: Kotak Informasi Kontak & Kantor */}
          <div className="lg:col-span-6">
            <span className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2140] tracking-tight leading-tight mb-6">
              Siap Memulai Transformasi SDM Anda?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
              Tim konsultan kami siap berdiskusi tentang kebutuhan pengembangan SDM organisasi Anda. Konsultasi pertama gratis tanpa komitmen.
            </p>

            {/* List Alamat Kantor & Kontak */}
            <div className="space-y-6">
              {/* Jakarta */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0D2140]">Jakarta (Pusat)</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Jl. Sudirman Kav. 52-53, Senayan, Jakarta Pusat 10270
                  </p>
                </div>
              </div>

              {/* Pontianak */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0D2140]">Pontianak</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Jl. Ahmad Yani No. 88, Pontianak, Kalimantan Barat 78124
                  </p>
                </div>
              </div>

              {/* Makassar */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0D2140]">Makasar</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Jl. Perintis Kemerdekaan Km. 9, Tamalanrea, Makassar 90245
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 pt-2">
                <div className="text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@kibarnesia.co.id" className="text-xs sm:text-sm font-semibold text-[#0D2140] hover:text-orange-500 transition-colors">
                  info@kibarnesia.co.id
                </a>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Formulir Konsultasi Gratis */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0D2140] mb-6">
                Formulir Konsultasi Gratis
              </h3>

              {submitted ? (
                <div className="p-5 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-center">
                  <p className="font-bold text-sm">Permintaan berhasil terkirim!</p>
                  <p className="text-xs mt-1">Tim konsultan kami akan segera menghubungi nomor WhatsApp Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap anda"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D254C] focus:ring-1 focus:ring-[#0D254C] transition-colors"
                    />
                  </div>

                  {/* Nama Perusahaan */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="PT / CV / Instansi anda"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D254C] focus:ring-1 focus:ring-[#0D254C] transition-colors"
                    />
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08xx-xxxx-xxxx"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D254C] focus:ring-1 focus:ring-[#0D254C] transition-colors"
                    />
                  </div>

                  {/* Jumlah Peserta */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Jumlah Peserta
                    </label>
                    <input
                      type="text"
                      placeholder="Estimasi jumlah peserta"
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D254C] focus:ring-1 focus:ring-[#0D254C] transition-colors"
                    />
                  </div>

                  {/* Program yang Diminati */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Program yang Diminati
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D254C] focus:ring-1 focus:ring-[#0D254C] transition-colors text-slate-700 bg-white"
                    >
                      <option value="">Pilih program pelatihan</option>
                      <option value="Leadership Transformation Program">Leadership Transformation Program</option>
                      <option value="Executive Leadership Masterclass">Executive Leadership Masterclass</option>
                      <option value="Supervisory Management Skills">Supervisory Management Skills</option>
                      <option value="Team Building & Organizational Culture">Team Building & Organizational Culture</option>
                      <option value="Program Kustom Lainnya">Program Kustom Lainnya</option>
                    </select>
                  </div>

                  {/* Tombol Kirim */}
                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/30 cursor-pointer"
                  >
                    Kirim Permintaan Konsultasi
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}