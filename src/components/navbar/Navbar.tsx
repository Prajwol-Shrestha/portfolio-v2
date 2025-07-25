"use client";

import { NAV_ITEMS } from "@/constants/static-lists";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useRef } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import Typography from "../ui/Typography";

const SCROLLED_CLASSNAMES = [
  "border-foreground",
  "sticky",
  "top-3",
  "min-h-6",
  "z-10",
  "px-4",
  "backdrop-blur-md",
];

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const MIN_WIDTH = isMobile ? 80 : 60;
  const MAX_WIDTH = 100;
  const SCROLL_LIMIT = 300;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollRatio = Math.min(scrollY / SCROLL_LIMIT, 1);
      const interpolatedWidth =
        MAX_WIDTH - (MAX_WIDTH - MIN_WIDTH) * scrollRatio;

      if (navbarRef.current) {
        navbarRef.current.style.width = `${interpolatedWidth}%`;

        const isScrolled = scrollY > 5;
        SCROLLED_CLASSNAMES.forEach((className) => {
          navbarRef.current!.classList.toggle(className, isScrolled);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  function handleScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className="mx-auto w-full border mt-3 py-4 border-background rounded-full flex items-center justify-between"
      >
        <Typography variant={'h6'} className="font-bold">PS</Typography>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Typography
              variant={"body2"}
              key={item.label}
              onClick={() => handleScrollToSection(item.href)}
              className="cursor-pointer hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Typography>
          ))}
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
