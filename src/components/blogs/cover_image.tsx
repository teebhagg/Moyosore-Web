import { coverImg } from '@/utils/data/images'
import React from 'react'
import { Button } from '../ui/button'
import { urlFor } from '../../../sanity/client'

interface Props {
  title: string
  image: any
  category?: string
  datePublished?: string
}

export default function BlogPostCoverImage(props: Props) {
  const { title, category, datePublished, image } = props
  return (
    <div
    style={{
      backgroundImage: `url('${urlFor(image).url()}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    className="w-full h-[700px] rounded-lg">
    {/* Title and Button in bottom */}
    <div className="w-full h-full flex flex-col justify-end items-center p-20">
      <p className="">{category}</p>
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="">{datePublished}</p>
    </div>
    
    {/* <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white">Moyosore</h1>
      <Button variant="outline" className="mt-4">
        Get Started
      </Button>
    </div> */}
  </div>
  )
}
