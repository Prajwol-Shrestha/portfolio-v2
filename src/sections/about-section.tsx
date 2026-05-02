import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";
import Typography from "@/components/ui/Typography";
import arrowAnimationData from "@/lotties/arrow.json";
import LottieWrapper from "@/components/lottie-wrapper/lottie-wrapper";

export default function AboutSection() {
  const startDate = new Date("2022-12-01");
  const currentDate = new Date();

  const diffInMonths =
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const years = Math.floor(diffInMonths / 12);
  const months = Math.round(diffInMonths % 12);

  const totalExp = `${years}${months > 0 ? "+" : ""}`;

  // if directly as a children pass gareko vaye React le split gardintheo
  // like ["Hi, I’m Prajwol… over ", "3+", " years now …"]
  // so as a string yai banako, for  this to work 
  const aboutText = `Hi, I’m Prajwol. I’ve been working in software development for over ${totalExp} years now, focusing on creating practical and effective digital solutions. I enjoy teaming up with others to build products that really work well and make a difference.`;

  return (
    <section>
      <div className="flex items-center justify-center relative">
        <LottieWrapper
          className="absolute w-16 sm:w-20 left-[20%] sm:left-[35%] -top-8"
          animationData={arrowAnimationData}
        />
        <Typography
          component="h5"
          variant={"h5"}
          className="text-center text-highlight font-semibold"
        >
          About Me
        </Typography>
      </div>

      <ScrollReveal
        baseOpacity={0.1}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        textClassName="md:text-center  md:leading-10"
      >
        {aboutText}
      </ScrollReveal>
    </section>
  );
}
