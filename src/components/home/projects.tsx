import React from 'react'
import ProjectCard from '../projects/project_card'
import { ProjectsPeekInterface } from '@/utils/interface/home';

interface Props {
    data: ProjectsPeekInterface[];
}

export default function ProjectsPeek(props: Props) {
  const { data } = props;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
      {data.map((project: ProjectsPeekInterface, index: number) => (
        <ProjectCard key={index} projectData={project} />
      ))}
    </div>
  )
}
