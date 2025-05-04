import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border pt-8 pb-12 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <span className="text-foreground font-semibold">Etsy SEO Tag Generator</span>
          </div>
          
          <p className="text-muted-foreground text-sm max-w-md">
            A tool to help Etsy sellers optimize their product listings with effective tags and keywords for better discoverability.
          </p>
          
          <div className="mt-6 flex items-center text-muted-foreground text-xs">
            <span>&copy; {currentYear} Etsy SEO Tag Generator</span>
            <span className="mx-2">•</span>
            <span>Personal Use Tool</span>
            <span className="mx-2">•</span>
            <span>Not affiliated with Etsy, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
