"use client";

import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40 py-8 text-center text-muted-foreground text-sm">
      <div className="container flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a 
            href="https://github.com/HasanRizki" // Placeholder link
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/HasanRizki" // Placeholder link
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com/hsnrzky"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <div className="space-y-1">
          <p>&copy; {new Date().getFullYear()} Hasan Rizki. All rights reserved.</p>
          <p className="text-xs">Built with PHP Laravel, Python, and a focus on operational efficiency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;