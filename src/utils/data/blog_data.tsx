
import { client } from "../../../sanity/client";
import { BlogInterface } from "../interface/blog";

export const getBlogData = async () => {
  const blogQuery = "*[_type == 'blog']";
  const blogData:BlogInterface[] = await client.fetch(blogQuery);

  return { blogData };
};
