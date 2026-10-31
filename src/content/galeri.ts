import type { GalleryDetailProps } from "@/components/sections/gallery-detail"
import type { PageBannerProps } from "@/components/sections/page-banner"
import type { ArticleBlock } from "@/components/shared/article-body"
import type { GalleryCardData } from "@/components/shared/gallery-card"
import { formatDate } from "@/lib/format"

type GalleryEntry = {
  slug: string
  title: string
  category: string
  image: { src: string; alt: string }
  summary: string
  client: string
  location: string
  /** Tanggal ISO (`2026-03-14`). */
  date: string
  lead: string
  sections: readonly [{ title: string; text: string }, { title: string; text: string }]
}

const entries: readonly GalleryEntry[] = [
  {
    slug: "bertani-untuk-masa-depan-yang-lebih-baik",
    title: "Bertani untuk Masa Depan yang Lebih Baik",
    category: "Layanan Tani Sejahtera",
    image: { src: "/images/gallery/1.png", alt: "Petani merawat sayur di bedengan" },
    summary: "Program pendampingan satu musim tanam untuk kelompok tani padi di Lembang, dari pengolahan lahan sampai panen.",
    client: "Kelompok Tani Sejahtera",
    location: "Lembang, Bandung Barat",
    date: "2026-03-14",
    lead: "Panen padi meningkat setelah jadwal tanam dan pemupukan disusun bersama petani.",
    sections: [
      { title: "Awal yang sederhana", text: "Kami memulai dengan survei lahan dan diskusi bersama anggota kelompok tani untuk memahami kebiasaan tanam, kendala air, dan biaya yang selama ini ditanggung." },
      { title: "Hasil di musim pertama", text: "Dengan pengaturan jarak tanam dan pemupukan berimbang, hasil gabah per hektare naik dan biaya pupuk turun. Catatan lengkapnya dibagikan ke seluruh anggota." },
    ],
  },
  {
    slug: "panen-raya-di-lahan-organik",
    title: "Panen Raya di Lahan Organik",
    category: "Kebun Organik Lembang",
    image: { src: "/images/gallery/2.png", alt: "Petani memanen sayur organik" },
    summary: "Peralihan lahan sayur konvensional menjadi organik bersertifikat, lengkap dengan jalur penjualan ke pasar kota.",
    client: "Kebun Organik Lembang",
    location: "Lembang, Bandung Barat",
    date: "2026-02-20",
    lead: "Sayur organik dari lahan peralihan kini rutin dikirim ke pasar dan restoran di Bandung.",
    sections: [
      { title: "Menyiapkan tanah", text: "Tanah dipulihkan lewat kompos dan rotasi tanaman selama dua musim, sambil mencatat perubahan kesuburan di setiap petak." },
      { title: "Menembus pasar", text: "Hasil panen dikemas dan diberi label asal kebun, sehingga pembeli tahu persis dari mana sayurnya datang." },
    ],
  },
  {
    slug: "kebun-sayur-hidroponik",
    title: "Kebun Sayur Hidroponik",
    category: "Kelompok Tani Makmur",
    image: { src: "/images/gallery/3.png", alt: "Instalasi hidroponik berisi selada" },
    summary: "Instalasi hidroponik sederhana di lahan sempit agar kelompok tani tetap bisa menanam sepanjang tahun.",
    client: "Kelompok Tani Makmur",
    location: "Cisarua, Bandung Barat",
    date: "2026-01-30",
    lead: "Lahan sempit di belakang rumah berubah menjadi kebun selada yang panen setiap bulan.",
    sections: [
      { title: "Rancangan hemat biaya", text: "Rak dibuat dari bahan lokal dan pompa berdaya kecil, sehingga biaya awal terjangkau bagi anggota kelompok." },
      { title: "Perawatan harian", text: "Kami melatih anggota mengecek nutrisi dan tingkat keasaman larutan, lalu mencatatnya dalam buku sederhana." },
    ],
  },
  {
    slug: "kompos-dari-limbah-pertanian",
    title: "Kompos dari Limbah Pertanian",
    category: "Unit Pengolahan Kompos",
    image: { src: "/images/blog/menggali-potensi-pertanian-indonesia.jpg", alt: "Rumah kaca berisi selada hijau" },
    summary: "Pengolahan sisa panen dan kotoran ternak menjadi kompos yang dipakai kembali di lahan anggota.",
    client: "Gapoktan Harapan Tani",
    location: "Pangalengan, Bandung",
    date: "2025-12-12",
    lead: "Limbah yang dulu dibakar kini menjadi pupuk yang menghemat biaya anggota.",
    sections: [
      { title: "Dari limbah jadi pupuk", text: "Sisa jerami, daun, dan kotoran ternak dicacah, ditumpuk berlapis, lalu dibalik berkala hingga matang dalam enam minggu." },
      { title: "Hemat biaya, tanah lebih gembur", text: "Pemakaian kompos menurunkan kebutuhan pupuk kimia dan memperbaiki struktur tanah dari musim ke musim." },
    ],
  },
  {
    slug: "irigasi-tetes-lahan-kering",
    title: "Irigasi Tetes untuk Lahan Kering",
    category: "Desa Tani Mandiri",
    image: { src: "/images/service/solusi-tanam-hijau.jpg", alt: "Tangan memegang tunas di tanah" },
    summary: "Pemasangan irigasi tetes di lahan tadah hujan supaya tanaman tetap tumbuh di musim kemarau.",
    client: "Desa Tani Mandiri",
    location: "Garut, Jawa Barat",
    date: "2025-11-05",
    lead: "Air yang terbatas kini cukup untuk menyiram seluruh bedengan di musim kemarau.",
    sections: [
      { title: "Memanfaatkan setiap tetes", text: "Jaringan selang dan tangki penampung dirancang mengikuti kontur lahan sehingga air terbagi merata tanpa pompa besar." },
      { title: "Tanam di musim kering", text: "Petani kini bisa menanam cabai dan tomat di musim kemarau, saat harga jual biasanya sedang tinggi." },
    ],
  },
  {
    slug: "sayur-segar-untuk-pasar-kota",
    title: "Sayur Segar untuk Pasar Kota",
    category: "Kebun Sayur Ciwidey",
    image: { src: "/images/blog/dari-ladang-ke-meja.jpg", alt: "Petani memikul padi saat matahari terbit" },
    summary: "Penataan jadwal tanam dan pengemasan sayur supaya sampai ke pasar kota tetap segar dan berharga stabil.",
    client: "Kebun Sayur Ciwidey",
    location: "Ciwidey, Bandung",
    date: "2025-10-18",
    lead: "Sayur dipetik pagi hari dan dikemas dingin sehingga tahan lebih lama di perjalanan.",
    sections: [
      { title: "Jadwal tanam bergilir", text: "Petak ditanam bergiliran agar panen tidak menumpuk di satu minggu dan harga tetap terjaga." },
      { title: "Kemasan yang melindungi", text: "Kotak berlubang udara dan alas penyangga mengurangi sayur rusak selama pengiriman." },
    ],
  },
]

