
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs | Moyosore',
  description: 'Explore the vibrant world of Fellowship, Medicine, Creativity, and People through the lens of an eccentric individual with a unique perspective on life.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}
