"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-primary">Hasan Rizki</span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
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