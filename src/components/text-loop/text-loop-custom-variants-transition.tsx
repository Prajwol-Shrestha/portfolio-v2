import React from "react";
import { TextLoop } from "./text-loop";
import Typography from "../ui/Typography";
import cn from "@/utils/cn";

interface IProps {
  mainText: string;
    secondaryText: string[];
    className?: string
    secondaryClassName?: string
}

export default function TextLoopCustomVariantsTransition({
  mainText,
  secondaryText,
    className,
  secondaryClassName
}: IProps) {
  return (
    <Typography className={cn("inline-flex whitespace-pre-wrap", className)}>
      {mainText}{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        {secondaryText.map((text) => (
          <Typography key={text} className={cn("", secondaryClassName)}>{text}</Typography>
        ))}
      </TextLoop>
    </Typography>
  );
}
