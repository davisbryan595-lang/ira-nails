import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Glam Hard Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tips, trends, and behind-the-scenes from our salon.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="card rounded-2xl overflow-hidden border-2 bg-card">
              <img src={post.cover} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
