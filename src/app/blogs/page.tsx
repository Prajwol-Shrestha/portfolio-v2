"use client";

import BlogCard from "@/components/cards/blog-card";
import Typography from "@/components/ui/Typography";
import useGetBlogs from "@/hooks/useGetBlogs";

export default function Blogs() {
  const { blogs, isLoading } = useGetBlogs();

  return (
    <main>
      <section className="space-y-8 my-12 sm:my-22">
        <Typography variant={"h3"} component="h3" className="text-highlight font-semibold">
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
