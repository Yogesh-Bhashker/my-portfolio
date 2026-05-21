import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="glass p-10 md:p-16 rounded-3xl glow border border-white/5">
        <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          I'm currently looking for new full-time opportunities or freelance collaborations. Let's build something awesome together!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <a href="mailto:yogeshbashker@gmail.com" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition duration-300 font-semibold shadow-lg shadow-purple-600/30">
            Email Me
          </a>
          <a href="tel:+917500073985" className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-xl transition duration-300 font-semibold">
            +91 7500073985
          </a>
        </div>
        <div className="flex justify-center gap-6 text-gray-400 text-sm">
          <a href="https://github.com/Yogesh-Bhashker" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/yogesh-bhashker-223204245/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;