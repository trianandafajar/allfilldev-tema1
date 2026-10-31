import Image from "next/image"
import Link from "next/link"

import { CoverImage } from "@/components/shared/cover-image"
import { Reveal } from "@/components/shared/reveal"

export type ServiceCardData = {
  title: string
  href: string
  image: { src: string; alt: string }
  icon: string
}

/** Kartu layanan template (`.service-itemsv02`): foto, lalu judul dan ikon di strip bawah. */
export function ServiceCard({ title, href, image, icon }: ServiceCardData) {
  return (
    <Reveal animation="up" delay={0.3}>
      <div className="flex w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/3)]">
        <article className="group flex w-full flex-col overflow-hidden rounded-[10px] border border-muted transition-all duration-400 hover:border-primary">
          <div className="w-full overflow-hidden">
            <CoverImage
              src={image.src}
              alt={image.alt}
              width={410}
              height={311}
              className="overflow-hidden transition-all duration-400 group-hover:scale-110"
            />
          </div>
          <div className="flex w-full flex-1 justify-center gap-2.5 bg-tint px-[17px] pt-4 pb-3.5 xl:gap-[15px] xl:px-6 xl:pt-[19px] xl:pb-[22px] 2xl:gap-[25px] 2xl:px-10 2xl:pt-6 2xl:pb-[30px]">
            <Link
              href={href}
              className="mb-0 block min-w-0 flex-1 font-heading text-xl leading-7 font-normal text-forest group-hover:text-primary xl:text-[26px] xl:leading-8 2xl:text-[30px] 2xl:leading-10"
            >
              {title}
            </Link>
            <Image src={icon} alt="" width={60} height={60} aria-hidden className="h-auto w-11 shrink-0 self-start xl:w-[60px]" />
          </div>
        </article>
      </div>
    </Reveal>
  )
}
