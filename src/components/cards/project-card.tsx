import Link from "next/link";
import Typography from "../ui/Typography";
import { Link as LinkIcon } from "lucide-react";
import { Icon } from "@iconify/react";

interface IProps {
  project: {
    name: string;
    screenshot: string;
    github: string | null;
    deployedUrl: string | null;
    type: string;
    description: string;
  };
}

export default function ProjectCard({ project }: IProps) {
  const { name, screenshot, github, deployedUrl, type } = project;
  return (
    <div className="bg-secondary rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden group">
      <div className="bg-slate-50 dark:bg-secondary/50 p-6 lg:p-8 h-70 border-b border-border/50 overflow-hidden">
        <img
          src={screenshot}
          alt={name}
          className="rounded-lg object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out shadow-sm"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-6 mt-auto">
        <div className="flex-1">
          <Typography variant={"h6"} className="font-semibold">
            {name}
          </Typography>
          <Typography variant={"body2"} className="text-gray-400 capitalize">
            {type}
          </Typography>
        </div>

        <div className="flex items-center gap-3">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="size-10 rounded-xl border border-border/40 bg-background/50 flex items-center justify-center hover:bg-highlight hover:text-white hover:border-highlight transition-all duration-300 shadow-sm"
            >
              <Icon icon="mdi:github" className="size-5" />
            </Link>
          )}
          {deployedUrl && (
            <Link
              href={deployedUrl}
              target="_blank"
              className="rounded-full bg-foreground w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <LinkIcon className="text-secondary size-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
