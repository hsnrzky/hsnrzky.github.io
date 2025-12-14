"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Subtle background effect using theme colors */}
      <div className="absolute inset-0 opacity-50 dark:opacity-20 bg-gradient-to-br from-background to-card"></div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground opacity-0 animate-fade-in-up">
          Hasan Rizki
        </h1>
        <p className="text-2xl md:text-4xl font-semibold text-primary opacity-0 animate-fade-in-up [animation-delay:100ms]">
          Backend Golang Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Crafting robust, scalable, and high-performance backend systems with Go,
          specializing in Microservices architecture and system scalability.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 opacity-0 animate-fade-in-up [animation-delay:300ms]">
          <Button size="lg" className="group relative overflow-hidden shadow-lg shadow-primary/30">
            <a href="#projects" className="flex items-center">
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-md shadow-primary/10">
            <a href="/cv/hasan_rizki_cv.pdf" download className="flex items-center">
              <span className="relative z-10">Download CV</span>
              <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;