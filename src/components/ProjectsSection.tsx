"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link as LinkIcon } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <Card className="bg-card border-border hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-primary group-hover:text-primary/80 transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-secondary/50 text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
              <Github className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" /> GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center">
              <LinkIcon className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" /> Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Laravel E-commerce Prototype",
      description: "Developed a basic e-commerce platform prototype using PHP Laravel, focusing on user authentication, product catalog management, and shopping cart functionality.",
      technologies: ["PHP", "Laravel", "MySQL", "Blade Templates", "Bootstrap"],
      githubLink: "#", // Placeholder
    },
    {
      title: "Python Data Processing Script",
      description: "Created a Python script utilizing Pandas for cleaning, transforming, and analyzing structured data sets, generating summary reports for basic insights.",
      technologies: ["Python", "Pandas", "Data Cleaning", "Reporting"],
      githubLink: "#", // Placeholder
    },
    {
      title: "RESTful API Service (Laravel)",
      description: "Built a simple RESTful API using Laravel for managing resources (CRUD operations), demonstrating understanding of API design principles and routing.",
      technologies: ["PHP", "Laravel", "API Development", "JSON", "Postman"],
      githubLink: "#", // Placeholder
    },
    {
      title: "Administrative Dashboard Interface",
      description: "Designed and implemented a simple web dashboard for administrative tasks, focusing on efficient data display and user interaction for internal operations.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap/Tailwind"],
      githubLink: "#", // Placeholder
    },
  ];

  return (
    <section id="projects" className="container py-16 md:py-24 space-y-12">
      <h2 className="text-4xl font-bold text-center text-foreground opacity-0 animate-fade-in-up">My Projects</h2>
      <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:100ms]">
        Showcasing my foundational skills in web development using PHP Laravel and data handling with Python.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {projects.map((project, index) => (
          // Apply staggered animation to cards
          <div key={index} className={`opacity-0 animate-fade-in-up`} style={{ animationDelay: `${200 + index * 100}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;