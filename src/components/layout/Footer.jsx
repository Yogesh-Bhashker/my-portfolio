import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050816]/80 backdrop-blur-md py-8 text-center text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Yogesh Bhashker. All rights reserved.</p>
        <p className="text-gray-400">
          Built with <span className="text-purple-500">♥</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;