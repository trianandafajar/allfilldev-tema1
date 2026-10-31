import Image from "next/image"
import Link from "next/link"

import { FaIcon } from "@/components/shared/fa-icon"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type PricingPlan = {
  name: string
  price: string
  period: string
  features: readonly { label: string; included: boolean }[]
  cta: { label: string; href: string }
  /** Paket unggulan: kartu `.active` dengan lencana vertikal. */
  popularBadge?: string
}

export type PricingProps = {
  eyebrow: string
  title: string
  plans: readonly PricingPlan[]
  decoration: { src: string; width: number; height: number }
}

const delays = [0.3, 0.5, 0.7] as const

export function Pricing({ eyebrow, title, plans, decoration }: PricingProps) {
  return (
    <section id="harga" className="section-padding relative z-1 overflow-hidden bg-white">
      <div className="container">
        <div className="title-col-6">
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            className="mb-10 lg:mb-[50px] 2xl:mb-[60px]"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
          {plans.map((plan, index) => {
            const active = Boolean(plan.popularBadge)
            return (
              <Reveal key={plan.name} animation="up" delay={delays[index % delays.length]}>
                <div className="w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/3)]">
                  <article className="group/card relative rounded-[20px] border border-muted bg-white p-6 shadow-brand xl:p-10">
                    <h5 className="mb-2.5 text-xl leading-[30px] font-normal text-forest">
                      {plan.name}
                    </h5>
                    <div className="mb-6 flex items-end gap-2.5 xl:mb-10">
                      <h2 className="text-forest">{plan.price}</h2>
                      <span className="text-base text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="mb-[30px] grid gap-2 xl:mb-10">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.label}
                          className="flex items-center gap-2 text-sm text-muted-foreground xl:gap-3.5 xl:text-base"
                        >
                          <FaIcon
                            name={feature.included ? "solid-circle-check" : "solid-circle-xmark"}
                            className="text-base text-primary"
                          />
                          {feature.label}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="brand-outline"
                      size="cta"
                      className={cn(
                        "inline-block w-full",
                        active
                          ? "bg-primary text-white"
                          : "group-hover/card:bg-primary group-hover/card:text-white"
                      )}
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                    {plan.popularBadge ? (
                      <span className="absolute top-0 right-2.5 inline-block bg-primary px-1 pt-2.5 pb-10 text-sm leading-[30px] font-normal text-white uppercase [clip-path:polygon(100%_0,100%_100%,49%_84%,0_100%,0_0)] [writing-mode:vertical-rl] xl:right-10 xl:px-2 xl:pb-[54px] xl:text-base">
                        {plan.popularBadge}
                      </span>
                    ) : null}
                  </article>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
      <Image
        src={decoration.src}
        alt=""
        width={decoration.width}
        height={decoration.height}
        aria-hidden
        className="absolute top-[120px] right-[120px] -z-1 animate-up-down"
      />
    </section>
  )
}
