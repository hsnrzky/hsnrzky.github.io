"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Laptop, Users, Database } from "lucide-react";

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
      title: "Programming & Web Development",
      icon: Code,
      skills: ["PHP", "Laravel Framework", "Go (Golang)", "HTML", "CSS", "JavaScript", "RESTful APIs"],
    },
    {
      title: "Data & Analysis",
      icon: Database,
      skills: ["Python", "Basic Data Analysis", "SQL"],
    },
    {
      title: "Office & Administration",
      icon: Briefcase,
      skills: ["MS Office (Word, Excel)", "Data Entry", "Document Management", "Customer Data Management"],
    },
    {
      title: "Technical Operations",
      icon: Laptop,
      skills: ["Laptop & Handphone Repair (Basic)", "Technical Troubleshooting", "Inventory Management"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Fast Learner", "Teamwork", "Adaptability", "Communication (Indonesian Active)"],
    },
  ];

  return (
    <section id="skills" className="container py-16 md:py-24 space-y-12">
      <h2 className="text-4xl font-bold text-center text-foreground opacity-0 animate-fade-in-up">My Expertise</h2>
      <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:100ms]">
        A comprehensive overview of my technical and administrative skills, focusing on PHP/Laravel, Python, and operational efficiency.
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