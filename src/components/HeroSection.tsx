"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Subtle background animation/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-70 animate-gradient-shift"></div>
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground animate-fade-in-up">
          Hasan Rizki
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-primary animate-fade-in-up delay-100">
          Backend Golang Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up delay-200">
          Crafting robust, scalable, and high-performance backend systems with Go,
          specializing in Microservices architecture and system scalability.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in-up delay-300">
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-primary/20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Button>
          <Button variant="outline" size="lg" className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10">
            <span className="relative z-10">Download CV</span>
            <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="absolute inset-0 bg-primary/20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;