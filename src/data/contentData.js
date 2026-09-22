// src/data/contentData.js

/* 
  Jika memakai file lokal di src/assets/content/:
  import heroImg from '../assets/content/hero-session.jpg';
*/

export const heroContent = {
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
  alt: 'Corporate Training & Consulting Session Kibarnesia',
};

export const whyChooseUsSteps = [
  {
    number: '01',
    title: 'Asesmen Kebutuhan',
    description:
      'Kami memulai dengan analisis mendalam terhadap gap kompetensi, budaya organisasi, dan target bisnis klien melalui wawancara, survei, dan focus group discussion.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sesi Asesmen dan Presentasi Pelatihan',
    reverse: false,
  },
  {
    number: '02',
    title: 'Modul Kustom',
    description:
      'Tim ahli kami merancang kurikulum dan modul pelatihan yang sepenuhnya disesuaikan dengan industri, tantangan, dan target kompetensi spesifik organisasi Anda.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Diskusi dan Perancangan Modul Kustom',
    reverse: true,
  },
  {
    number: '03',
    title: 'Full Practice & Evaluasi',
    description:
      'Implementasi pelatihan dengan porsi praktik 70% menggunakan simulasi, role-play, dan studi kasus nyata, disertai evaluasi pre & post training yang terukur.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Praktik Pelatihan dan Evaluasi Catatan',
    reverse: false,
  },
  {
    number: '04',
    title: 'Pendampingan & Sertifikasi',
    description:
      'Pasca pelatihan, kami memberikan pendampingan implementasi di tempat kerja dan penerbitan sertifikasi resmi yang diakui secara nasional maupun internasional.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Buku Pedoman dan Dokumen Sertifikasi',
    reverse: true,
  },
];