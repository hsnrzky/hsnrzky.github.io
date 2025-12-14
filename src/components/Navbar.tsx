"use client";

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-primary hover:text-primary/80 transition-colors duration-200">Hasan Rizki</span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  // Use standard <a> tag for hash links (section scrolling)
  if (href.startsWith("#")) {
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
  }
  
  // Use React Router Link for actual routing (like Home)
  return (
    <Link
      to={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;