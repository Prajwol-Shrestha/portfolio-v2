import Link from "next/link";
import Typography from "../ui/Typography";
import { Link as LinkIcon } from "lucide-react";

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
    <div className="">
      <div className="bg-secondary rounded-xl p-6 lg:p-8 h-70">
        <img
          src={screenshot}
          alt={name}
          className="rounded-lg object-cover w-full h-full hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-2 mt-4">
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
            <Link href={github} target="_blank">
              <img src={"/icons/github.svg"} alt="github" className="w-8 h-8" />
            </Link>
          )}
          {deployedUrl && (
            <Link
              href={deployedUrl}
              target="_blank"
              className="rounded-full bg-foreground w-8 h-8 flex items-center justify-center"
            >
              <LinkIcon className="text-secondary" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
