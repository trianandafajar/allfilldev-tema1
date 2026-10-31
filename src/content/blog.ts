import type { BlogDetailProps } from "@/components/sections/blog-detail"
import type { PageBannerProps } from "@/components/sections/page-banner"
import type { ArticleBlock } from "@/components/shared/article-body"
import type { BlogPostCardData } from "@/components/shared/blog-post-card"
import type { BlogSidebarProps } from "@/components/shared/blog-sidebar"
import { formatDate, formatDayMonth } from "@/lib/format"

type BlogEntry = {
  slug: string
  title: string
  excerpt: string
  /** Tanggal ISO (`2026-01-22`). */
  date: string
  category: string
  tags: readonly string[]
  image: { src: string; alt: string }
  /** Empat paragraf: dua pembuka, satu setelah foto, satu penutup. */
  paragraphs: readonly [string, string, string, string]
  quote: { text: string; cite: string }
  heading: string
}

const author = "Oleh admin"

const entries: readonly BlogEntry[] = [
  {
    slug: "dari-ladang-ke-meja-cerita-pertanian-kita",
    title: "Dari Ladang ke Meja: Cerita Pertanian Kita",
    excerpt: "Pertanian dan perkebunan adalah sektor penting yang melibatkan jutaan orang di seluruh negeri.",
    date: "2026-01-22",
    category: "Cerita Tani",
    tags: ["Petani", "Pasar", "Lembang"],
    image: { src: "/images/blog/dari-ladang-ke-meja.jpg", alt: "Petani memikul padi saat matahari terbit" },
    paragraphs: [
      "Setiap sayur di meja makan punya perjalanan panjang. Sebelum sampai ke piring, ia melewati tangan petani yang bangun sebelum matahari terbit dan pedagang yang mengantarnya ke pasar.",
      "Di Lembang, perjalanan itu sering dimulai dari petak kecil seluas beberapa ratus meter persegi. Dari petak-petak seperti inilah pasokan sayur kota terjaga setiap hari.",
      "Kami mengikuti satu rantai pasok dari kebun sampai pasar untuk melihat di mana nilai tambah hilang. Ternyata sebagian besar kerugian terjadi pada pengemasan dan pengangkutan, bukan di ladang.",
      "Memperpendek rantai itu berarti harga yang lebih adil bagi petani dan sayur yang lebih segar bagi pembeli.",
    ],
    quote: {
      text: "Kalau petani sejahtera, meja makan semua orang ikut terjamin. Jadi tugas kita adalah memastikan hasil kebun sampai dengan baik.",
      cite: "Tim AgriHub",
    },
    heading: "Memperpendek jarak kebun dan pembeli",
  },
  {
    slug: "segarnya-hasil-panen-untuk-semua",
    title: "Segarnya Hasil Panen untuk Semua",
    excerpt: "Menjaga kesegaran hasil panen dimulai dari cara petik, sortir, dan kemas yang tepat.",
    date: "2026-01-10",
    category: "Panen",
    tags: ["Panen", "Pasar", "Petani"],
    image: { src: "/images/blog/segarnya-hasil-panen.jpg", alt: "Peti kayu berisi sayuran segar" },
    paragraphs: [
      "Kesegaran tidak terjadi di pasar, ia ditentukan sejak petik. Waktu panen, alat yang dipakai, dan wadah penampung sama-sama menentukan seberapa lama sayur bertahan.",
      "Panen paling baik dilakukan pagi hari saat suhu masih rendah. Sayuran yang dipetik siang cenderung layu lebih cepat dan susut bobotnya.",
      "Setelah dipetik, hasil perlu disortir berdasarkan ukuran dan kondisi, lalu dikemas dalam wadah berlubang udara supaya tidak saling menekan.",
      "Langkah sederhana ini bisa menekan kerusakan hingga separuhnya tanpa menambah banyak biaya.",
    ],
    quote: {
      text: "Panen yang baik adalah panen yang sampai ke pembeli dalam keadaan seperti baru dipetik.",
      cite: "Konsultan lapangan AgriHub",
    },
    heading: "Tiga kebiasaan yang menjaga kesegaran",
  },
  {
    slug: "menggali-potensi-pertanian-indonesia",
    title: "Menggali Potensi Pertanian Indonesia",
    excerpt: "Tanah subur dan iklim tropis adalah modal besar yang belum seluruhnya tergarap.",
    date: "2025-12-28",
    category: "Potensi Daerah",
    tags: ["Petani", "Organik", "Lembang"],
    image: { src: "/images/blog/menggali-potensi-pertanian-indonesia.jpg", alt: "Rumah kaca berisi selada hijau" },
    paragraphs: [
      "Indonesia punya tanah vulkanik yang subur, hujan yang cukup, dan matahari sepanjang tahun. Modal alam ini membuat hampir semua komoditas bisa tumbuh.",
      "Tantangannya ada pada pengelolaan: lahan yang terfragmentasi, akses pasar yang terbatas, dan teknologi yang belum merata sampai ke desa.",
      "Daerah dengan kelompok tani yang kuat terbukti lebih cepat naik kelas. Mereka berbagi alat, belajar bersama, dan menjual lewat satu pintu.",
      "Karena itu pendampingan kami selalu dimulai dari penguatan kelompok sebelum membicarakan teknologi.",
    ],
    quote: {
      text: "Potensi tidak berarti apa-apa sampai ada orang yang mau menggarapnya dengan sabar dan bersama-sama.",
      cite: "Tim AgriHub",
    },
    heading: "Kekuatan ada di kelompok tani",
  },
  {
    slug: "menanam-harapan-di-lahan-kering",
    title: "Menanam Harapan di Lahan Kering",
    excerpt: "Irigasi tetes dan mulsa membuat lahan tadah hujan tetap produktif di musim kemarau.",
    date: "2025-12-05",
    category: "Teknik Budidaya",
    tags: ["Irigasi", "Petani", "Panen"],
    image: { src: "/images/service/solusi-tanam-hijau.jpg", alt: "Tangan memegang tunas di tanah" },
    paragraphs: [
      "Di lahan tadah hujan, kemarau sering berarti lahan dibiarkan kosong. Padahal dengan teknik yang tepat, sebagian besar lahan itu masih bisa ditanami.",
      "Irigasi tetes menyalurkan air langsung ke akar sehingga hampir tidak ada yang terbuang. Satu tangki penampung cukup untuk beberapa bedengan.",
      "Mulsa plastik atau jerami menjaga kelembapan tanah dan menekan gulma, jadi petani tidak perlu menyiram terlalu sering.",
      "Kombinasi keduanya membuat petani bisa menanam cabai dan tomat saat harga di pasar sedang naik.",
    ],
    quote: {
      text: "Air yang sedikit pun cukup kalau jatuh tepat di akar tanaman.",
      cite: "Teknisi irigasi AgriHub",
    },
    heading: "Mulai dari satu bedengan percobaan",
  },
  {
    slug: "pupuk-organik-untuk-tanah-yang-sehat",
    title: "Pupuk Organik untuk Tanah yang Sehat",
    excerpt: "Kompos dari sisa panen memperbaiki struktur tanah dan menurunkan biaya pupuk.",
    date: "2025-11-15",
    category: "Pupuk dan Tanah",
    tags: ["Kompos", "Organik", "Petani"],
    image: { src: "/images/gallery/2.png", alt: "Petani memanen sayur organik" },
    paragraphs: [
      "Tanah yang sehat adalah tanah yang hidup. Cacing, jamur, dan bakteri di dalamnya mengurai bahan organik menjadi hara yang bisa diserap akar.",
      "Pupuk kimia yang dipakai berlebihan perlahan mematikan kehidupan itu, dan petani akhirnya butuh dosis lebih besar untuk hasil yang sama.",
      "Kompos dari sisa panen dan kotoran ternak mengembalikan bahan organik ke tanah. Prosesnya sederhana dan bahannya ada di sekitar kebun.",
      "Setelah dua sampai tiga musim, tanah menjadi lebih gembur dan menahan air lebih baik.",
    ],
    quote: {
      text: "Beri makan tanahnya, maka tanahnya yang akan memberi makan tanamannya.",
      cite: "Petani mitra AgriHub",
    },
    heading: "Cara membuat kompos di kebun sendiri",
  },
]

