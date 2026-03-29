function AboutContent() {
  
  return (
    
    <div className="text-sm leading-7 text-gray-300 p-8">

      <p className="text-gray-500">// about.tsx</p>

      {/* WHO AM I */}
      <div className="mt-6 border border-gray-800 rounded p-4 bg-[#1e1e1e] hover:border-pink-600 transition">
        <p className="text-purple-400">const</p>
        <h2 className="text-xl text-white font-bold inline">whoAmI</h2>
        <span className="text-gray-400"> = () =&gt; &#123;</span>

        <p className="mt-3 text-gray-400">
          I’m a <span className="text-[#4fc1ff]">Fullstack Developer</span> and{" "}
          <span className="text-[#4fc1ff]">System Engineer @ TCS</span>, with a
          strong foundation in{" "}
          <span className="text-[#4fc1ff]">frontend</span>,{" "}
          <span className="text-[#4fc1ff]">backend</span>, and{" "}
          <span className="text-[#4fc1ff]">data science</span>.
        </p>

        <p className="mt-2 text-gray-400">
          I spend most of my time building{" "}
          <span className="text-[#4fc1ff]">web applications</span>, exploring{" "}
          <span className="text-[#4fc1ff]">AI</span>, and constantly learning new
          technologies.
        </p>

        <p className="mt-2 text-gray-400 italic">
          "I can do this all day!" 🛡️
        </p>

        <p className="text-gray-400 mt-2">&#125;</p>
      </div>

      {/* WHAT I DO */}
      <div className="mt-6 border border-gray-800 rounded p-4 bg-[#1e1e1e] hover:border-pink-600 transition">
        <p className="text-purple-400">const</p>
        <h2 className="text-xl text-white font-bold inline">whatIDo</h2>
        <span className="text-gray-400"> = [</span>

        <ul className="mt-3 space-y-2 ml-4 text-gray-400">
          <li>• Build modern web apps using React & Next.js ⚛️</li>
          <li>• Develop backend systems & APIs ⚙️</li>
          <li>• Work with databases (SQL & NoSQL) 🗄️</li>
          <li>• Explore AI, ML & LLM-based systems 🤖</li>
          <li>• Create mobile apps using React Native 📱</li>
        </ul>

        <p className="text-gray-400 mt-2">]</p>
      </div>

      {/* EDUCATION */}
      <div className="mt-6 border border-gray-800 rounded p-4 bg-[#1e1e1e] hover:border-pink-600 transition">
        <p className="text-green-400">// education</p>

        <div className="mt-3">
          <h3 className="text-white font-semibold">
            🎓 BTech - University of Engineering & Management, Kolkata
          </h3>
          <p className="text-gray-400 text-sm">
            August 2020 - June 2024 • CGPA: 8.4
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-semibold">
            🏫 Kalyani Shikshayatan, Kalyani
          </h3>
          <p className="text-gray-400 text-sm">
            XII (2019-2020) • 79.17%
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-6 border border-gray-800 rounded p-4 bg-[#1e1e1e] hover:border-pink-600 transition">
        <p className="text-green-400">// experience</p>

        <div className="mt-3">
          <h3 className="text-white font-semibold">
            💼 System Engineer @ TCS
          </h3>

          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>• Working on enterprise-level systems</li>
            <li>• Building scalable and maintainable solutions</li>
            <li>• Collaborating in professional development environments</li>
          </ul>
        </div>
      </div>

      {/* CURRENT FOCUS */}
      <div className="mt-6 border border-gray-800 rounded p-4 bg-[#1e1e1e] hover:border-pink-600 transition">
        <p className="text-yellow-400">// currentFocus</p>

        <p className="mt-3">
          🚀 Exploring{" "}
          <span className="text-[#4fc1ff]">LLMs</span>,{" "}
          <span className="text-[#4fc1ff]">RAG pipelines</span>, and{" "}
          <span className="text-[#4fc1ff]">AI-powered systems</span>.
        </p>

        <p className="mt-2 text-gray-400">
          Constantly building, experimenting, and leveling up.
        </p>
      </div>

    </div>
  );
}

export default AboutContent;