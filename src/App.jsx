import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import Pillars from './components/Pillars';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E1A2C] font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white scroll-smooth">
      {/* 1. Navigasi */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Logo Klien Marquee (Bergerak Kanan ke Kiri) */}
        <ClientMarquee />

        {/* 4. Tiga Pilar Nilai Utama */}
        <Pillars />

        {/* 5. Program Pengembangan SDM dengan Filter Tab */}
        <Programs />

        {/* 6. Mengapa Memilih Kibarnesia? (Alur 01 - 04) */}
        <WhyChooseUs />

        {/* 7. Paket Harga */}
        <Pricing />

        {/* 8. Galeri Portofolio (7 Foto Slide Right Otomatis) */}
        <PortfolioGallery />

        {/* 9. Kotak Info Kantor & Formulir Konsultasi */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}