import { coverImg } from "@/utils/data/images";
import { ProjectsPeekInterface } from "@/utils/interface/home";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";

interface Props {
    projectData: ProjectsPeekInterface;
}

export default function ProjectCard(props: Props) {
    const { projectData } = props;
    return (
        <div className="rounded-lg p-10 space-y-8 bg-[#F6F5F2]">
            <Image
                src={urlFor(projectData.image).url()}
                alt="Moyosore"
                width={400}
                height={400}
                className="w-2/4 aspect-[3/4] rounded-sm object-cover"
            />
            <p className="text-xl">{projectData.body}</p>
            <h1 className="text-3xl text-right font-light">{projectData.author}</h1>
        </div>
    );
}