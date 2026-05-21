import React from 'react';

const Certifications = () => {
  const certifications = [
    { title: "Full Stack Web Development", issuer: "GeeksForGeeks", year: "2026" },
    { title: "React With MongoDB", issuer: "Pivot Edu Unit", year: "2023-2024" },
    { title: "Web Development Internship", issuer: "Zidio Development", year: "2024" },
    { title: "JavaScript Certification", issuer: "Pivot Edu Unit", year: "2023" },
    { title: "Machine Learning using Python", issuer: "Ensino R&D / BTKIT", year: "2022" },
    { title: "Web Development Summer Training", issuer: "Pivot Edu Unit", year: "2022" },
  ];

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="glass p-6 rounded-2xl glow transition-all duration-300 hover:-translate-y-2">
            <span className="text-sm text-purple-400 font-semibold">{cert.year}</span>
            <h3 className="text-xl font-bold mt-2 mb-1 text-white">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;