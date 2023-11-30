import React from 'react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images'

export default function BlogCard() {
  return (
    <div className='rounded-xl space-y-4 p-[12px] hover:p-[10px] hover:border-2 hover:border-slate-300 hover:shadow-lg'>
      <Image
        src={coverImg}
        alt="Moyosore"
        width={400}
        height={400}
        className="w-full aspect-[4/3] rounded-lg object-cover-500" 
      />
      <h1 className='text-3xl'>Title</h1>
      <div className="flex justify-between">
        <p>Published</p>
        <p>Category</p>
      </div>
    </div>
  )
}
