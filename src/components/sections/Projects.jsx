import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Bilbaro",
    desc: "A modern ticket booking and management platform engineered with real-time seat selection capabilities, fluent customer filtering systems, and high-performance interactive interfaces.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://bilbaro.com/event-list",
  },
  {
    title: "Medical Marketing Websites",
    desc: "High-performance business platforms optimized for the healthcare sector. Focused heavily on strict core web vitals speed, modular responsive layouts, and advanced SEO implementations.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "SEO Optimization", "REST APIs"],
    liveLink: "https://medrankinteractive.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050816] relative overflow-hidden">
      {/* Visual Ambient Light Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A selection of live commercial architectures and digital solutions built with production-grade engineering principles.
          </p>
        </div>

        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden group border border-white/5 flex flex-col h-full justify-between glow"
            >
              {/* Card Banner with Gradient Code Layout overlay */}
              <div className="h-48 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#050816]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaCode className="text-white/20 text-6xl transform scale-75 group-hover:scale-100 transition-transform duration-500" />
                </div>
                <span className="text-sm font-mono text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 shadow-lg tracking-wider">
                  Production Build
                </span>
              </div>

              {/* Card Information Box */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Technology Badges Matrix */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Redirect Button Link */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all duration-300 hover:gap-3 text-sm"
                  >
                    Live Preview <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;