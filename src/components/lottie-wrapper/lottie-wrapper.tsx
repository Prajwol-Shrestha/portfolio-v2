"use client";

import cn from "@/utils/cn";
import Lottie from "lottie-react";

// TODO: loop false and trigger animation on viewport
export default function LottieWrapper({ animationData, className, loop = true, autoplay = true }: any) {
    
  return (
    <div className={cn("", className)}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </div>
  );
}
