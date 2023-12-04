
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Moyosore',
  description: 'Explore the vibrant world of Fellowship, Medicine, Creativity, and People through the lens of an eccentric individual with a unique perspective on life, My name is Moyosore and here is my God-Sized vision',
}

export default function ContactLayout({
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
