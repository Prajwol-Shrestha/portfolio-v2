import ProjectCard from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import { PROJECTS } from "@/constants/static-lists";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section>
      <Typography variant={"h5"} component="h5" className="text-highlight">
        My Work
      </Typography>
      <Typography variant={'h4'}>
        Selected Projects
      </Typography>

      <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-8">
        {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
      </div>

      <Link href={'/projects'}>
      <Button variant='outline' className="rounded-full mt-16 mx-auto block"> View All Projects </Button>
      </Link>
    </section>
  );
}
