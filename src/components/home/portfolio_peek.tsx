import React from 'react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images'
import { urlFor } from '../../../sanity/client';
import { Button } from '../ui/button';

interface Props {
  images: any[];
}

export default function PortfolioPeek(props: Props) {
  const { images } = props;
  return (
    <div className="space-y-5">
      <div id="portfolio" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {images.map((image: any, index: number) => (
          <ImageCard key={index} url={urlFor(image.image).url()} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Button variant="ghost" className="mt-4  border">
            View Portfolio
          </Button>
      </div>
    </div>
  )
}

const ImageCard = ({url}:{url: string}) => {
    return (
      <Image
        src={url}
        alt="Moyosore"
        width={600}
        height={600}
        className="w-full aspect-[4/3] rounded-lg object-cover bg-red-500"
      />
    )
}