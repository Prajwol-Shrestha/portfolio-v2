"use client";

import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants/static-lists";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import Typography from "../ui/Typography";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Hamburger } from "./hamburger";
import { motion, AnimatePresence } from "motion/react";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        ref={navbarRef}
        className="mx-auto flex w-full items-center justify-between rounded-full border border-background py-4 mt-3 transition-all duration-300"
      >
        <Link href="/">
          <Typography variant={"h6"} className="font-bold cursor-pointer">
            PS
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link href={item.href} key={item.label}>
              <Typography
                variant={"body2"}
                className="cursor-pointer hover:text-highlight transition-colors duration-300 font-medium"
              >
                {item.label}
              </Typography>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                />

                {/* Floating Island Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                  exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.95 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="fixed bottom-8 left-1/2 z-50 w-[90%] max-w-[360px]"
                >
                  <div className="overflow-hidden rounded-[2.5rem] border border-border/50 bg-background/90 p-4 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-4 gap-2">
                      {NAV_ITEMS.map((item) => {
                        // Simple icon mapping based on labels
                        const getIcon = (label: string) => {
                          switch (label.toLowerCase()) {
                            case "home":
                              return "lucide:home";
                            case "projects":
                              return "lucide:folder";
                            case "experience":
                              return "lucide:briefcase";
                            case "blogs":
                              return "lucide:book-open";
                            default:
                              return "lucide:link";
                          }
                        };

                        return (
                          <Link
                            href={item.href}
                            key={item.label}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col items-center gap-1 rounded-2xl py-3 transition-colors hover:bg-secondary/50"
                          >
                            <div className="flex size-10 items-center justify-center rounded-full bg-secondary/30 text-highlight">
                              <Icon
                                icon={getIcon(item.label)}
                                className="size-5"
                              />
                            </div>
                            <Typography variant="caption" className="font-bold">
                              {item.label}
                            </Typography>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-4 border-t border-border/40 pt-4 px-2">
                      <div className="flex items-center justify-between">
                        <Typography
                          variant="caption"
                          className="text-muted-foreground font-bold uppercase tracking-widest pl-2"
                        >
                          Connect
                        </Typography>
                        <div className="flex gap-3">
                          {SOCIAL_LINKS.map((social) => (
                            <Link
                              key={social.label}
                              href={social.link}
                              target="_blank"
                              className="flex size-8 items-center justify-center rounded-full border border-border/40 bg-background/50 hover:bg-highlight hover:text-white transition-all shadow-sm"
                            >
                              <Icon icon={social.icon} className="size-4" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
