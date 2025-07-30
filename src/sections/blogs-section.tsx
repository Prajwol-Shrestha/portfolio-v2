import BlogCard from "@/components/cards/blog-card";
import ProjectCard from "@/components/cards/project-card";
import Typography from "@/components/ui/Typography";
import { BASE_FORUMS_URL } from "@/constants/endpoints";
import { PROJECTS } from "@/constants/static-lists";
import { IDevToArticle } from "@/types/forums-api-type";
import fetcher from "@/utils/fetcher";
import clsx from "clsx";

export default async function BlogsSections() {
  const query = {
    username: "prajwolshrestha",
    page: 1,
    per_page: 3,
  };
  const blogs = (await fetcher<IDevToArticle[]>(BASE_FORUMS_URL, query)) || [];

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
