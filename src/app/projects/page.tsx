import ProjectCard from "@/components/projects/project_card";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  return (
    <main className="max-w-[1800px] mx-auto">
      <p className="text-5xl font-bold px-6 pt-20">Some Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between py-4 px-6">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
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
