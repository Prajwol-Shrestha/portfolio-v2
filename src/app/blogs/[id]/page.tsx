import { getSingleBlog } from "@/app/services/getSingleBlog";
import MarkDownWrapper from "@/components/markdown-wrapper/mark-down-wrapper";
import Typography from "@/components/ui/Typography";
import { formatDateLongStyle } from "@/utils/date-helpers";
import { Dot } from "lucide-react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getSingleBlog(id);

  if (!blog) throw notFound();
  const { title, published_at, body_markdown, user, tags } = blog;
  const longDate = formatDateLongStyle(published_at);


  return (
    <main className="section-wrapper">
      <section>
        <Typography variant={"h3"} component="h1" className="font-bold">
          {title}
        </Typography>
        <div className="my-6 flex items-center flex-wrap text-gray-400">
          <Typography variant={"body2"}>
            Published At: {longDate}
          </Typography>
          <Dot />
          <Typography variant={"body2"}>
            Author: {user.name}
          </Typography>
        </div>
        <MarkDownWrapper markdown={body_markdown} />

          <div className="flex flex-wrap gap-3 mt-12">
            {tags.map((tag) => (
              <Typography key={tag} variant={"body1"} className="text-gray-400">
                #{tag}
              </Typography>
            ))}
          </div>
      </section>
    </main>
  );
}
