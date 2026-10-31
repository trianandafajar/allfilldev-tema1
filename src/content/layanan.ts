import type { ServiceDetailProps } from "@/components/sections/service-detail"
import type { PageBannerProps } from "@/components/sections/page-banner"
import type { ArticleBlock, ArticleImage } from "@/components/shared/article-body"
import type { FaqEntry } from "@/components/shared/faq-accordion"
import type { ServiceCardData } from "@/components/shared/service-card"
import { contactInfo } from "@/content/situs"

type ServiceEntry = {
  slug: string
  title: string
  /** Dipakai sebagai deskripsi meta halaman detail. */
  summary: string
  card: Pick<ServiceCardData, "image" | "icon">
  intro: string
  heading: string
  text: string
  steps: readonly [string, string]
}

const entries: readonly ServiceEntry[] = [
  {
    slug: "solusi-tanam-hijau",
    title: "Solusi Tanam Hijau",
    summary: "Pendampingan budidaya ramah lingkungan: irigasi hemat air, pupuk organik, dan jadwal tanam sesuai musim.",
    card: {
      image: { src: "/images/service/solusi-tanam-hijau.jpg", alt: "Tangan memegang tunas di tanah" },
      icon: "/images/icon/water-hose.svg",
    },
    intro:
      "Kami membantu petani menanam dengan cara yang menjaga tanah tetap subur. Mulai dari irigasi tetes yang hemat air sampai pupuk organik dari bahan lokal, setiap langkah disesuaikan dengan kondisi lahan Anda.",
    heading: "Menjaga tanah, menjaga hasil",
    text: "Tim lapangan kami memetakan kebutuhan air dan unsur hara per petak, lalu menyusun jadwal tanam dan perawatan yang realistis untuk musim berjalan.",
    steps: ["Siapkan tanah", "Rawat tanaman"],
  },
  {
    slug: "teknologi-panen-petani",
    title: "Teknologi Panen untuk Petani",
    summary: "Alat dan cara panen tepat guna untuk menekan kehilangan hasil dan menjaga kesegaran sampai ke pembeli.",
    card: {
      image: { src: "/images/service/teknologi-panen-petani.jpg", alt: "Mesin pemanen di hamparan padi" },
      icon: "/images/icon/ser-flower.svg",
    },
    intro:
      "Panen yang tepat waktu dan tepat cara menentukan harga jual. Kami memperkenalkan alat panen, wadah, dan rantai dingin sederhana yang terjangkau bagi kelompok tani kecil.",
    heading: "Dari petik sampai kemas",
    text: "Kami melatih petani menentukan tingkat kematangan, menyortir hasil, dan mengemasnya supaya sampai ke pasar dalam kondisi segar.",
    steps: ["Panen tepat waktu", "Sortir dan kemas"],
  },
  {
    slug: "konsultan-profesional",
    title: "Konsultan Profesional",
    summary: "Konsultan lapangan yang mendampingi perencanaan tanam, pemupukan, pengendalian hama, dan akses pasar.",
    card: {
      image: { src: "/images/service/konsultan-pertanian.jpg", alt: "Dua petani memeriksa tablet di ladang" },
      icon: "/images/icon/map-plant.svg",
    },
    intro:
      "Setiap lahan punya cerita sendiri. Konsultan kami datang langsung ke lahan, membaca kondisinya, dan menyusun rencana yang bisa dijalankan dengan sumber daya yang Anda miliki.",
    heading: "Rencana yang bisa dijalankan",
    text: "Hasil kunjungan dirangkum dalam rencana tertulis berisi prioritas, biaya, dan target panen, lalu dievaluasi bersama setiap musim.",
    steps: ["Survei lahan", "Susun rencana"],
  },
  {
    slug: "tani-cerdas-berbasis-data",
    title: "Tani Cerdas Berbasis Data",
    summary: "Sensor tanah dan pencatatan digital sederhana agar keputusan tanam didasarkan pada data lahan sendiri.",
    card: {
      image: { src: "/images/gallery/3.png", alt: "Instalasi hidroponik berisi selada" },
      icon: "/images/icon/sr4.svg",
    },
    intro:
      "Sensor kelembapan dan catatan harian membantu petani melihat pola yang selama ini hanya terasa. Datanya mudah dibaca dan tetap bisa dipakai tanpa koneksi internet yang stabil.",
    heading: "Keputusan dari data lahan sendiri",
    text: "Kami memasang sensor, menyiapkan buku catat digital, dan mendampingi petani membaca grafiknya sampai terbiasa mengambil keputusan dari angka.",
    steps: ["Pasang sensor", "Baca datanya"],
  },
  {
    slug: "inovasi-agroteknologi",
    title: "Inovasi Agroteknologi",
    summary: "Uji coba benih unggul, media tanam, dan teknik budidaya baru bersama kelompok tani sebelum diperluas.",
    card: {
      image: { src: "/images/about/feature-thumb-2.png", alt: "Petani merawat tanaman di ladang" },
      icon: "/images/icon/sr5.svg",
    },
    intro:
      "Teknologi baru hanya berguna kalau terbukti di lahan petani. Kami menguji benih unggul dan teknik budidaya di petak percobaan kecil, mencatat hasilnya, lalu membagikannya ke kelompok tani.",
    heading: "Uji kecil, manfaat besar",
    text: "Petak percobaan dikelola bersama petani setempat sehingga risikonya kecil dan hasilnya bisa langsung dipelajari oleh tetangga sekitar.",
    steps: ["Uji di petak kecil", "Bagikan hasilnya"],
  },
  {
    slug: "budidaya-tanaman-pangan",
    title: "Budidaya Tanaman Pangan",
    summary: "Panduan budidaya padi, jagung, dan sayuran dari persiapan lahan sampai panen dengan biaya terkendali.",
    card: {
      image: { src: "/images/gallery/1.png", alt: "Petani merawat sayur di bedengan" },
      icon: "/images/icon/sr6.svg",
    },
    intro:
      "Tanaman pangan adalah tulang punggung desa. Kami mendampingi budidaya padi, jagung, dan sayuran agar hasilnya stabil dan biaya produksi tetap masuk akal.",
    heading: "Pangan cukup, petani sejahtera",
    text: "Panduan kami mencakup pemilihan varietas, pengaturan jarak tanam, pemupukan berimbang, dan pengendalian hama terpadu.",
    steps: ["Pilih varietas", "Atur pemupukan"],
  },
]

