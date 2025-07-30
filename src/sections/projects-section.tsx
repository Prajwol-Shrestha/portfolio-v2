import ProjectCard from "@/components/cards/project-card";
import Typography from "@/components/ui/Typography";
import { PROJECTS } from "@/constants/static-lists";

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
        {PROJECTS.map(project => <ProjectCard project={project} />)}
      </div>
    </section>
  );
}
