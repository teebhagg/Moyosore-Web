import { client } from "../../../sanity/client";
import { ProjectsPeekInterface } from "../interface/home";

export const getProjects = async () => {
  const projectQuery = `*[_type == 'projects'] | order(_createdAt desc)`;
  const projectData: ProjectsPeekInterface[] = await client.fetch(projectQuery);
  console.log(projectData);
  return { projectData };
};
