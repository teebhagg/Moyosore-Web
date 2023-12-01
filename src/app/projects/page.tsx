import ProjectCard from "@/components/projects/project_card";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { getProjects } from "@/utils/data/projects_data";

export default async function ProjectsPage() {
  const { projectData } = await getProjects();
  return (
    <main className="max-w-[1800px] mx-auto">
      <p className="text-5xl font-bold px-6 pt-20">Some Projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full py-4 px-6">
        {/* <ProjectCard /> */}
        {projectData.map((project: any, index: number) => (
          <ProjectCard key={index} projectData={project} />
        ))}
      </div>
      <div className="px-6">
        <SectionBanner />
        <Separator className="mt-5" />
        <Separator className="mb-5" />
        <SectionBanner />
      </div>
    </main>
  );
}

const SectionBanner = () => {
  return (
    <Link href="/projects">
      <div className="w-full h-[200px] rounded-lg bg-blue-100">
        <h1 className="text-5xl font-bold">Title</h1>
      </div>
    </Link>
  );
};
