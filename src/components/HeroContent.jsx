import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
function HeroContent() {
  const texts = [
    "Exploring LLMs & RAG pipelines 🤖",
    "Building intelligent backend systems ⚙️",
    "Training models & analyzing data 📊",
    "Turning ideas into scalable products 🚀",
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));

        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);


  return (
    <div className="relative p-8">

      {/* Top line */}
      <p className="text-[#4ec9b0] text-sm">
        // hello world !! Welcome to my portfolio
      </p>

      {/* Name */}
      <h1 className="text-[110px] font-extrabold leading-none mt-2">
        <span className="text-[#e5e5e5]">Rohan</span>
        <br />
        <span className="text-[#ff5ab3]">Biswas</span>
      </h1>
      <div className="h-[1px] w-96 mt-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent opacity-80 shadow-[0_0_8px_rgba(255,0,150,0.5)]"></div>

      {/* Tags */}
      <div className="flex gap-3 mt-6 flex-wrap text-xs">

        <span className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Fullstack Developer
        </span>

        <span className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          BTech Graduate
        </span>

        <span className="flex items-center gap-2 border border-pink-500 px-3 py-1 rounded text-pink-400">
          <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
          System Engineer @ TCS
        </span>
      </div>

      {/* Subtitle */}
      <p className="mt-6 text-gray-500 text-sm flex items-center">
        {displayText}
        <span className="ml-1 animate-blink">|</span>
      </p>

      {/* Description */}
      <p className="mt-4 text-gray-400 max-w-2xl text-sm leading-7">
        I live at the crossroads of{" "}
        <span className="text-[#4fc1ff]">frontend</span>,{" "}
        <span className="text-[#4fc1ff]">backend</span> and{" "}
        <span className="text-[#4fc1ff]">data science</span>. I build systems that
        are genuinely{" "}
        <span className="text-[#4fc1ff]">intelligent</span> and{" "}
        <span className="text-[#4fc1ff]">scalable</span>.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-[#0e639c] px-5 py-1 rounded text-white">
          📁 Projects
        </button>

        <button className="border border-gray-600 px-5 py-1 rounded">
          👤 About Me
        </button>

        <button className="border border-gray-600 px-5 py-1 rounded">
          ✉️ Contact
        </button>
      </div>

      {/* Stats Panel */}
      <div className="mt-12 grid grid-cols-4 border border-gray-800 rounded overflow-hidden">
        <div className="text-center py-6 border-r border-gray-800">
          <h2 className="text-2xl font-bold">3+</h2>
          <p className="text-xs text-gray-500">YEARS</p>
        </div>

        <div className="text-center py-6 border-r border-gray-800">
          <h2 className="text-2xl font-bold">10+</h2>
          <p className="text-xs text-gray-500">PROJECTS</p>
        </div>

        <div className="text-center py-6 border-r border-gray-800">
          <h2 className="text-2xl font-bold">∞</h2>
          <p className="text-xs text-gray-500">CURIOSITY</p>
        </div>

        <div className="text-center py-6">
          <h2 className="text-2xl font-bold">↑</h2>
          <p className="text-xs text-gray-500">ALWAYS LEARNING</p>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded hover:bg-[#2a2d2e] cursor-none">
          <FaGithub /> GitHub
        </div>

        <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded hover:bg-[#2a2d2e] cursor-none">
          <FaLinkedin /> LinkedIn
        </div>





        <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded hover:bg-[#2a2d2e] cursor-none">
          <FaInstagram /> Instagram
        </div>

        <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded hover:bg-[#2a2d2e] cursor-none">
          <MdEmail /> Email
        </div>

        <div className="flex items-center gap-2 border border-gray-700 px-3 py-1 rounded hover:bg-[#2a2d2e] cursor-none">
          <FaYoutube className="text-red-500" /> YouTube
        </div>

      </div>


    </div>
  );
}

export default HeroContent;