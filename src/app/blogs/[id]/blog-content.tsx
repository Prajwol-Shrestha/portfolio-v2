"use client";

import MarkDownWrapper from "@/components/markdown-wrapper/mark-down-wrapper";
import { ScrollProgress } from "@/components/scroll-progress/scroll-progress";
import Typography from "@/components/ui/Typography";
import { IDevToArticleDetails } from "@/types/forums-api-type";
import { formatDateLongStyle } from "@/utils/date-helpers";
import { Dot } from "lucide-react";

interface IProps {
  blog: IDevToArticleDetails;
}

export default function BlogContent({ blog }: IProps) {
  const {
    title,
    published_at,
    body_markdown,
    user,
    tags,
    reading_time_minutes,
  } = blog;
  const longDate = formatDateLongStyle(published_at);

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-1 h-24 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-950" />
      <div className="pointer-events-none fixed left-0 top-1 w-full">
        <div className="fixed left-0 top-1 h-0.5 w-full dark:bg-[#111111]" />
        <ScrollProgress
          className="fixed top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>
      <div className=" overflow-auto sm:px-8 pb-16 pt-16">
        <Typography variant={"h3"} component="h1" className="font-bold">
          {title}
        </Typography>
        <div className="my-6 text-gray-400">
          <div className="flex items-center flex-wrap ">
            <Typography variant={"body2"}>Published At: {longDate}</Typography>
            <Dot />
            <Typography variant={"body2"}>
              Reading Time: {reading_time_minutes} minutes
            </Typography>
          </div>
          <Typography variant={"body2"}>Author: {user.name}</Typography>
        </div>
        <MarkDownWrapper markdown={body_markdown} />

        <div className="flex flex-wrap gap-3 mt-12">
          {tags.map((tag) => (
            <Typography key={tag} variant={"body1"} className="text-gray-400">
              #{tag}
            </Typography>
          ))}
        </div>
      </div>
    </>
  );
}
