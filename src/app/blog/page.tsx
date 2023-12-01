import BlogCard from "@/components/blogs/blog_card";
import { getBlogData } from "@/utils/data/blog_data";
import { BlogInterface } from "@/utils/interface/blog";

export default async function BlogPage() {
  const { blogData } = await getBlogData();
  console.log(blogData);
  return (
    <main className="max-w-[1800px] mx-auto">
        <p className="text-5xl font-bold px-6 pt-20">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 items-center justify-between py-4 px-6">
        {blogData.map((blog: BlogInterface, index: number) => (
          <BlogCard key={index} blogData={blog} />
        ))}
      </div>
    </main>
  );
}
