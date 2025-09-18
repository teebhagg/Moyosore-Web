"use client";

import { getBlogPost } from "@/utils/data/blog_post";
import { BlogInterface } from "@/utils/interface/blog";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { client, urlFor } from "../../../../sanity/client";

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
      image: ({ value }: any) => (
        <div className="my-8">
          <Image
            src={value.imageUrl}
            alt="Blog content"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      ),
      callToAction: ({ value, isInline }: any) =>
        isInline ? (
          <a
            href={value.url}
            className="text-blue-600 hover:text-blue-800 underline">
            {value.text}
          </a>
        ) : (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
            <p className="text-blue-800 font-medium">{value.text}</p>
          </div>
        ),
    },

    marks: {
      em: ({ children }: any) => (
        <em className="text-black font-semibold italic">{children}</em>
      ),
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
            {children}
          </a>
        );
      },
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-8 mb-4 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-6 mb-3 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl md:text-2xl font-bold text-black mt-5 mb-3 leading-tight">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-lg md:text-xl font-semibold text-black mt-4 mb-2">
          {children}
        </h4>
      ),
      h5: ({ children }: any) => (
        <h5 className="text-base md:text-lg font-semibold text-black mt-3 mb-2">
          {children}
        </h5>
      ),
      h6: ({ children }: any) => (
        <h6 className="text-sm md:text-base font-semibold text-black mt-3 mb-2">
          {children}
        </h6>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-gray-300 pl-6 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="text-black leading-relaxed mb-4 text-lg">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside space-y-2 my-6 text-black">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside space-y-2 my-6 text-black">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-black leading-relaxed">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="text-black leading-relaxed">{children}</li>
      ),
    },
  };

  if (!blogData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 pt-[150px] pb-24">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const { title, body, coverImage, subTitle, _createdAt, category } = blogData;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 pt-[150px] pb-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </motion.div>

        {/* Blog Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12">
          {/* Category Badge */}
          {category && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <BookOpen className="w-4 h-4 mr-1" />
                Blog
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subTitle && (
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {subTitle}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex items-center space-x-6 text-gray-600 border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(_createdAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <button className="flex items-center space-x-2 hover:text-black transition-colors duration-200">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </motion.header>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={urlFor(coverImage).url()}
              alt={title}
              width={800}
              height={400}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sticky top-[120px] z-50">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 backdrop-blur-sm">
            <ReactAudioPlayer
              src={blogData?.audio}
              controls
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none">
          <PortableText value={body} components={myPortableTextComponents} />
        </motion.article>

        {/* Related Blogs Section */}
        {remainderBlogs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Related Blogs
              </h2>
              <p className="text-gray-600">
                Continue exploring more blogs and insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {remainderBlogs.map((blog: BlogInterface, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group">
                  <Link href="/blog/[id]" as={`/blog/${blog.slug.current}`}>
                    <div className="bg-white rounded-2xl hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-[400px] w-full flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden h-[200px] w-full">
                        <Image
                          src={urlFor(blog.coverImage).url()}
                          alt={blog.title}
                          fill
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(blog._createdAt)}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {blog.title}
                        </h3>

                        {blog.subTitle && (
                          <p className="text-gray-600 line-clamp-3 leading-relaxed">
                            {blog.subTitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
