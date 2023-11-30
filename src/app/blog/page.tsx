import BlogCard from "@/components/blogs/blog_card";

export default function BlogPage() {
  return (
    <main className="max-w-[1800px] mx-auto">
        <p className="text-5xl font-bold px-6 pt-20">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 items-center justify-between py-4 px-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
