"use client";

import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactEmail = "hasanrizzky20@gmail.com";
  const githubLink = "https://github.com/HasanRizki";
  const linkedinLink = "https://linkedin.com/in/HasanRizki";
  const instagramLink = "https://instagram.com/hsnrzky";

  return (
    <section id="contact" className="container py-16 md:py-24 space-y-12">
      <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground">Connect With Me</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I am currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        {/* Email Link */}
        <div className="flex justify-center items-center space-x-2 text-lg font-medium text-foreground pt-4">
          <Mail className="h-6 w-6 text-primary" />
          <a 
            href={`mailto:${contactEmail}`} 
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            {contactEmail}
          </a>
        </div>

        {/* Social Logos */}
        <div className="flex justify-center space-x-6 pt-8 opacity-0 animate-fade-in-up [animation-delay:100ms]">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;