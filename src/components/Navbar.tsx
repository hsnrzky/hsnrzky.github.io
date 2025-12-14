"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full p-2 lg:p-0 bg-background lg:bg-transparent">
      <nav className={cn(
        "w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "lg:border-b-0 lg:bg-background/95 lg:backdrop-blur-none", // Desktop: standard sticky bar
        "container flex h-14 items-center justify-between",
        // Mobile specific styling (below lg)
        "lg:h-14 lg:rounded-none",
        "rounded-xl shadow-xl border border-border/50 bg-card/90 backdrop-blur-md" // Floating card look on mobile
      )}>
        <div className="flex items-center">
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden mr-2">
            <MobileNav />
          </div>
          
          {/* Logo/Name link always scrolls to top */}
          <a href="#" className="flex items-center space-x-2" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className="font-bold text-lg text-primary hover:text-primary/80 transition-colors duration-200">Hasan Rizki Sulaiman</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For other hash links (e.g., #projects), we rely on the global scroll-smooth CSS property.
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        "text-muted-foreground hover:text-foreground" // Enhanced hover effect
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;