import { useEffect, useState } from "react";

const skillsData = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "ReactJS", level: 85 },
    { name: "Bootstrap", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Python", level: 85 },
    { name: "SQL", level: 80 },
    { name: "NoSQL", level: 75 },
  ],
  Core: [
    { name: "C / C++", level: 85 },
    { name: "DSA", level: 80 },
    { name: "Git & GitHub", level: 90 },
  ],
};

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <div className="relative min-h-full text-white px-6 py-8 overflow-hidden">

      <p className="text-gray-500">// Skills.tsx</p>
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 tracking-wide">
        <span className="text-pink-400">Skills</span> & Tech Stack
      </h1>

      <p className="text-gray-400 mb-10">
        Tools I use to build, break, and rebuild things 🚀
      </p>

      {/* 🔥 SKILL SECTIONS */}
      <div className="space-y-10 relative z-10">

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>

            {/* Category Title */}
            <h2 className="text-lg text-blue-400 mb-4 tracking-wider">
              // {category}
            </h2>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 gap-6">

              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`group relative p-4 rounded border border-gray-800 bg-[#1e1e1e]
                  transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,150,0.3)]
                  hover:border-pink-500 cursor-none
                  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >

                  {/* Skill Name */}
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400 text-xs">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#2a2d2e] rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-1000"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>

                  {/* Glow Hover Effect */}
                  <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none
                    bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur">
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* 🔥 FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default Skills;