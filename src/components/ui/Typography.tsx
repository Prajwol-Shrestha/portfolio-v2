import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: [
        "text-[clamp(2.5rem,5vw,4rem)]",
        "capitalize",
        "leading-tight",
        "tracking-tight",
      ],
      h2: [
        "text-[clamp(2rem,4.5vw,3.5rem)]",
        "capitalize",
        "leading-tight",
        "tracking-tight",
      ],
      h3: [
        "text-[clamp(1.75rem,4vw,3rem)]",
        "capitalize",
        "leading-snug",
        "tracking-tight",
      ],
      h4: [
        "text-[clamp(1.5rem,3vw,2.25rem)]",
        "capitalize",
        "leading-snug",
        "tracking-normal",
      ],
      h5: [
        "text-[clamp(1.25rem,2.5vw,1.75rem)]",
        "capitalize",
        "leading-snug",
        "tracking-normal",
      ],
      h6: [
        "text-[clamp(1rem,2vw,1.25rem)]",
        "capitalize",
        "leading-snug",
        "tracking-normal",
      ],
      subtitle1: [
        "text-[clamp(1rem,1.8vw,1.125rem)]",
        "leading-normal",
        "tracking-normal",
      ],
      subtitle2: [
        "text-[clamp(0.875rem,1.5vw,1rem)]",
        "leading-normal",
        "tracking-wide",
      ],
      body1: [
        "text-[clamp(0.95rem,1.5vw,1.125rem)]",
        "leading-relaxed",
        "tracking-normal",
      ],
      body2: [
        "text-[clamp(0.875rem,1.3vw,1rem)]",
        "leading-relaxed",
        "tracking-normal",
      ],
      caption: [
        "text-[0.75rem]",
        "leading-snug",
        "tracking-wider",
      ],
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});


export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Typography: React.FC<TypographyProps> = ({
  className,
  component = "p",
  variant,
  ...props
}) => {
  const Element = component;
  return (
    <Element
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
};

export default Typography;