const highlights = [
  "Survei dan pemetaan lahan",
  "Penyusunan jadwal tanam",
  "Pelatihan kelompok tani",
  "Pencatatan hasil panen",
  "Pemupukan berimbang",
  "Pengendalian hama terpadu",
  "Pengemasan dan penjualan",
  "Evaluasi tiap musim",
] as const

export const galleryCards: readonly GalleryCardData[] = entries.map((entry) => ({
  title: entry.title,
  category: entry.category,
  href: `/galeri/${entry.slug}`,
  image: { ...entry.image, width: 410, height: 424 },
}))

export const gallerySlugs = entries.map((entry) => entry.slug)

export const listBanner: PageBannerProps = {
  title: "Galeri",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Galeri" }],
  image: { src: "/images/about/tt-slice.png", width: 222, height: 245 },
}

/** Data halaman detail satu proyek galeri, atau `undefined` bila slug tidak dikenal. `shareLinks` diisi oleh halaman. */
export function getGalleryItem(slug: string) {
  const entry = entries.find((item) => item.slug === slug)
  if (!entry) return undefined

  const body: readonly ArticleBlock[] = [
    {
      type: "image",
      image: { src: "/images/banner/hero-3.png", alt: "Petani merawat tanaman di kebun", width: 1290, height: 536 },
    },
    { type: "heading", text: entry.sections[0].title },
    { type: "paragraph", text: entry.sections[0].text },
    { type: "heading", text: entry.sections[1].title },
    { type: "paragraph", text: entry.sections[1].text },
    { type: "list", items: highlights },
  ]

  const detail: Omit<GalleryDetailProps, "shareLinks"> = {
    title: entry.category,
    summary: entry.summary,
    info: [
      { label: "Klien", value: entry.client },
      { label: "Lokasi", value: entry.location },
      { label: "Tanggal", value: formatDate(entry.date) },
      { label: "Penulis", value: "Tim AgriHub" },
    ],
    image: { src: entry.image.src, alt: entry.image.alt, width: 850, height: 536 },
    lead: { title: entry.title, text: entry.lead },
    body,
  }

  const banner: PageBannerProps = {
    title: "Detail Galeri",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Galeri", href: "/galeri" }, { label: entry.title }],
    image: listBanner.image,
  }

  return { slug: entry.slug, title: entry.title, summary: entry.summary, detail, banner }
}
