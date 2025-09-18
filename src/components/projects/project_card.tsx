import { ProjectsPeekInterface } from "@/utils/interface/home";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";

interface Props {
  projectData: ProjectsPeekInterface;
}

export default function ProjectCard(props: Props) {
  const { projectData } = props;
  return (
    <div className="rounded-3xl p-10 space-y-8 bg-[#F6F5F2] h-[900px] w-full flex flex-col">
      <div className="relative h-[300px] w-2/4">
        <Image
          src={urlFor(projectData.image).url()}
          alt="Moyosore"
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <p className="md:text-lg flex-1">{projectData.body}</p>
      <h1 className="text-3xl text-right font-light mt-auto">
        {projectData.author}
      </h1>
    </div>
  );
}
