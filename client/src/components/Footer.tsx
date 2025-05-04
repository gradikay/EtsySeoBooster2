import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-400 text-sm py-6">
      <p>Etsy SEO Tag Generator © {new Date().getFullYear()} | Personal Use Tool</p>
      <p className="mt-2">Not affiliated with Etsy, Inc.</p>
    </footer>
  );
};

export default Footer;
