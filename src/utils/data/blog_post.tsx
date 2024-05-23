import { client } from "../../../sanity/client";
import { BlogInterface } from "../interface/blog";

export const getBlogPost = async ({ slug }: { slug: string }) => {
  const blogQuery = `*[_type == 'blog' && slug.current == $slug] {
    ...,
    "audio": *[_id == ^.audio.asset._ref][0].url
  }[0]
  `;
  const blogData: BlogInterface = await client.fetch(blogQuery, { slug });
  console.log(blogData);
  return { blogData };
};
