"use client"

import { useSyncExternalStore, type ReactNode } from "react"

const STICKY_AFTER = 150

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}

const getSnapshot = () => window.scrollY > STICKY_AFTER
const getServerSnapshot = () => false

/**
 * Header absolut di puncak halaman; setelah scroll lebih dari 150px menjadi
 * `fixed` dengan latar hijau tua dan animasi fadeInDown (setara `.sticky` template).
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const sticky = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <header
      id="header-sticky"
      data-sticky={sticky}
      className="group/header absolute top-0 left-0 z-9 w-full py-7 data-[sticky=true]:fixed data-[sticky=true]:z-100 data-[sticky=true]:animate-fade-in-down-fast data-[sticky=true]:bg-forest data-[sticky=true]:py-2.5 data-[sticky=true]:transition-all data-[sticky=true]:duration-900"
    >
      {children}
    </header>
  )
}
