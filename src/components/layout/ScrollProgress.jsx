import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-white/5">
      <div 
        className="h-full bg-gradient-to-right from-purple-500 to-cyan-400 transition-all duration-100 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #8b5cf6, #06b6d4)' 
        }}
      />
    </div>
  );
};

export default ScrollProgress;