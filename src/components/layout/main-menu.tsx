import Image from "next/image"
import Link from "next/link"

import { FaIcon } from "@/components/shared/fa-icon"
import type { NavItem } from "@/content/situs"

const topLinkClass =
  "inline-block py-5 text-base font-medium leading-[28px] text-white capitalize transition-all duration-400 ease-in-out hover:text-primary! group-hover/item:text-accent"

const submenuBase =
  "invisible absolute top-full z-99999 translate-y-2.5 bg-white opacity-0 shadow-menu transition-all duration-400 ease-in-out group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100"

export function MainMenu({ items }: { items: readonly NavItem[] }) {
  return (
    <nav aria-label="Navigasi utama" className="hidden xl:block">
      <ul>
        {items.map((item) => {
          const hasSub = Boolean(item.children || item.previews)
          return (
            <li
              key={item.label}
              className="group/item relative inline-block me-5 last:me-0 2xl:me-[26px]"
            >
              <Link href={item.href} className={topLinkClass}>
                {item.label}
                {hasSub ? <FaIcon name="solid-angle-down" className="ms-0.5 text-base" /> : null}
              </Link>

              {item.children ? (
                <ul className={`${submenuBase} start-0 min-w-60`}>
                  {item.children.map((child) => (
                    <li key={child.label} className="group/sub block w-full">
                      <Link
                        href={child.href}
                        className="relative z-11 block w-full border-b border-line px-[25px] py-[11px] text-base leading-[28px] font-semibold text-foreground capitalize group-last/sub:border-0 group-hover/sub:bg-forest group-hover/sub:text-white!"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.previews ? (
                <div className={`${submenuBase} -left-[250px] w-[800px] p-5`}>
                  <div className="flex items-center justify-between gap-[18px]">
                    {item.previews.map((preview) => (
                      <div
                        key={preview.label}
                        className="relative w-[32%] shadow-menu"
                      >
                        <Link
                          href={preview.href}
                          className="group/thumb relative block w-full before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-shade before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100"
                        >
                          <Image
                            src={preview.image}
                            alt={preview.title}
                            width={400}
                            height={300}
                            className="h-auto w-full"
                          />
                          <span className="invisible absolute top-1/2 left-1/2 mt-5 flex w-3/5 -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-2.5 text-center text-sm text-white opacity-0 transition-all duration-400 group-hover/thumb:visible group-hover/thumb:mt-0 group-hover/thumb:opacity-100">
                            <span className="px-5 py-3.5 text-sm">{preview.label}</span>
                          </span>
                        </Link>
                        <h4 className="mx-auto my-[15px] block text-center font-sans text-base leading-[28px] font-bold">
                          {preview.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
