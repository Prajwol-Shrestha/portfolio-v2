import ProjectCard from "@/components/cards/project-card";
import TextLoopCustomVariantsTransition from "@/components/text-loop/text-loop-custom-variants-transition";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import { PROJECTS, SOCIAL_LINKS } from "@/constants/static-lists";
import Link from "next/link";
import React from "react";

export default function page() {
  const githubProfile = SOCIAL_LINKS.find(
    (link) => link.label.toLowerCase() === "github"
  );
  return (
    <main>
      <section className="my-18">
        <Typography
          component="h4"
          variant={"h5"}
          className="uppercase text-highlight"
        >
          {" "}
          My works{" "}
        </Typography>
        <Typography variant={"h4"}> Selected Projects </Typography>

        <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <Link href={githubProfile?.link || ""}>
          <div className="mt-8 max-w-lg mx-auto flex items-center justify-center  bg-secondary rounded-xl p-8 h-70 cursor-pointer">
            <TextLoopCustomVariantsTransition
              mainText="View more projects —"
              secondaryText={[
                "on GitHub",
                "that I’ve built",
                "with clean code",
                "using modern stacks",
                "that I’m working on",
              ]}
              secondaryClassName="text-highlight"
            />
          </div>
        </Link>
      </section>
    </main>
  );
}
