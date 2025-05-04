import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 pt-8">
      <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-3 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
          Etsy SEO Tag Generator
        </span>
      </h1>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Create optimized tags to improve your product's discoverability on Etsy
      </p>
    </header>
  );
};

export default Header;
