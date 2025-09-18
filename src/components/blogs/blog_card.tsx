"use client";

import { BlogInterface } from "@/utils/interface/blog";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/client";

interface Props {
  blogData: BlogInterface;
  index: number;
}

export default function BlogCard(props: Props) {
  const { blogData, index } = props;

  if (!blogData || !blogData.coverImage) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="group">
      <Link href="/blog/[id]" as={`/blog/${blogData.slug.current}`}>
        <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-[500px] w-full flex flex-col">
          {/* Image Container */}
          <div className="relative overflow-hidden h-[250px] w-full">
            <Image
              src={urlFor(blogData?.coverImage)?.url() ?? ""}
              alt={blogData.title}
              fill
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Category Badge */}
            {blogData.category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full backdrop-blur-sm">
                  {blogData.category.title || "Blog"}
                </span>
              </div>
            )}

            {/* Read More Arrow */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 flex-1 flex flex-col">
            {/* Meta Information */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blogData._createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {blogData.title}
            </h2>

            {/* Subtitle/Description */}
            {blogData.subTitle && (
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {blogData.subTitle}
              </p>
            )}

            {/* Read More Link */}
            <div className="pt-2 mt-auto">
              <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                Read Blog
                <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
