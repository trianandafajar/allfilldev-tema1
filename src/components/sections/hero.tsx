import Image from "next/image"
import Link from "next/link"

import { ButtonLabel } from "@/components/shared/button-label"
import { PlayButton } from "@/components/shared/play-button"
import { Reveal } from "@/components/shared/reveal"
import { VideoDialog } from "@/components/shared/video-dialog"
import { Button } from "@/components/ui/button"

export type HeroProps = {
  eyebrow: string
  titleLead: string
  titleAccent: readonly string[]
  description: string
  cta: { label: string; href: string }
  video: { label: string; title: string; videoId: string }
  image: { src: string; alt: string; width: number; height: number }
}

export function Hero({
  eyebrow,
  titleLead,
  titleAccent,
  description,
  cta,
  video,
  image,
}: HeroProps) {
  return (
    <section className="relative z-1 overflow-hidden bg-[url('/images/banner/hero3-bg.png')] bg-cover bg-center bg-no-repeat pt-[60px] lg:pt-20">
      <div className="container-wide">
        <div className="relative">
          <div className="md:w-[calc(0.75*(100%+24px)-24px)] lg:w-[calc(0.583333*(100%+24px)-24px)]">
            <div className="pt-20 pb-[100px] md:pt-[110px] md:pb-[130px] xl:pt-[120px] xl:pb-[140px] 2xl:pt-[190px] 2xl:pb-[177px]">
              <Reveal animation="down" delay={0.3}>
                <div className="mb-2.5 flex items-center gap-2.5 font-script text-xl font-normal text-white">
                  <Image src="/images/icon/icon-sunstar.svg" alt="" width={30} height={30} aria-hidden />
                  {eyebrow}
                </div>
              </Reveal>
              <Reveal animation="up" delay={0.4}>
                <h1 className="mb-[18px] text-[39px] leading-[48px] font-bold tracking-[-2.5px] text-white md:mb-7 md:text-[60px] md:leading-[75px] xl:text-[72px] 2xl:text-[80px] 2xl:leading-[85px]">
                  {titleLead}{" "}
                  <span className="text-[39px] leading-[48px] font-light md:text-[60px] md:leading-[75px] xl:text-[72px] 2xl:text-[80px] 2xl:leading-[85px]">
                    {titleAccent.map((line, index) => (
                      <span key={line}>
                        {index > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </span>
                </h1>
              </Reveal>
              <Reveal animation="up" delay={0.6}>
                <p className="mb-6 max-w-[600px] text-sm leading-6 text-white md:mb-10 md:text-base md:leading-[30px] xl:max-w-[590px] 2xl:max-w-[600px]">
                  {description}
                </p>
              </Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 2xl:flex-nowrap 2xl:gap-8">
                <Reveal animation="up" delay={0.9}>
                  <Button asChild variant="brand" size="cta" className="inline-block">
                    <Link href={cta.href}>
                      <ButtonLabel>{cta.label}</ButtonLabel>
                    </Link>
                  </Button>
                </Reveal>
                <div className="flex items-center gap-[15px]">
                  <VideoDialog videoId={video.videoId} title={video.title}>
                    <PlayButton label={video.label} className="bg-white text-primary" />
                  </VideoDialog>
                  <h5 className="font-heading text-base leading-[1.2] font-normal text-white 2xl:text-xl">
                    {video.label}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        className="absolute right-0 bottom-0 -z-1 h-[84%] w-full max-w-none rounded-tl-[142px] object-cover opacity-30 lg:w-1/2 lg:opacity-60 xl:h-3/4 xl:opacity-100 2xl:h-[84%]"
      />
    </section>
  )
}
