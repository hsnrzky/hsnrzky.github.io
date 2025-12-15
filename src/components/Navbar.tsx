"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Base classes for mobile floating card appearance
  // Reduced opacity to bg-card/80 and increased blur to backdrop-blur-lg
  const mobileFloatingClasses = "rounded-xl shadow-xl border border-border/50 bg-card/80 backdrop-blur-lg";
  
  // Desktop styles when SCROLLED (opaque bar, full width)
  // Reduced opacity to lg:bg-background/80 and increased blur to backdrop-blur-lg
  const desktopScrolledClasses = "lg:border-b lg:border-border/40 lg:bg-background/80 lg:backdrop-blur-lg supports-[backdrop-filter]:lg:bg-background/60 lg:shadow-none lg:rounded-none";
  
  // Desktop styles when AT TOP (transparent, full width, merged with hero)
  const desktopTransparentClasses = "lg:bg-transparent lg:border-transparent lg:shadow-none lg:backdrop-blur-none lg:rounded-none";

  return (
    <div className="sticky top-0 z-50 w-full p-2 lg:p-0 transition-all duration-300">
      <nav className={cn(
        "w-full flex h-14 items-center justify-center transition-all duration-300",
        
        // Mobile appearance (default)
        mobileFloatingClasses,
        
        // Desktop overrides: Remove mobile appearance properties on desktop
        "lg:rounded-none lg:shadow-none lg:border-none lg:bg-transparent lg:backdrop-blur-none",
        
        // Apply desktop scroll state appearance
        isScrolled ? desktopScrolledClasses : desktopTransparentClasses
      )}>
        {/* Inner container to constrain content width */}
        <div className="container flex h-full items-center justify-between">
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