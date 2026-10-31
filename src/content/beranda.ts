import type { AboutProps } from "@/components/sections/about"
import type { BlogProps } from "@/components/sections/blog"
import type { BrandsProps } from "@/components/sections/brands"
import type { ContactProps } from "@/components/sections/contact"
import type { FaqProps } from "@/components/sections/faq"
import type { FeaturesProps } from "@/components/sections/features"
import type { GalleryProps } from "@/components/sections/gallery"
import type { HeroProps } from "@/components/sections/hero"
import type { PricingProps } from "@/components/sections/pricing"
import type { ServicesProps } from "@/components/sections/services"
import type { StatsProps } from "@/components/sections/stats"
import type { TestimonialsProps } from "@/components/sections/testimonials"

const video = {
  label: "Tonton Video",
  title: "Video profil AgriHub",
  videoId: "ZP1XyLYraAA",
}

export const hero: HeroProps = {
  eyebrow: "Pertanian terbaik",
  titleLead: "Temukan seni",
  titleAccent: ["bercocok tanam"],
  description:
    "Lebih dari satu dekade kami mendampingi petani dengan layanan terbaik dan rekam jejak yang terbukti di lapangan.",
  cta: { label: "Selengkapnya", href: "/tentang" },
  video,
  image: { src: "/images/banner/hero-3.png", alt: "Petani merawat tanaman di kebun", width: 843, height: 730 },
}

export const services: ServicesProps = {
  eyebrow: "Layanan Kami",
  title: "Menyuburkan negeri dari benih hingga meja makan",
  items: [
    {
      title: "Solusi Tanam Hijau",
      href: "/layanan",
      image: { src: "/images/service/solusi-tanam-hijau.jpg", alt: "Sistem irigasi tetes di lahan sayur" },
      icon: "/images/icon/water-hose.svg",
    },
    {
      title: "Teknologi Panen untuk Petani",
      href: "/layanan",
      image: { src: "/images/service/teknologi-panen-petani.jpg", alt: "Petani memanen hasil kebun" },
      icon: "/images/icon/ser-flower.svg",
    },
    {
      title: "Konsultan Profesional",
      href: "/layanan",
      image: { src: "/images/service/konsultan-pertanian.jpg", alt: "Konsultan memeriksa peta lahan" },
      icon: "/images/icon/map-plant.svg",
    },
  ],
}

export const about: AboutProps = {
  eyebrow: "Mengapa Kami",
  title: "Bertani sepenuh hati, menghidupi dengan tujuan",
  description:
    "Kami bekerja bersama petani lokal untuk meningkatkan hasil panen lewat teknik budidaya ramah lingkungan, pendampingan langsung di lahan, dan akses pasar yang adil. Setiap program disusun mengikuti musim dan kondisi lahan setempat.",
  progress: [
    { label: "Inovasi Tani Cerdas", value: 70 },
    { label: "Perawatan Tanaman", value: 80 },
  ],
  cta: { label: "Selengkapnya", href: "/tentang" },
  image: { src: "/images/about/about-v3.png", alt: "Petani dan penyuluh berdiskusi di ladang", width: 1254, height: 1254 },
  badge: {
    icon: "/images/icon/agriculture.svg",
    title: "Aktivitas Pertanian",
    text: "Pendampingan langsung di lahan",
  },
  video,
}

export const gallery: GalleryProps = {
  eyebrow: "Galeri Kami",
  title: "Membawa hasil bumi terbaik ke meja Anda",
  items: [
    {
      title: "Bertani untuk Masa Depan yang Lebih Baik",
      subtitle: "Layanan Tani Sejahtera",
      href: "/galeri",
      image: { src: "/images/gallery/1.png", alt: "Hamparan sawah saat panen", width: 555, height: 424 },
      revealOnHover: true,
    },
    {
      title: "Panen Raya di Lahan Organik",
      subtitle: "Kebun Organik Lembang",
      href: "/galeri",
      image: { src: "/images/gallery/2.png", alt: "Petani memanen sayur organik", width: 630, height: 424 },
    },
    {
      title: "Kebun Sayur Hidroponik",
      subtitle: "Kelompok Tani Makmur",
      href: "/galeri",
      image: { src: "/images/gallery/3.png", alt: "Instalasi hidroponik berisi selada", width: 555, height: 424 },
      revealOnHover: true,
    },
  ],
}