const detailPair = [
  { src: "/images/gallery/2.png", alt: "Petani memanen sayur organik", width: 410, height: 290 },
  { src: "/images/gallery/1.png", alt: "Petani merawat sayur di bedengan", width: 410, height: 290 },
] as const

const href = (entry: BlogEntry) => `/blog/${entry.slug}`
const uniqueSorted = (values: readonly string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b, "id"))

export const blogSlugs = entries.map((entry) => entry.slug)

export const listBanner: PageBannerProps = {
  title: "Blog",
  crumbs: [{ label: "Beranda", href: "/" }, { label: "Blog" }],
  image: { src: "/images/about/tt-slice.png", width: 222, height: 245 },
}

export const blogCards: readonly BlogPostCardData[] = entries.map((entry) => ({
  title: entry.title,
  excerpt: entry.excerpt,
  href: href(entry),
  dateLabel: formatDayMonth(entry.date),
  author,
  category: entry.category,
  readMore: "Baca Selengkapnya",
  image: { ...entry.image, width: 850, height: 501 },
}))

export const blogSidebar: BlogSidebarProps = {
  search: { title: "Cari", placeholder: "Cari artikel...", submitLabel: "Cari" },
  categories: {
    title: "Kategori",
    items: uniqueSorted(entries.map((entry) => entry.category)).map((label) => ({
      label,
      href: "/blog",
    })),
  },
  latest: {
    title: "Blog Terbaru",
    items: entries.slice(0, 3).map((entry) => ({
      title: entry.title,
      href: href(entry),
      dateLabel: formatDate(entry.date),
      image: entry.image,
    })),
  },
  tags: {
    title: "Tag",
    items: uniqueSorted(entries.flatMap((entry) => entry.tags)).map((label) => ({
      label,
      href: "/blog",
    })),
  },
}

