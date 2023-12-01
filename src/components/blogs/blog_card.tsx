import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogInterface } from '@/utils/interface/blog'
import { urlFor } from '../../../sanity/client'

interface Props {
  blogData: BlogInterface;
}

export default function BlogCard(props: Props) {
  const { blogData } = props;
  return (
    <Link href="/blog/[id]" as={`/blog/${blogData.slug.current}`}>
    <div className='rounded-xl space-y-4 p-[12px] hover:p-[10px] hover:border-2 hover:border-slate-300 hover:shadow-lg'>
      <Image
        src={urlFor(blogData.coverImage).url()}
        alt="Moyosore"
        width={400}
        height={400}
        className="w-full aspect-[4/3] rounded-lg object-cover" 
      />
      <h1 className='text-2xl'>{blogData.title}</h1>
      <div className="flex justify-between">
        <p>Published</p>
        <p>{blogData.category._ref}</p>
      </div>
    </div>
    </Link>
  )
}
