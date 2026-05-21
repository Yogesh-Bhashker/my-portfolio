import React from 'react';

const Services = () => {
  const services = [
    { title: "Full-Stack Development", desc: "Building robust end-to-end web architectures with MongoDB, Express, React, and Node.js." },
    { title: "Frontend Architecture", desc: "Crafting highly responsive, semantic, visual layouts using modern Tailwind CSS and custom animations." },
    { title: "Performance Optimization & SEO", desc: "Speeding up asset loads, streamlining React states, and configuring SEO best practices to scale traffic." }
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 gradient-text">What I Offer</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">Leveraging modern engineering frameworks to deliver pixel-perfect designs with powerful backend scalability.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((srv, index) => (
          <div key={index} className="glass p-8 rounded-3xl glow border border-white/5 flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">0{index + 1}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{srv.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;