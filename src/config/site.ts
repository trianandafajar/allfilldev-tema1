export const siteConfig = {
  name: "AgriHub",
  description: "AgriHub mendampingi petani dan pelaku usaha tani lewat konsultasi, teknologi panen, dan solusi tanam yang berkelanjutan.",
  language: "id",
  locale: "id_ID",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const sitePages = [
  { path: "/", title: "Beranda", description: siteConfig.description },
  {
    path: "/tentang",
    title: "Tentang Kami",
    description: "Kenali AgriHub: tim, nilai, dan layanan kami dalam mendampingi petani menuju hasil panen yang lebih baik.",
  },
  {
    path: "/kontak",
    title: "Kontak",
    description: "Hubungi AgriHub lewat alamat, telepon, email, atau formulir untuk konsultasi dan pertanyaan seputar layanan kami.",
  },
  {
    path: "/layanan",
    title: "Layanan",
    description: "Layanan AgriHub untuk petani: solusi tanam hijau, teknologi panen, konsultasi lapangan, dan pertanian berbasis data.",
  },
  {
    path: "/galeri",
    title: "Galeri",
    description: "Galeri proyek AgriHub bersama kelompok tani: panen, kebun organik, hidroponik, kompos, dan irigasi.",
  },
  {
    path: "/blog",
    title: "Blog",
    description: "Artikel AgriHub seputar budidaya, panen, tanah, dan cerita petani dari berbagai daerah.",
  },
  {
    path: "/faq",
    title: "FAQ",
    description: "Jawaban atas pertanyaan yang paling sering diajukan seputar AgriHub, layanan pendampingan, pelatihan, dan budidaya.",
  },
  {
    path: "/syarat-dan-ketentuan",
    title: "Syarat dan Ketentuan",
    description: "Syarat dan ketentuan penggunaan situs dan layanan AgriHub.",
  },
  {
    path: "/kebijakan-privasi",
    title: "Kebijakan Privasi",
    description: "Cara AgriHub mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  },
] as const;
