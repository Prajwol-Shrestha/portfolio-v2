import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";
import Typography from "@/components/ui/Typography";

export default function AboutSection() {
  return (
    <section>
      <Typography
        component="h5"
        variant={"h5"}
        className="text-center text-highlight"
      >
        About Me
      </Typography>

      <ScrollReveal
        baseOpacity={0.1}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        textClassName="md:text-center  md:leading-10"
      >
        Hi, I’m Prajwol. I’ve been working in software development for over 2
        years now, focusing on creating practical and effective digital
        solutions. I enjoy teaming up with others to build products that really
        work well and make a difference.
      </ScrollReveal>
    </section>
  );
}