const stepIcons = ["/images/icon/details-desert.svg", "/images/icon/details-flower.svg"] as const

const faq: readonly FaqEntry[] = [
  {
    question: "Siapa yang bisa memakai layanan ini?",
    answer: "Petani perorangan, kelompok tani, dan pelaku usaha tani di seluruh Jawa Barat. Kami menyesuaikan pendampingan dengan luas lahan dan modal Anda.",
  },
  {
    question: "Bagaimana cara memulainya?",
    answer: "Hubungi kami lewat formulir kontak atau telepon. Tim kami akan menjadwalkan kunjungan awal ke lahan tanpa biaya.",
  },
  {
    question: "Berapa lama pendampingannya?",
    answer: "Umumnya satu musim tanam, sekitar tiga sampai enam bulan. Bisa diperpanjang bila diperlukan.",
  },
  {
    question: "Apakah ada biaya tambahan di lapangan?",
    answer: "Biaya dirinci di awal dalam rencana tertulis. Tidak ada biaya tambahan tanpa persetujuan Anda.",
  },
  {
    question: "Apakah hasilnya dijamin?",
    answer: "Hasil panen dipengaruhi cuaca dan banyak faktor lain, jadi kami tidak menjanjikan angka. Kami menjamin pendampingan dan pencatatan yang jujur.",
  },
]

const detailImage: ArticleImage = {
  src: "/images/banner/hero-3.png",
  alt: "Petani merawat tanaman di kebun",
  width: 850,
  height: 440,
}

const detailPair: readonly [ArticleImage, ArticleImage] = [
  { src: "/images/gallery/2.png", alt: "Petani memanen sayur organik", width: 410, height: 259 },
  { src: "/images/service/konsultan-pertanian.jpg", alt: "Dua petani memeriksa tablet di ladang", width: 410, height: 259 },
]

export const serviceCards: readonly ServiceCardData[] = entries.map((entry) => ({
  title: entry.title,
  href: `/layanan/${entry.slug}`,
  ...entry.card,
}))

export const serviceSlugs = entries.map((entry) => entry.slug)

export const listBanner: PageBannerProps = {
  title: "Layanan",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Layanan" }],
  image: { src: "/images/about/tt-slice.png", width: 222, height: 245 },
}

/** Data halaman detail satu layanan, atau `undefined` bila slug tidak dikenal. */
export function getService(slug: string) {
  const entry = entries.find((item) => item.slug === slug)
  if (!entry) return undefined

  const body: readonly ArticleBlock[] = [
    { type: "heading", text: entry.title },
    { type: "paragraph", text: entry.intro },
    {
      type: "steps",
      items: entry.steps.map((title, index) => ({ title, icon: stepIcons[index] })),
    },
    { type: "heading", text: entry.heading },
    { type: "paragraph", text: entry.text },
    { type: "images", images: detailPair },
  ]

  const detail: ServiceDetailProps = {
    image: detailImage,
    faq,
    body,
    callBox: {
      title: "Hubungi Kami",
      text: "Untuk layanan cepat",
      phone: contactInfo.phones[0],
    },
  }

  const banner: PageBannerProps = {
    title: "Detail Layanan",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Layanan", href: "/layanan" }, { label: entry.title }],
    image: listBanner.image,
  }

  return { slug: entry.slug, title: entry.title, summary: entry.summary, detail, banner }
}
