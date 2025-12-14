import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-deep-navy text-light-grey p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-electric-blue hover:text-teal-accent transition-colors duration-300">
          Hasan Rizki
        </Link>
        <div className="space-x-4">
          <Button asChild variant="ghost" className="text-light-grey hover:text-electric-blue hover:bg-charcoal transition-colors duration-300">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-light-grey hover:text-electric-blue hover:bg-charcoal transition-colors duration-300">
            <Link to="/projects">Projects</Link>
          </Button>
          {/* Add more navigation links here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;