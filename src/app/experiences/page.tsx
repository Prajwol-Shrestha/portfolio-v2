import CareerCard from "@/components/cards/career-card";
import Typography from "@/components/ui/Typography";
import { CAREERS } from "@/constants/static-lists";
import cn from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="my-22">
        <Typography component={"h3"} variant={"h4"} className="text-highlight font-semibold">
          Experiences
        </Typography>
        <div className="my-12 flex flex-col gap-12">
          {CAREERS.map((career, index) => (
            <div key={index}>
              <CareerCard
                key={index}
                career={career}
                className={clsx("", {
                  "flex-row-reverse": (index + 1) % 2 === 0,
                })}
              />
              {index !== CAREERS.length - 1 && (
                <div className="flex justify-center items-center">
                  <svg
                    viewBox="0 0 400 300"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("max-w-[380px] max-h-[300px]", {
                      "scale-y-[-1]": (index + 1) % 2 === 0,
                    })}
                  >
                    <path
                      d="M400 0
                        C 400 300, 100 20, 0 400"
                      fill="none"
                      stroke="var(--highlight)"
                      strokeWidth="2"
                      strokeDasharray="15,5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
