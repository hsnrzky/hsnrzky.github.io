import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-light-grey p-4 text-center mt-8 shadow-inner">
      <div className="container mx-auto">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Hasan Rizki. All rights reserved.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;