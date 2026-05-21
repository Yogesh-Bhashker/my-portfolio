import React from "react";
import { motion } from "framer-motion";

// Importing official icons from react-icons library
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, 
  FaNodeJs, FaPhp, FaDatabase, FaWordpress, FaWix, 
  FaShopify, FaGitAlt, FaGithub, FaCode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiFirebase, SiWebflow, SiSquarespace, SiHostinger, SiCanva 
} from "react-icons/si";

// Categories structure with icons attached to every skill
const categories = [
  {
    title: "Frontend Stack",
    description: "Core client-side interfaces and styling technologies.",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend Architecture",
    description: "Server-side logic, API integrations, and languages.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-teal-400" /> },
    ],
  },
  {
    title: "Database Management",
    description: "Structured and non-structured data storage units.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
    ],
  },
  {
    title: "CMS Platforms",
    description: "Content systems and website builders used for faster delivery.",
    skills: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
      { name: "Wix", icon: <FaWix className="text-white" /> },
      { name: "Shopify", icon: <FaShopify className="text-green-400" /> },
      { name: "Webflow", icon: <SiWebflow className="text-blue-500" /> },
      { name: "Squarespace", icon: <SiSquarespace className="text-white" /> },
    ],
  },
  {
    title: "Developer & Hosting Tools",
    description: "Version control platforms and web hosting services.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Hostinger", icon: <SiHostinger className="text-purple-400" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
    ],
  },
  {
    title: "Design & Creative Utilities",
    description: "Asset creation, layouts, and mockup presentation software.",
    skills: [
      { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050816] relative overflow-hidden">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            My technical ecosystem for engineering modern, responsive, and performance-optimized digital products.
          </p>
        </div>

        {/* Professional 6-Box Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-3xl p-6 md:p-8 glow border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skill Tags with Icons Grid inside the Box */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 text-xs md:text-sm px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200 cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;