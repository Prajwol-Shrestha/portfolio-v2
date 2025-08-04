import { getSingleBlog } from "@/app/services/getSingleBlog";
import { notFound } from "next/navigation";
import BlogContent from "./blog-content";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getSingleBlog(id);

  if (!blog) throw notFound();

  return (
    <main className="section-wrapper">
     <BlogContent blog={blog} />
    </main>
  );
}
