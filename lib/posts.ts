export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "perfect-acrylic-basics",
    title: "Perfect Acrylic Basics",
    date: "2025-09-01",
    excerpt: "Everything you need to know to get flawless acrylic nails that last.",
    cover: "https://images.pexels.com/photos/6045539/pexels-photo-6045539.jpeg",
    content: `
      <p>Acrylic nails are a classic choice for longevity and style. In this post we cover preparation, application, and aftercare so your set stays perfect for weeks.</p>
      <h3>Preparation</h3>
      <p>Good prep means healthy nails. Always push back cuticles, lightly buff the nail plate, and remove oils before application.</p>
      <h3>Application Tips</h3>
      <p>Use thin layers and sculpt carefully. Invest in quality monomer and powder for a strong base.</p>
      <h3>Aftercare</h3>
      <p>Keep nails dry for the first 24 hours, moisturize with cuticle oil daily, and book refills every 2-3 weeks.</p>
    `,
  },
  {
    slug: "nail-art-trends-2025",
    title: "Nail Art Trends 2025",
    date: "2025-08-15",
    excerpt: "A quick look at the trending nail art styles youll see everywhere this year.",
    cover: "https://images.pexels.com/photos/10828767/pexels-photo-10828767.jpeg",
    content: `
      <p>From minimalist accents to bold chrome finishes, 2025 brings contrast, texture, and unexpected details.</p>
      <ul>
        <li>Micro french tips</li>
        <li>Chrome gradients</li>
        <li>Embedded gems and foil</li>
      </ul>
    `,
  },
  {
    slug: "care-for-refills",
    title: "How to Care Between Refills",
    date: "2025-07-02",
    excerpt: "Simple routines to keep your acrylics looking fresh between salon visits.",
    cover: "https://images.pexels.com/photos/10420563/pexels-photo-10420563.jpeg",
    content: `
      <p>Maintain shine and strength by avoiding harsh chemicals and using gentle filing at home when needed.</p>
      <p>Use a soft brush to clean underneath nails and never pry or pick at the enhancements.</p>
    `,
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null
}
