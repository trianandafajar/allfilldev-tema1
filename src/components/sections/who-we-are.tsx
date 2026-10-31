import Image from "next/image"
import Link from "next/link"

import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"

type Picture = { src: string; width: number; height: number }

export type WhoWeAreProps = {
  eyebrow: string
  title: string
  description: string
  values: readonly { icon: string; title: string; href: string }[]
  image: Picture & { alt: string }
  decoration: Picture
}

export function WhoWeAre({ eyebrow, title, description, values, image, decoration }: WhoWeAreProps) {
  return (
    <section className="section-padding relative z-1 overflow-hidden bg-forest">
      <div className="container">
        <div className="grid items-end justify-between gap-6 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              tone="dark"
              eyebrow={eyebrow}
              title={title}
              titleClassName="mb-6"
              description={description}
              descriptionClassName="text-white"
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:gap-6">
              {values.map((value, index) => (
                <Reveal key={value.title} animation="down" delay={0.4 + index * 0.2}>
                  <div className="group w-full rounded-[20px] bg-white/5 px-[15px] py-8 text-center xl:py-[50px]">
                    <div className="mx-auto mb-5 flex size-[65px] items-center justify-center rounded-[20px] bg-accent xl:mb-[30px]">
                      <Image src={value.icon} alt="" width={40} height={40} aria-hidden className="size-10" />
                    </div>
                    <Link
                      href={value.href}
                      className="block font-heading text-[22px] leading-[30px] font-normal text-white group-hover:text-accent xl:text-[30px] xl:leading-10"
                    >
                      {value.title}
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal animation="right" delay={0.4}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mx-auto h-auto w-full max-w-[560px]"
            />
          </Reveal>
        </div>
      </div>
      <Image
        src={decoration.src}
        alt=""
        width={decoration.width}
        height={decoration.height}
        aria-hidden
        className="pointer-events-none absolute bottom-[60px] left-0 -z-1 h-auto"
      />
    </section>
  )
}
