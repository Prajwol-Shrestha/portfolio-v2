"use client";

import React from "react";
import cn from "@/utils/cn";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const Hamburger = ({ isOpen, onClick, className }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "hamburger group relative flex h-10 w-10 items-center justify-center rounded-full transition-all",
        isOpen && "hamburger-active",
        className
      )}
      aria-label="Toggle Menu"
    >
      <svg width="32" height="32" viewBox="0 0 100 100" className="size-8">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,33 h 40"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,33 h 40"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,50 h 40"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,50 h 40"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,67 h 40"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          d="M 30,67 h 40"
        />
      </svg>
    </button>
  );
};