/** Data halaman detail satu artikel, atau `undefined` bila slug tidak dikenal. `shareLinks` diisi oleh halaman. */
export function getPost(slug: string) {
  const index = entries.findIndex((item) => item.slug === slug)
  if (index === -1) return undefined

  const entry = entries[index]
  const prev = entries[index - 1]
  const next = entries[index + 1]
  const related = entries[(index + 1) % entries.length]
  const [first, second, third, fourth] = entry.paragraphs

  const body: readonly ArticleBlock[] = [
    { type: "paragraph", text: first },
    { type: "paragraph", text: second },
    { type: "image", image: { ...entry.image, width: 850, height: 361 } },
    { type: "paragraph", text: third },
    { type: "quote", ...entry.quote },
    { type: "heading", text: entry.heading },
    { type: "paragraph", text: fourth },
    { type: "images", images: detailPair },
  ]

  const detail: Omit<BlogDetailProps, "shareLinks"> = {
    title: entry.title,
    meta: { author, category: entry.category, date: entry.date, dateLabel: formatDate(entry.date) },
    body,
    tags: {
      label: "Tag:",
      items: entry.tags.map((label) => ({ label, href: "/blog" })),
    },
    nav: {
      label: "Artikel lainnya",
      prev: prev && { title: prev.title, href: href(prev) },
      next: next && { title: next.title, href: href(next) },
    },
    related: {
      heading: "Mungkin Anda Suka",
      post: {
        title: related.title,
        excerpt: related.excerpt,
        href: href(related),
        image: { ...related.image, width: 850, height: 440 },
      },
    },
    sidebar: blogSidebar,
  }

  const banner: PageBannerProps = {
    title: "Detail Blog",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Blog", href: "/blog" }, { label: entry.title }],
    image: listBanner.image,
  }

  return { slug: entry.slug, title: entry.title, excerpt: entry.excerpt, date: entry.date, image: entry.image, detail, banner }
}
