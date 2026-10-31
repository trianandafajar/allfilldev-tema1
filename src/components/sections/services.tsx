import Image from "next/image"
import Link from "next/link"

import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"

export type ServiceItem = {
  title: string
  href: string
  image: { src: string; alt: string }
  icon: string
}

export type ServicesProps = {
  eyebrow: string
  title: string
  items: readonly ServiceItem[]
}

export function Services({ eyebrow, title, items }: ServicesProps) {
  return (
    <section id="layanan" className="section-padding overflow-hidden bg-white">
      <div className="container">
        <div className="title-col-6">
          <SectionTitle uppercase eyebrow={eyebrow} title={title} className="mb-10 lg:mb-[50px] 2xl:mb-[60px]" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
          {items.map((item) => (
            <Reveal key={item.title} animation="up" delay={0.3}>
              <div className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/3)]">
                <article className="group overflow-hidden rounded-[10px] border border-muted transition-all duration-400 hover:border-primary">
                  <div className="w-full overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={410}
                      height={311}
                      className="w-full overflow-hidden transition-all duration-400 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex w-full justify-center gap-2.5 bg-tint px-[17px] pt-4 pb-3.5 xl:gap-[15px] xl:px-6 xl:pt-[19px] xl:pb-[22px] 2xl:gap-[25px] 2xl:px-10 2xl:pt-6 2xl:pb-[30px]">
                    <Link
                      href={item.href}
                      className="mb-0 block font-heading text-xl leading-7 font-normal text-forest group-hover:text-primary xl:text-[26px] xl:leading-8 2xl:text-[30px] 2xl:leading-10"
                    >
                      {item.title}
                    </Link>
                    <Image
                      src={item.icon}
                      alt=""
                      width={60}
                      height={60}
                      aria-hidden
                      className="w-11 xl:w-auto"
                    />
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
