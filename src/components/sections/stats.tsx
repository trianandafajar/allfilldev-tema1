import Image from "next/image"

import { CountUp } from "@/components/shared/count-up"

export type StatItem = { value: number; suffix: string; label: string }

export type StatsProps = {
  items: readonly StatItem[]
  separator: { src: string; width: number; height: number }
}

export function Stats({ items, separator }: StatsProps) {
  return (
    <section className="relative z-1 before:absolute before:bottom-0 before:left-0 before:-z-1 before:h-[82px] before:w-full before:bg-secondary before:content-['']">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          {items.flatMap((item, index) => {
            const counter = (
              <div
                key={item.label}
                className="grid gap-3.5 max-md:w-[40%] md:gap-[15px] lg:flex lg:items-center lg:gap-[15px] xl:gap-5"
              >
                <h2 className="mb-0 text-[26px] font-normal text-primary [-webkit-text-stroke:1px_var(--primary)] md:text-[34px] xl:text-[42px] 2xl:text-[50px]">
                  <CountUp
                    value={item.value}
                    suffix={item.suffix}
                    className="[&>span]:text-[26px] [&>span]:font-normal md:[&>span]:text-[34px] xl:[&>span]:text-[50px]"
                  />
                </h2>
                <p className="mt-2 text-xs leading-[18px] text-muted-foreground md:mt-[5px] md:text-sm md:leading-[25.6px] xl:text-base">
                  {item.label}
                </p>
              </div>
            )
            if (index === items.length - 1) return [counter]
            return [
              counter,
              <div key={`${item.label}-sep`} aria-hidden className="hidden lg:block">
                <Image src={separator.src} alt="" width={separator.width} height={separator.height} />
              </div>,
            ]
          })}
        </div>
      </div>
    </section>
  )
}
