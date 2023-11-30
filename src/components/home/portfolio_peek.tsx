import React from 'react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images'

export default function PortfolioPeek() {
  return (
    <div id="portfolio" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
    </div>
  )
}

const ImageCard = () => {
    return (
      <Image
        src={coverImg}
        alt="Moyosore"
        width={400}
        height={400}
        className="w-full aspect-[4/3] rounded-lg object-cover bg-red-500"
      />
    )
}