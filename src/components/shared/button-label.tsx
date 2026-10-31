import { FaIcon } from "@/components/shared/fa-icon"
import { cn } from "@/lib/utils"

type ButtonLabelProps = {
  children: React.ReactNode
  iconClassName?: string
}

/** Isi tombol `.cmn-btn`: teks, spasi, lalu ikon panah dengan `margin-left: 5px` (seperti `<i>` di template). */
export function ButtonLabel({ children, iconClassName }: ButtonLabelProps) {
  return (
    <>
      {children}{" "}
      <FaIcon name="solid-arrow-right" className={cn("ml-[5px] transition-all duration-400", iconClassName)} />
    </>
  )
}
