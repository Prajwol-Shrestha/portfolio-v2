"use client"

import BlogCard from "@/components/cards/blog-card";
import Typography from "@/components/ui/Typography";
import { BASE_FORUMS_URL } from "@/constants/endpoints";
import { IDevToArticle } from "@/types/forums-api-type";
import fetcher from "@/utils/fetcher";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function BlogsSections() {
  const [blogs, setBlogs] = useState<IDevToArticle[]>([])
  const query = {
    username: "prajwolshrestha",
    page: 1,
    per_page: 3,
  };

  useEffect(() => {
    async function get() {
      const blogss = (await fetcher<IDevToArticle[]>(BASE_FORUMS_URL, query)) || [];
      setBlogs(blogss)
      console.log(blogss,'sad')
    }

    get()
    
  }, [])

  return (
    <>
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
