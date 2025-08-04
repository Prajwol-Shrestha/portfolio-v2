"use client";

import BlogCard from "@/components/cards/blog-card";
import Typography from "@/components/ui/Typography";
import useGetBlogs from "@/hooks/useGetBlogs";

export default function Blogs() {
  const { blogs, isLoading } = useGetBlogs();

  return (
    <main className="section-wrapper">
      <section className="space-y-8">
        <Typography variant={"h3"} component="h3" className="text-highlight">
          Latest Blogs
        </Typography>
        {isLoading && <> loading... </>}
        {!isLoading &&
          blogs &&
          blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      </section>
    </main>
  );
}
