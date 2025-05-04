import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 pt-8">
      <div className="relative inline-block">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 heading-gradient">
          Etsy SEO Tag Generator
        </h1>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      <p className="text-foreground text-lg max-w-2xl mx-auto mt-6">
        Create optimized tags to improve your product's discoverability on Etsy
      </p>
    </header>
  );
};

export default Header;
