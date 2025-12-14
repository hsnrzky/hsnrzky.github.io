"use client";

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo/Name link always scrolls to top */}
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-primary hover:text-primary/80 transition-colors duration-200">Hasan Rizki</span>
        </a>
        <div className="flex items-center space-x-4">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  // Use standard <a> tag for hash links (section scrolling)
  return (
    <a
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        "text-muted-foreground"
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;