export const features: FeaturesProps = {
  eyebrow: "Keunggulan Kami",
  title: "Tumbuh kuat, ladang menghidupi masa depan",
  description:
    "Kami memadukan pengetahuan petani turun-temurun dengan teknologi tepat guna agar hasil panen meningkat tanpa merusak tanah.",
  items: [
    "Tumbuh bersama pertanian",
    "Bertani untuk masa depan yang lebih baik",
    "Dari ladang ke meja, pertanian itu penting",
  ],
  cta: { label: "Selengkapnya", href: "/layanan" },
  image: { src: "/images/about/feature-thumb.png", alt: "Petani memegang hasil panen segar", width: 680, height: 673 },
  decoration: { src: "/images/element/feature-green2.png", width: 432, height: 695 },
}

export const pricing: PricingProps = {
  eyebrow: "Paket Harga",
  title: "Menuai impian, satu panen demi satu panen",
  decoration: { src: "/images/element/pricing-animal.png", width: 268, height: 246 },
  plans: [
    {
      name: "Dasar",
      price: "Rp99rb",
      period: "/bulan",
      features: [
        { label: "Panduan menghindari kesalahan tanam", included: true },
        { label: "Perencanaan usaha tani", included: true },
        { label: "Pemantauan kondisi lahan", included: false },
        { label: "Laporan hasil panen bulanan", included: false },
      ],
      cta: { label: "Pilih Paket", href: "/kontak" },
    },
    {
      name: "Sempurna",
      price: "Rp199rb",
      period: "/bulan",
      features: [
        { label: "Panduan menghindari kesalahan tanam", included: true },
        { label: "Perencanaan usaha tani", included: true },
        { label: "Pemantauan kondisi lahan", included: true },
        { label: "Laporan hasil panen bulanan", included: false },
      ],
      cta: { label: "Pilih Paket", href: "/kontak" },
      popularBadge: "Populer",
    },
    {
      name: "Lengkap",
      price: "Rp299rb",
      period: "/bulan",
      features: [
        { label: "Panduan menghindari kesalahan tanam", included: true },
        { label: "Perencanaan usaha tani", included: true },
        { label: "Pemantauan kondisi lahan", included: true },
        { label: "Laporan hasil panen bulanan", included: true },
      ],
      cta: { label: "Pilih Paket", href: "/kontak" },
    },
  ],
}

export const stats: StatsProps = {
  separator: { src: "/images/icon/count-animal.svg", width: 67, height: 59 },
  items: [
    { value: 200, suffix: "+", label: "Anggota tim" },
    { value: 20, suffix: "+", label: "Penghargaan" },
    { value: 10, suffix: "rb+", label: "Proyek selesai" },
    { value: 900, suffix: "+", label: "Ulasan klien" },
  ],
}

export const faq: FaqProps = {
  eyebrow: "FAQ",
  title: "Seberapa sering tanaman perlu disiram?",
  description:
    "Temukan jawaban atas pertanyaan yang paling sering kami terima seputar budidaya, perawatan tanaman, dan program pendampingan kami.",
  video,
  decoration: { src: "/images/element/faq-element.png", width: 294, height: 399 },
  items: [
    {
      question: "Bagaimana cara memulai kebun sayur?",
      answer:
        "Mulailah dari lahan kecil dengan sinar matahari minimal enam jam sehari. Siapkan media tanam yang gembur, pilih sayuran yang mudah seperti kangkung, bayam, atau cabai, lalu siram secara teratur pada pagi atau sore hari.",
    },
    {
      question: "Bagaimana bertani saat musim hujan?",
      answer:
        "Pastikan drainase lahan baik agar akar tidak tergenang. Gunakan bedengan yang ditinggikan, pilih varietas tahan penyakit jamur, dan kurangi penyiraman tambahan karena air hujan sudah mencukupi.",
    },
    {
      question: "Bagaimana mencegah hama pada tanaman?",
      answer:
        "Lakukan rotasi tanaman, jaga kebersihan lahan dari gulma, dan pantau tanaman setiap hari. Manfaatkan pestisida nabati atau musuh alami terlebih dahulu sebelum memakai bahan kimia.",
    },
    {
      question: "Apa saja syarat mengikuti pelatihan?",
      answer:
        "Pelatihan terbuka untuk petani, pelaku usaha tani, dan masyarakat umum. Anda cukup mendaftar lewat formulir kontak, lalu tim kami akan menghubungi untuk menentukan jadwal dan lokasi.",
    },
  ],
}

export const brands: BrandsProps = {
  label: "Mitra dan pendukung AgriHub",
  items: [
    { src: "/images/sponsor/sp1.png", alt: "Logo mitra 1", width: 77, height: 81 },
    { src: "/images/sponsor/sp2.png", alt: "Logo mitra 2", width: 127, height: 81 },
    { src: "/images/sponsor/sp3.png", alt: "Logo mitra 3", width: 113, height: 82 },
    { src: "/images/sponsor/sp4.png", alt: "Logo mitra 4", width: 112, height: 80 },
    { src: "/images/sponsor/sp5.png", alt: "Logo mitra 5", width: 119, height: 81 },
  ],
}

