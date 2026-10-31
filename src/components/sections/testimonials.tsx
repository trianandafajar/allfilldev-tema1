import Image from "next/image"

import { CountUp } from "@/components/shared/count-up"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"
import {
  TestimonialSlider,
  type TestimonialEntry,
} from "@/components/shared/testimonial-slider"
import { cn } from "@/lib/utils"

export type TestimonialsProps = {
  eyebrow: string
  /** Satu baris per elemen; dipisah `<br>` seperti judul di template. */
  titleLines: readonly string[]
  dotLabel: string
  items: readonly TestimonialEntry[]
  image: { src: string; alt: string; width: number; height: number }
  highlight: {
    icon: { src: string; width: number; height: number }
    value: number
    suffix: string
    label: string
  }
  /** Spasi vertikal tambahan bila seksi tidak diapit seksi ber-padding (mis. `space-bottom`). */
  className?: string
}

export function Testimonials({
  eyebrow,
  titleLines,
  dotLabel,
  items,
  image,
  highlight,
  className,
}: TestimonialsProps) {
  return (
    <section
      id="testimoni"
      className={cn(
        "relative z-1 overflow-hidden before:absolute before:top-0 before:left-0 before:h-[410px] before:w-full before:bg-linear-to-b/srgb before:from-transparent before:to-primary before:opacity-10 before:content-['']",
        className
      )}
    >
      <div className="container">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="relative">
            <SectionTitle
              align="left"
              eyebrow={eyebrow}
              eyebrowClassName="text-accent"
              title={titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
              className="mb-[30px] lg:mb-10 2xl:mb-[50px]"
            />
            <TestimonialSlider items={items} dotLabel={dotLabel} />
          </div>
          <Reveal animation="down" delay={0.4}>
            <div className="relative w-full lg:pl-5">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
              />
              <div className="absolute right-[15px] bottom-[15px] flex items-center gap-0 rounded-[10px] bg-accent p-5 lg:right-5 lg:bottom-5 lg:gap-[15px]">
                <Image
                  src={highlight.icon.src}
                  alt=""
                  width={highlight.icon.width}
                  height={highlight.icon.height}
                  aria-hidden
                />
                <div>
                  <h3 className="text-[26px] leading-9 font-normal text-forest lg:text-4xl">
                    <CountUp value={highlight.value} suffix={highlight.suffix} className="[&>span]:font-normal" />
                  </h3>
                  <p className="text-sm leading-[30px] font-normal text-forest lg:text-base">
                    {highlight.label}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
