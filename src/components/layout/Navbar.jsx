import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-text">
          Yogesh Bhaskar
        </h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`capitalize transition ${
                  active === item
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;