import Typography from "../ui/Typography";

interface IProps {
  project: {
    name: string;
    screenshot: string;
    github: string;
    deployedUrl: string;
    type: string;
  };
}

export default function ProjectCard({ project }: IProps) {
  const { name, screenshot, github, deployedUrl, type } = project;
  return (
    <div className="">
      <div className="bg-secondary rounded-xl p-8 h-70">
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
          <img src={"/icons/github.svg"} alt="github" className="w-8 h-8" />
          <img src={"/icons/nextjs.svg"} alt="website" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
