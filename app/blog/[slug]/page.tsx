import { getPostBySlug, getAllPosts } from "../../../lib/posts"
import { notFound } from "next/navigation"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">{post.title}</h1>
            <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
          </header>

          <img src={post.cover} alt={post.title} className="w-full h-80 object-cover rounded-2xl mb-8" />

          <section className="prose max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-10">
            <a href="/blog" className="text-primary hover:underline">Back to Blog</a>
          </div>
        </article>
      </div>
    </main>
  )
}
