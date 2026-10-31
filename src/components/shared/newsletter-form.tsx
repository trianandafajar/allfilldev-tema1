"use client"

import { ButtonLabel } from "@/components/shared/button-label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type NewsletterFormProps = {
  emailLabel: string
  emailPlaceholder: string
  submit: string
}

// Formulir belum terhubung ke backend; kirim data lewat server action atau API saat sudah ada tujuannya.
function preventSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function NewsletterForm({ emailLabel, emailPlaceholder, submit }: NewsletterFormProps) {
  return (
    <form
      onSubmit={preventSubmit}
      className="relative z-1 flex flex-wrap items-center gap-[11px] xl:flex-nowrap"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {emailLabel}
      </label>
      <Input
        id="newsletter-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder={emailPlaceholder}
        className="h-[60px] rounded-[20px] border-white/20 px-5 py-2.5 text-sm text-white placeholder:text-white md:text-sm"
      />
      <Button type="submit" variant="brand" size="cta" className="h-[60px] min-w-[178px] px-4">
        <ButtonLabel>{submit}</ButtonLabel>
      </Button>
    </form>
  )
}
