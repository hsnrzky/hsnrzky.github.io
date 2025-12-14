"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Cloud, Server, GitBranch, Database, MessageSquareText } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills }) => {
  return (
    <Card className="bg-card border-border hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 pt-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default">
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Go (Golang)", "Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      skills: ["Microservices Architecture", "RESTful APIs", "gRPC", "Distributed Systems", "System Design", "Scalability", "Performance Optimization"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git", "Prometheus", "Grafana"],
    },
    {
      title: "Databases & Caching",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch", "Kafka"],
    },
    {
      title: "Message Queues",
      icon: MessageSquareText,
      skills: ["Kafka", "RabbitMQ", "NATS"],
    },
    {
      title: "Testing & Quality",
      icon: GitBranch,
      skills: ["Unit Testing", "Integration Testing", "End-to-End Testing", "TDD"],
    },
  ];

  return (
    <section id="skills" className="container py-16 md:py-24 space-y-12">
      <h2 className="text-4xl font-bold text-center text-foreground opacity-0 animate-fade-in-up">My Expertise</h2>
      <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:100ms]">
        A comprehensive overview of my technical skills and the tools I leverage to build robust backend solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {skillCategories.map((category, index) => (
          // Apply staggered animation to cards
          <div key={index} className={`opacity-0 animate-fade-in-up`} style={{ animationDelay: `${200 + index * 100}ms` }}>
            <SkillCategory {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;