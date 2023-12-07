"use client";

import BlogPostCoverImage from "@/components/blogs/cover_image";
import RemainingBlogCard from "@/components/blogs/remaining_blog_card";
import { getBlogPost } from "@/utils/data/blog_post";
import { BlogInterface } from "@/utils/interface/blog";
import { PortableText } from "@portabletext/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/client";

export default function BlogPost() {
  //Blog States
  const [blogData, setBlogData] = useState<BlogInterface | undefined>();
  const [remainderBlogs, setRemainderBlogs] = useState<BlogInterface[]>([]);

  const params = useParams();

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      const { blogData } = await getBlogPost({ slug: params?.id as string });
      setBlogData(blogData);

      // fetch remaining blogs
      const remainingBlogs = await client.fetch<
        BlogInterface[]
      >(`*[_type == "blog" && slug != "protection"]
      [0..2] {
       _id, title, slug, coverImage, subTitle, body, category, _createdAt
     }`);
      setRemainderBlogs(remainingBlogs);

      console.log(remainingBlogs);
    };
    fetchData();
  }, []);

  if (!blogData) {
    return null;
  }

  // blogData && console.log(blogData);

  const { title, body, coverImage, subTitle } = blogData;

  return (
    <main className="max-w-[1800px] mx-auto px-6 pt-10 pb-24 space-y-16">
      {/* Cover Image */}
      <BlogPostCoverImage image={coverImage} title={title} />

      {/* Content */}
      <div className="space-y-5 lg:space-y-10 text-center">
        <p className="text-3xl lg:text-5xl font-bold">{subTitle}</p>
        <p className="text-lg">
          <PortableText value={body} />
        </p>
      </div>

      {/* Related Blogs */}
      <div className="">
        <p className="text-3xl lg:text-5xl font-bold mb-10">Related Blogs</p>
        <div className="flex md:grid flex-col md:grid-cols-3 gap-5 space-y-5 md:space-y-0">
          {remainderBlogs.map((blog: BlogInterface, index: number) => (
            <RemainingBlogCard
              key={index}
              header={blog.title}
              blogLink={blog.slug.current}
              image={blog.coverImage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
