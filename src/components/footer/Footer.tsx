import { SOCIAL_LINKS } from "@/constants/static-lists";
import React from "react";

export default function Footer() {
  const linkedInLink = SOCIAL_LINKS.find(
    (link) => link.label.toLowerCase() === "linkedin"
  );

  console.log(linkedInLink, 'sad')
  return (
    <footer className="mt-auto py-4 text-center border-t border-foreground text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} • Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href={linkedInLink?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Prajwol
        </a>
      </p>
    </footer>
  );
}
