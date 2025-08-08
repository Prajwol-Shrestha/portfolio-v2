"use client";

import cn from "@/utils/cn";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";

interface IProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieWrapper({
  animationData,
  className,
  loop = false,
  autoplay = false,
}: IProps) {
  const lottieRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          lottieRef.current?.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <div ref={containerRef} className={cn("", className)}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </div>
  );
}
