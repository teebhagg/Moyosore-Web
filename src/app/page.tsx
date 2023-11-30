import AboutPeek from '@/components/home/about_peek'
import BlogPeek from '@/components/home/blog_peek'
import ContactBanner from '@/components/home/contact_banner'
import CoverImage from '@/components/home/cover_image'
import PortfolioPeek from '@/components/home/portfolio_peek'
import ProjectsPeek from '@/components/home/projects'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center justify-between py-24 px-6 space-y-24">
        <CoverImage />
        <AboutPeek />
        <PortfolioPeek />
        <BlogPeek />
        <ProjectsPeek />
        <ContactBanner />
      </div>
    </main>
  )
}
