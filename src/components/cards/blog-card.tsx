import { IDevToArticle } from "@/types/forums-api-type";
import cn from "@/utils/cn";
import Typography from "../ui/Typography";
import Link from "next/link";
import { formatDateLongStyle } from "@/utils/date-helpers";
import { Dot } from "lucide-react";

interface IProps {
  blog: IDevToArticle;
  className?: string;
}

// TODO: make blog details page
export default function BlogCard({ blog, className }: IProps) {
  const {
    cover_image,
    social_image,
    title,
    published_at,
    tag_list,
    url,
    reading_time_minutes,
  } = blog;
  const imageUrl = cover_image || social_image;

  const longDate = formatDateLongStyle(published_at);

  return (
    <Link href={url} target="_blank" className="block">
      <div className={cn("bg-secondary rounded-xl p-6 flex gap-4", className)}>
        <div className="h-40 w-70 shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <Typography variant={"h5"} className="font-semibold line-clamp-3">
            {" "}
            {title}{" "}
          </Typography>

          <div className="flex flex-wrap gap-0.5">
            <Typography variant={"body2"} className="text-gray-400">
              {" "}
              <span className="font-semibold">
 Published:
              </span>
              {" "}{longDate}{" "}
            </Typography>
            <Dot className="text-gray-400" />
            <Typography variant={"body2"} className="text-gray-400">
              {" "}
              {reading_time_minutes} min read{" "}
            </Typography>
          </div>
          <div className="flex flex-wrap gap-3 mt-auto">
            {tag_list.map((tag) => (
              <Typography key={tag} variant={"body2"} className="text-gray-400">
                #{tag}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
