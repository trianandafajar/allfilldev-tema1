import Image from "next/image"
import Link from "next/link"

import { FaIcon } from "@/components/shared/fa-icon"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"
import { cn } from "@/lib/utils"

export type GalleryItem = {
  title: string
  subtitle: string
  href: string
  image: { src: string; alt: string; width: number; height: number }
  /** Teks kartu baru muncul saat hover (`.gallery-itemshover` di template). */
  revealOnHover?: boolean
}

export type GalleryProps = {
  eyebrow: string
  title: string
  items: readonly GalleryItem[]
}

const delays = [0.3, 0.5, 0.7] as const

export function Gallery({ eyebrow, title, items }: GalleryProps) {
  return (
    <section
      id="galeri"
      className="space-top relative z-1 overflow-hidden bg-white before:absolute before:bottom-0 before:left-0 before:h-[280px] before:w-full before:bg-forest before:transition-all before:duration-400 before:content-['']"
    >
      <div className="container xl:max-w-[1830px]!">
        <div className="title-col-5">
          <SectionTitle
            uppercase
            eyebrow={eyebrow}
            title={title}
            className="mb-10 lg:mb-[50px] 2xl:mb-[60px]"
          />
        </div>
        <div className="flex flex-wrap gap-3 md:flex-nowrap lg:gap-6">
          {items.map((item, index) => (
            <Reveal key={item.title} animation="up" delay={delays[index % delays.length]}>
              <article
                style={{ "--item-grow": item.image.width } as React.CSSProperties}
                className="group/item relative z-1 w-full overflow-hidden rounded-[10px] md:w-auto md:min-w-0 md:flex-(--item-grow)"
              >
                <div className="w-full overflow-hidden rounded-[10px] transition-all duration-400">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="w-full overflow-hidden rounded-[10px] transition-all duration-400 group-hover/item:scale-110"
                  />
                </div>
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className="invisible absolute top-1/2 left-1/2 hidden size-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xl text-white opacity-0 transition-all duration-400 group-hover/item:visible group-hover/item:opacity-100 lg:flex"
                >
                  <FaIcon name="solid-angle-right" />
                </Link>
                <div
                  className={cn(
                    "bg-secondary px-[18px] pt-[17px] pb-[18px] lg:px-6 lg:pt-6 lg:pb-7 2xl:px-10",
                    item.revealOnHover &&
                      "opacity-0 transition-all duration-500 group-hover/item:opacity-100"
                  )}
                >
                  <Link
                    href={item.href}
                    className="mb-2 block font-heading text-[22px] leading-[26px] font-normal text-forest lg:mb-0 lg:inline lg:text-[28px] lg:leading-10 2xl:text-[30px]"
                  >
                    {item.title}
                  </Link>
                  <p className="text-sm leading-[30px] font-normal text-muted-foreground lg:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
