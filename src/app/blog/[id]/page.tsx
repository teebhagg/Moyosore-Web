import React from 'react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images'
import BlogPostCoverImage from '@/components/blogs/cover_image'

export default function BlogPost() {
  return (
    <main className='max-w-[1800px] mx-auto px-6 py-24 space-y-10'>
        {/* Cover Image */}
        <BlogPostCoverImage />
            
            {/* Content */}
        <div className="space-y-20 text-center">
            <p className="text-5xl font-bold">Subtitle</p>
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
    </main>
  )
}
