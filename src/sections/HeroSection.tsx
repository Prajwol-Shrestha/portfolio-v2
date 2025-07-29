import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import Typography from "@/components/ui/Typography";
import { SOCIAL_LINKS } from "@/constants/static-lists";
import Link from "next/link";
import React from "react";
import {Icon} from '@iconify/react'


export default function HeroSection() {
  return (
    <section className="space-y-8">
      <div className="">
        {/* some animated GIF here */}
        <Typography variant="body2" className="font-normal">
          Hey, It's me Prajwol,
        </Typography>
      </div>

      <Typography component="h3" variant={"h3"} className="sm:w-3/4 max-w-3xl">
        {" "}
        Crafting{" "}
        <span className="text-highlight">
          {" "}
          clean, performant & responsive{" "}
        </span>{" "}
        web experiences with modern technologies.{" "}
      </Typography>

      <div className="flex gap-8 items-center flex-col md:flex-row">
        <Separator className="max-w-sm lg:max-w-xl" />
        <Typography variant={"body2"} className="text-gray-400 flex-1">
          I build modern, responsive, and accessible web apps combining frontend
          expertise with full-stack skills to create solutions that drive
          results.
        </Typography>
      </div>

      <div className=" flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {" "}
          {SOCIAL_LINKS.map((social) => (
            <Button
              key={social.label}
              variant="link"
              className="rounded-full text-white uppercase"
            >
              {social.label}
              <Icon icon="mingcute:arrow-right-up-line" ssr={true} />
              </Button>
          ))}{" "}
        </div>

        <Link href={"/about"}>
          <Button variant={"outline"} className="rounded-full">
            {" "}
            Know me Better{" "}
          </Button>
        </Link>
      </div>
    </section>
  );
}
