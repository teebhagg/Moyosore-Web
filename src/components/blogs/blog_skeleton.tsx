"use client";

import { motion } from "framer-motion";

interface BlogSkeletonProps {
  index: number;
}

export default function BlogSkeleton({ index }: BlogSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group">
      <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 animate-pulse h-[500px] w-full flex flex-col">
        {/* Image Skeleton */}
        <div className="relative overflow-hidden h-[250px] w-full">
          <div className="w-full h-full bg-gray-200"></div>

          {/* Category Badge Skeleton */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-gray-300 rounded-full w-12 h-5"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Meta Information Skeleton */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-20 h-3 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="w-full h-5 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
          </div>

          {/* Read More Skeleton */}
          <div className="pt-2 mt-auto">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
