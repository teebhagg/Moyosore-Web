
import { client } from "../../../sanity/client";
import { BlogInterface } from "../interface/blog";

export const getBlogData = async () => {
  const blogQuery = `*[_type == 'blog'] | order(_createdAt desc)`;
  const blogData:BlogInterface[] = await client.fetch(blogQuery);
  console.log(`${blogData.length} items`);
  return { blogData };
};
