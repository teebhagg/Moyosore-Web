"use client"

import React, { useEffect, useState } from 'react'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images'
import BlogPostCoverImage from '@/components/blogs/cover_image'
import { getBlogPost } from '@/utils/data/blog_post';
import { BlogInterface } from '@/utils/interface/blog'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  //Blog States
  const [blogData, setBlogData] = useState<BlogInterface|undefined>();

  const params = useParams();
  
  // useEffect
  useEffect(() => {
    const fetchData = async() => {
      const { blogData } = await getBlogPost({ slug: params?.id as string });
      setBlogData(blogData);
    }
    fetchData();
  }, []);

  if (!blogData) {
    return null
  }

  // blogData && console.log(blogData);

  const { title, body, coverImage, subTitle } = blogData

  return (
    <main className='max-w-[1800px] mx-auto px-6 pt-10 pb-24 space-y-10'>
        {/* Cover Image */}
        <BlogPostCoverImage image={coverImage} title={title} />
            
            {/* Content */}
        <div className="space-y-5 lg:space-y-20 text-center">
            <p className="text-3xl lg:text-5xl font-bold">{subTitle}</p>
            <p className="text-lg">
                <PortableText value={body}  />
            </p>
        </div>
    </main>
  )
}
