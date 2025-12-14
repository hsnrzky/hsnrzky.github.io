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
            <Badge key={index} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors duration-200">
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
      title: "Distributed Microservices Platform",
      description: "Designed and implemented a highly scalable microservices platform using Go, Kafka for event streaming, and Kubernetes for orchestration. Achieved high availability and fault tolerance.",
      technologies: ["Go", "Microservices", "Kafka", "Kubernetes", "Docker", "PostgreSQL"],
      githubLink: "#", // Placeholder
    },
    {
      title: "Real-time Analytics Engine",
      description: "Developed a real-time data processing engine in Go, capable of ingesting and analyzing high volumes of streaming data. Optimized for low latency and high throughput.",
      technologies: ["Go", "Apache Flink", "Redis", "Prometheus", "Grafana"],
      githubLink: "#", // Placeholder
    },
    {
      title: "API Gateway with Rate Limiting",
      description: "Built a custom API Gateway in Go to manage and secure microservice endpoints, including features like authentication, authorization, and advanced rate limiting algorithms.",
      technologies: ["Go", "gRPC", "JWT", "Redis", "Nginx"],
      githubLink: "#", // Placeholder
    },
    {
      title: "Scalable E-commerce Backend",
      description: "Contributed to the backend development of an e-commerce platform, focusing on order processing, inventory management, and payment integration using Go and a message queue system.",
      technologies: ["Go", "RabbitMQ", "MongoDB", "Stripe API", "Elasticsearch"],
      githubLink: "#", // Placeholder
    },
  ];

  return (
    <section id="projects" className="container py-16 md:py-24 space-y-12">
      <h2 className="text-4xl font-bold text-center text-foreground opacity-0 animate-fade-in-up">My Projects</h2>
      <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:100ms]">
        Showcasing my expertise in building robust and scalable backend systems with Go, microservices, and distributed architectures.
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