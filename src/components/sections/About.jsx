import React from 'react';
import { motion } from 'framer-motion';

// Import your professional image here
import profileImg from "../../assets/hero.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#050816] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[320px] w-full aspect-square">
              {/* Outer Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
              
              {/* Image Box */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass p-3 h-full w-full flex items-center justify-center">
                <img 
                  src={profileImg} 
                  alt="Yogesh Bhashker" 
                  /* Changed rotate-90 to -rotate-90 to flip it back correctly */
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-500 -rotate-90 transform"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Narrative */}
          <div className="lg:col-span-7 space-y-6 text-gray-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              I am <span className="text-purple-400">Yogesh Bhashker</span>, a Full Stack Developer
            </h3>
            
            <p className="leading-relaxed text-sm md:text-base">
              Passionate MERN Stack Developer with real-world experience in building reliable, 
              user-friendly web applications. Based in Uttarakhand, I specialize in creating pixel-perfect, 
              highly responsive frontends while writing clean, secure, and maintainable backend systems.
            </p>

            {/* Structured Highlights (Education & Career Metrics) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              
              {/* Box 1: Education */}
              <div className="glass p-5 rounded-2xl border border-white/5 glow">
                <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  🎓 Education
                </h4>
                <p className="text-white text-sm font-semibold">B.Tech in Computer Science</p>
                <p className="text-xs text-gray-400">Uttarakhand Technical University</p>
                <p className="text-xs text-gray-500 mt-1">2019 - 2023 | Dwarahat</p>
              </div>

              {/* Box 2: Experience Summary */}
              <div className="glass p-5 rounded-2xl border border-white/5 glow">
                <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  💼 Professional Experience
                </h4>
                <p className="text-white text-sm font-semibold">Web Developer</p>
                <p className="text-xs text-gray-400">Mascot Software & TSA Media</p>
                <p className="text-xs text-gray-500 mt-1">Full-Stack & UI Performance Optimization</p>
              </div>

            </div>

            {/* Quick Pitch Footer */}
            <div className="pt-4 border-t border-white/5 text-xs md:text-sm text-gray-400 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div>📍 Based in: <span className="text-white">Pithoragarh, Uttarakhand</span></div>
              <div>💼 Status: <span className="text-green-400 font-medium">Available for Opportunities</span></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;