"use client";

import BlogCard from "@/components/cards/blog-card";
import Typography from "@/components/ui/Typography";
import useGetBlogs from "@/hooks/useGetBlogs";
import clsx from "clsx";

export default function BlogsSections() {
  const query = {
    page: 1,
    per_page: 3,
  };
  const { blogs, isLoading } = useGetBlogs(query);

  return (
    <>
      {isLoading && <> loading... </>}
      {blogs ? (
        <section>
          <Typography variant={"h5"} component="h5" className="text-highlight">
            Latest Blogs
          </Typography>

          <div className="mt-8 space-y-8">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                blog={blog}
                className={clsx("", {
                  "flex-row-reverse": index % 2 === 0,
                })}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
