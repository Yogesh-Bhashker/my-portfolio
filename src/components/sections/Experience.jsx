import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: "Web Developer",
      company: "Mascot Software, Dehradun",
      duration: "Aug 2025 – Present",
      points: [
        "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, PHP, and MongoDB.",
        "Optimized website performance, responsiveness, and cross-browser compatibility.",
        "Worked closely with designers and clients to implement functional business requirements."
      ]
    },
    {
      role: "Junior Web Developer",
      company: "TSA Media Solutions & Marketing, Dehradun",
      duration: "Jan 2024 – Jun 2024",
      points: [
        "Built and optimized websites using React.js and Node.js, improving performance and usability.",
        "Implemented SEO best practices, resulting in a 35%+ growth in organic traffic.",
        "Delivered client and internal projects including e-commerce, NGO, and media platforms."
      ]
    },
    {
      role: "Web Developer",
      company: "CONNECT WITH, Dehradun",
      duration: "Jul 2024 – Dec 2024",
      points: [
        "Developed multiple responsive websites ensuring clean UI, smooth navigation, and performance optimization.",
        "Successfully delivered projects across education, yoga, interior design, and e-commerce domains."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Professional Experience</h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-purple-900/50">
        {jobs.map((job, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 border-4 border-[#050816] z-10"></div>
            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div className="glass p-6 rounded-2xl glow">
                <span className="text-sm text-cyan-400 font-medium">{job.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{job.role}</h3>
                <h4 className="text-lg text-purple-300 font-semibold mb-4">{job.company}</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  {job.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;