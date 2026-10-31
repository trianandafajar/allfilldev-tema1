import Image from "next/image"
import Link from "next/link"

import { FaIcon } from "@/components/shared/fa-icon"
import { Reveal } from "@/components/shared/reveal"
import { SectionTitle } from "@/components/shared/section-title"

export type BlogPost = {
  title: string
  excerpt: string
  href: string
  date: string
  comments: string
  author: string
  readMore: string
  image: { src: string; alt: string; width: number; height: number }
}

export type BlogProps = {
  eyebrow: string
  title: string
  posts: readonly BlogPost[]
}

const delays = [0.3, 0.5, 0.7] as const

export function Blog({ eyebrow, title, posts }: BlogProps) {
  return (
    <section id="blog" className="section-padding overflow-hidden bg-white">
      <div className="container">
        <div className="title-col-6">
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            className="mb-10 lg:mb-[50px] 2xl:mb-[60px]"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
          {posts.map((post, index) => (
            <Reveal key={post.title} animation="up" delay={delays[index % delays.length]}>
              <div className="w-full sm:w-[calc((11/12)*(100%+1rem)-1rem)] md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/3)]">
                <article className="group">
                  <div className="relative w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      width={post.image.width}
                      height={post.image.height}
                      className="w-full overflow-hidden rounded-[10px] transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 rounded-[5px_0] bg-secondary px-5 py-[5px] font-heading text-xl leading-[30px] font-normal text-forest">
                      {post.date}
                    </div>
                  </div>
                  <div className="relative z-1 ml-auto rounded-[5px_0_5px_5px] bg-white p-6 shadow-brand xl:-mt-[60px] xl:w-[91%] 2xl:w-[90%] 2xl:p-[30px]">
                    <ul className="mb-3 flex items-center gap-5 2xl:mb-5">
                      <li className="flex items-center gap-[5px] text-sm leading-[160%] text-muted-foreground">
                        <FaIcon name="regular-comments" className="text-forest" />
                        {post.comments}
                      </li>
                      <li className="flex items-center gap-[5px] text-sm leading-[160%] text-muted-foreground">
                        <FaIcon name="regular-user" className="text-forest" />
                        {post.author}
                      </li>
                    </ul>
                    <Link
                      href={post.href}
                      className="mb-2.5 block font-heading text-[25px] leading-[35px] font-normal text-forest group-hover:text-primary 2xl:text-[30px] 2xl:leading-10"
                    >
                      {post.title}
                    </Link>
                    <p className="mb-5 text-muted-foreground 2xl:mb-[30px]">{post.excerpt}</p>
                    <Link
                      href={post.href}
                      className="text-[15px] leading-6 font-normal tracking-[3px] text-forest"
                    >
                      {post.readMore} <FaIcon name="solid-arrow-right" />
                    </Link>
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
