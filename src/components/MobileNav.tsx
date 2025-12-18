"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onLinkClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onLinkClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onLinkClick(); // Close sheet on click
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For other hash links, rely on global scroll-smooth CSS
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-lg font-medium transition-colors hover:text-primary block py-3",
        "text-foreground"
      )}
    >
      {children}
    </a>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] backdrop-blur-sm bg-transparent">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-2xl font-bold text-primary">Hasan Rizki</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-2">
          <NavLink href="#" onLinkClick={handleLinkClick}>Home</NavLink>
          <NavLink href="#projects" onLinkClick={handleLinkClick}>Projects</NavLink>
          <NavLink href="#skills" onLinkClick={handleLinkClick}>Skills</NavLink>
          <NavLink href="#contact" onLinkClick={handleLinkClick}>Contact</NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;