import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-24 md:pt-0"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/20 blur-[80px] sm:blur-[120px] rounded-full top-0 left-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center relative z-10 w-full">
        
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="text-cyan-400 mb-3 text-sm sm:text-base font-medium tracking-wide">
            Full Stack Software Engineer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white break-words w-full">
            Hi, I'm <span className="gradient-text">Yogesh Bhaskar</span>
          </h1>

          <div className="text-xl sm:text-2xl mt-4 sm:mt-6 text-gray-300 font-medium min-h-[40px]">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React.js Developer",
                2000,
                "SEO-Friendly Web Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed sm:leading-8">
            Building scalable, high-performance, and user-focused
            web applications using modern JavaScript technologies.
          </p>

          {/* Buttons Layout with Links Connected */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 w-full sm:w-auto z-20">
            {/* 1. View Projects Button - Scrolls to #projects */}
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/20 block"
            >
              View Projects
            </a>

            {/* 2. Download Resume Button - Triggers PDF download from public/ folder */}
            <a 
              href="/resume.pdf" 
              download="Yogesh_Bhaskar_Resume.pdf"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/10 glass text-gray-200 font-medium text-center hover:bg-white/10 active:scale-95 transition-all duration-200 block"
            >
              Download Resume
            </a>

            {/* 3. Contact Me Button - Scrolls to #contact */}
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/10 glass text-gray-200 font-medium text-center hover:bg-white/10 active:scale-95 transition-all duration-200 block"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons Link Grid */}
          <div className="flex gap-6 mt-8 sm:mt-10 text-2xl">
            <a 
              href="https://github.com/Yogesh-Bhashker" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/yogesh-bhashker-223204245/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Graphic Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center order-first md:order-last mt-4 md:mt-0"
        >
          <div className="w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-20 absolute pointer-events-none"></div>

          <div className="glass p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] relative z-10 border border-white/5 glow flex items-center justify-center">
            <div className="flex items-center gap-6 sm:gap-8 text-5xl sm:text-6xl lg:text-7xl">
              <FaReact className="text-cyan-400 animate-spin [animation-duration:8s]" />
              <FaNodeJs className="text-green-500" />
              <FaWordpress className="text-blue-500" />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;