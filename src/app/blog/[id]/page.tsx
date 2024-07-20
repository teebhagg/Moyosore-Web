"use client";

import BlogPostCoverImage from "@/components/blogs/cover_image";
import RemainingBlogCard from "@/components/blogs/remaining_blog_card";
import { getBlogPost } from "@/utils/data/blog_post";
import { BlogInterface } from "@/utils/interface/blog";
import { PortableText } from "@portabletext/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/client";
import BlockContent from "sanity/presentation";
import ReactAudioPlayer from "react-audio-player";

export const revalidate = 1;

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
      >(`*[_type == "blog" && slug != "${blogData?.slug}"] | order(_createdAt desc) [0..2] {
        _id, title, slug, coverImage, subTitle, body, category, _createdAt
      }`);
      setRemainderBlogs(remainingBlogs);

      console.log(remainingBlogs);
    };
    fetchData();
  }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <img src={value.imageUrl} />,
      callToAction: ({ value, isInline }: any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      em: ({ children }: any) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-xl">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-lg">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-base">{children}</h4>,
      h5: ({ children }: any) => <h5 className="text-sm">{children}</h5>,
      h6: ({ children }: any) => <h6 className="text-xs">{children}</h6>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }: any) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }: any) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }: any) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }: any) => <li>✅ {children}</li>,
    },
  };

  if (!blogData) {
    return null;
  }

  // blogData && console.log(blogData);

  const { title, body, coverImage, subTitle } = blogData;

  return (
    <main className=" max-w-[1800px] mx-auto px-6 pt-10 pb-24 space-y-16">

      {/* Audio Player */}
      <div className="w-full sticky top-0 pt-2">
        <ReactAudioPlayer src={blogData?.audio} controls className="w-full" />
      </div>

      {/* Cover Image */}
      <BlogPostCoverImage image={coverImage} title={title} />

      {/* Content */}
      <div className="space-y-5 lg:space-y-10 text-center">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold">{subTitle}</p>
        <p className="text-lg text-left">
          <PortableText value={body} components={myPortableTextComponents} />
        </p>
      </div>

      {/* Related Blogs */}
      <div className="">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10">Related Blogs</p>
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
