"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40 py-8 text-center text-muted-foreground text-sm">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Hasan Rizki. All rights reserved.</p>
        <p className="mt-2">Built with Go, Microservices, and Scalability in mind.</p>
      </div>
    </footer>
  );
};

export default Footer;