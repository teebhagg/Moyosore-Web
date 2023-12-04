import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moyosore',
  description: 'Explore the vibrant world of Fellowship, Medicine, Creativity, and People through the lens of an eccentric individual with a unique perspective on life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
