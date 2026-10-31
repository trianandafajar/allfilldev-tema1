import { BlogLayout } from "@/components/shared/blog-layout"
import { BlogPostCard, type BlogPostCardData } from "@/components/shared/blog-post-card"
import type { BlogSidebarProps } from "@/components/shared/blog-sidebar"

export type BlogListProps = {
  posts: readonly BlogPostCardData[]
  sidebar: BlogSidebarProps
}

export function BlogList({ posts, sidebar }: BlogListProps) {
  return (
    <BlogLayout sidebar={sidebar}>
      <div className="grid gap-10 xl:gap-[60px]">
        {posts.map((post) => (
          <BlogPostCard key={post.href} {...post} />
        ))}
      </div>
    </BlogLayout>
  )
}
