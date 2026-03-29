import { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "OrchidCafe",
    desc: "Developed the frontend of OrchidCafe. Conceptualized and built a dynamic e-commerce platform enabling seamless browsing, ordering, and payment experiences for users.",
  },
  {
    role: "Fullstack Developer",
    company: "Debolina Packers and Movers",
    desc: "Led fullstack development. Designed and developed a clean, modern, and responsive website ensuring smooth experience across all devices.",
  },
];

function Experience() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div className="relative px-6 py-8 text-gray-300">

      {/* Header */}
      <p className="text-gray-500">// experience.ts</p>

      <h1 className="text-4xl font-bold mb-10">
        <span className="text-pink-400">Work</span> Experience
      </h1>

      {/* Timeline Container */}
      <div className="relative border-l border-gray-800 ml-4">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-10 ml-6 relative transition duration-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >

            {/* Timeline Dot */}
            <span className="absolute -left-9 top-2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(255,0,150,0.7)]"></span>

            {/* Card */}
            <div className="group bg-[#1e1e1e] border border-gray-800 rounded p-5 
              hover:border-pink-500 transition hover:-translate-y-1 
              hover:shadow-[0_0_25px_rgba(255,0,150,0.2)] cursor-none">

              {/* Role + Icon */}
              <div className="flex items-center gap-2 text-white font-semibold">
                <FaBriefcase className="text-pink-400" />
                {exp.role}
              </div>

              {/* Company */}
              <p className="text-blue-400 text-sm mt-1">
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-3 leading-6">
                {exp.desc}
              </p>

              {/* Fake Code Footer */}
              <p className="text-gray-600 text-xs mt-4">
                // impact: scalable • responsive • production-ready
              </p>

              {/* Glow overlay */}
              <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 
                transition pointer-events-none
                bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur">
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-500 opacity-10 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-500 opacity-10 blur-3xl bottom-10 right-10"></div>
      </div>

    </div>
  );
}

export default Experience;