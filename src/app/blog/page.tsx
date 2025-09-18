"use client";

import BlogCard from "@/components/blogs/blog_card";
import BlogSkeleton from "@/components/blogs/blog_skeleton";
import ScrollAnimatedWrapper from "@/components/common/scroll_animated_wrapper";
import { BlogInterface } from "@/utils/interface/blog";
import { motion } from "framer-motion";
import { Loader2, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { client } from "../../../sanity/client";

const BLOGS_PER_PAGE = 10;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalBlogs, setTotalBlogs] = useState(0);

  // Fetch blogs function
  const fetchBlogs = useCallback(
    async (pageNum: number, search: string = "") => {
      if (pageNum === 0) {
        setInitialLoading(true);
      } else {
        setLoading(true);
      }

      try {
        const offset = pageNum * BLOGS_PER_PAGE;

        // Build search query
        const searchQuery = search
          ? `*[_type == "blog" && (title match "*${search}*" || subTitle match "*${search}*")]`
          : `*[_type == "blog"]`;

        const query = `${searchQuery} | order(_createdAt desc) [${offset}...${
          offset + BLOGS_PER_PAGE
        }]`;
        const countQuery = `count(${searchQuery})`;

        const [data, count] = await Promise.all([
          client.fetch<BlogInterface[]>(query),
          client.fetch<number>(countQuery),
        ]);

        if (pageNum === 0) {
          setBlogs(data);
          setTotalBlogs(count);
          setInitialLoading(false);
        } else {
          setBlogs((prev) => [...prev, ...data]);
        }

        setHasMore(
          data.length === BLOGS_PER_PAGE && blogs.length + data.length < count
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
        if (pageNum === 0) {
          setInitialLoading(false);
        }
      } finally {
        setLoading(false);
      }
    },
    [blogs.length]
  );

  // Initial load
  useEffect(() => {
    fetchBlogs(0);
  }, []);

  // Handle search
  const handleSearch = useCallback(
    (search: string) => {
      setSearchTerm(search);
      setPage(0);
      setBlogs([]);
      setHasMore(true);
      fetchBlogs(0, search);
    },
    [fetchBlogs]
  );

  // Load more function
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBlogs(nextPage, searchTerm);
    }
  }, [loading, hasMore, page, searchTerm, fetchBlogs]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-[150px] pb-5">
        <div className="max-w-[1800px] mx-auto px-6">
          <ScrollAnimatedWrapper delay={0.1}>
            <div className="text-center space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black bg-clip-text text-transparent">
                Our Blog
              </h1>

              {/* Stats */}
              <div className="flex justify-center items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {totalBlogs}
                  </div>
                  <div className="text-sm text-gray-500">Blogs</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">∞</div>
                  <div className="text-sm text-gray-500">Ideas</div>
                </div>
              </div>
            </div>
          </ScrollAnimatedWrapper>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-[1800px] mx-auto px-6">
          <ScrollAnimatedWrapper delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 shadow-lg"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </ScrollAnimatedWrapper>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-[1800px] mx-auto px-6">
          {/* Show initial loading skeletons */}
          {initialLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: BLOGS_PER_PAGE }).map((_, index) => (
                <BlogSkeleton key={index} index={index} />
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog: BlogInterface, index: number) => (
                  <BlogCard
                    key={blog._id || index}
                    blogData={blog}
                    index={index}
                  />
                ))}

                {/* Show skeleton loaders for next batch while loading */}
                {loading &&
                  hasMore &&
                  Array.from({ length: BLOGS_PER_PAGE }).map((_, index) => (
                    <BlogSkeleton key={`loading-${index}`} index={index} />
                  ))}
              </div>

              {/* Minimal loading indicator (only shown if skeletons aren't showing) */}
              {loading && !hasMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center items-center py-8">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-medium">Finishing up...</span>
                  </div>
                </motion.div>
              )}

              {/* End of Content */}
              {!hasMore && !loading && blogs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8">
                  <div className="inline-flex items-center space-x-2 text-gray-400">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-medium">End of blogs</span>
                    <div className="w-12 h-px bg-gray-300"></div>
                  </div>
                </motion.div>
              )}
            </>
          ) : !initialLoading ? (
            // Empty State (only show when not initially loading)
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20">
              <div className="max-w-md mx-auto space-y-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  No blogs found
                </h3>
                <p className="text-gray-600">
                  {searchTerm
                    ? `No blogs match "${searchTerm}". Try a different search term.`
                    : "No blogs available at the moment."}
                </p>
              </div>
            </motion.div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
