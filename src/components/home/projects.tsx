import React from 'react'
import Image from 'next/image'
import { coverImg } from '@/utils/data/images';

export default function ProjectsPeek() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

const ProjectCard = () => {
    return (
        <div className="rounded-lg p-16 space-y-3 bg-[#F6F5F2]">
            <Image
                src={coverImg}
                alt="Moyosore"
                width={400}
                height={400}
                className="w-1/3 aspect-[4/3] rounded-sm object-cover"
            />
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <h1 className="text-4xl text-right font-light">Moyosore</h1>
        </div>
    );
}