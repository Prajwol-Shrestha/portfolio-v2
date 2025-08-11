import { getBlogs } from "@/app/services/getBlogs";
import { IDevToArticle } from "@/types/forums-api-type";
import { useEffect, useState } from "react";

export default function useGetBlogs(query?: Record<string, any>) {
  const [blogs, setBlogs] = useState<IDevToArticle[]>();
  const [isLoading, setIsLoading] = useState(false);

  const queryParams = {
    username: "prajwolshrestha",
    ...query,
  };
  async function get() {
    const blogss = await getBlogs(queryParams);
    setBlogs(blogss);
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      get();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    blogs,
    isLoading,
  };
}