const avatar = { src: "/images/testimonial/re2.png", width: 79, height: 79 }

export const testimonials: TestimonialsProps = {
  eyebrow: "Testimoni",
  titleLines: ["Segar dari ladang", "untuk semua"],
  dotLabel: "Lihat testimoni",
  items: [
    {
      name: "Siti Rahayu",
      role: "Petani Padi, Karawang",
      quote:
        "Setelah ikut pendampingan AgriHub, hasil panen padi saya naik hampir sepertiga. Penyuluhnya datang langsung ke sawah dan sabar menjelaskan setiap langkah.",
      avatar: { ...avatar, alt: "Foto Siti Rahayu" },
    },
    {
      name: "Budi Santoso",
      role: "Pemilik Kebun Hortikultura, Lembang",
      quote:
        "Jadwal tanam dan pemantauan lahan dari AgriHub membuat kebun saya jauh lebih teratur. Sayuran kami kini rutin dipasok ke pasar modern.",
      avatar: { ...avatar, alt: "Foto Budi Santoso" },
    },
    {
      name: "Dewi Lestari",
      role: "Ketua Kelompok Tani, Magelang",
      quote:
        "Pelatihan pengendalian hama ramah lingkungan sangat berguna. Anggota kelompok kami sekarang berani mengurangi pestisida kimia.",
      avatar: { ...avatar, alt: "Foto Dewi Lestari" },
    },
    {
      name: "Agus Pratama",
      role: "Pengusaha Agribisnis, Malang",
      quote:
        "Konsultasi AgriPro membantu saya menyusun rencana usaha dan menghitung modal dengan lebih realistis. Usaha kami berkembang dua kali lipat dalam setahun.",
      avatar: { ...avatar, alt: "Foto Agus Pratama" },
    },
  ],
  image: { src: "/images/testimonial/testimonial.png", alt: "Pelanggan AgriHub tersenyum di kebun", width: 600, height: 595 },
  highlight: {
    icon: { src: "/images/icon/apple-count.png", width: 65, height: 65 },
    value: 15,
    suffix: "+ Tahun",
    label: "Pelanggan Puas",
  },
}

export const blog: BlogProps = {
  eyebrow: "Blog Kami",
  title: "Menanam masa depan yang berkelanjutan untuk semua",
  posts: [
    {
      title: "Dari Ladang ke Meja: Cerita Pertanian Kita",
      excerpt: "Pertanian dan perkebunan adalah sektor penting yang melibatkan jutaan orang",
      href: "/blog",
      date: "22 Jan",
      comments: "5 Komentar",
      author: "Oleh admin",
      readMore: "Baca Selengkapnya",
      image: { src: "/images/blog/dari-ladang-ke-meja.jpg", alt: "Hasil panen sayur di atas meja", width: 410, height: 306 },
    },
    {
      title: "Segarnya Hasil Panen untuk Semua",
      excerpt: "Pertanian dan perkebunan adalah sektor penting yang melibatkan jutaan orang",
      href: "/blog",
      date: "22 Jan",
      comments: "5 Komentar",
      author: "Oleh admin",
      readMore: "Baca Selengkapnya",
      image: { src: "/images/blog/segarnya-hasil-panen.jpg", alt: "Keranjang berisi sayuran segar", width: 410, height: 306 },
    },
    {
      title: "Menggali Potensi Pertanian Indonesia",
      excerpt: "Pertanian dan perkebunan adalah sektor penting yang melibatkan jutaan orang",
      href: "/blog",
      date: "22 Jan",
      comments: "5 Komentar",
      author: "Oleh admin",
      readMore: "Baca Selengkapnya",
      image: { src: "/images/blog/menggali-potensi-pertanian-indonesia.jpg", alt: "Lahan pertanian di pegunungan", width: 410, height: 306 },
    },
  ],
}

export const contact: ContactProps = {
  newsletter: {
    titleLead: "Dapatkan Kabar Terbaru,",
    titleAccent: "Berlangganan",
    titleTail: "Newsletter Kami",
    emailLabel: "Alamat email",
    emailPlaceholder: "Masukkan email Anda",
    submit: "Berlangganan",
  },
  form: {
    eyebrow: "Kontak",
    title: "Hubungi Kami",
    nameLabel: "Nama",
    emailLabel: "Email",
    subjectLabel: "Subjek",
    messageLabel: "Pesan",
    submit: "Kirim Pesan",
  },
  getElement: { src: "/images/element/get-element.png", width: 510, height: 279 },
  sunElement: { src: "/images/element/sun-element.png", width: 204, height: 204 },
}
