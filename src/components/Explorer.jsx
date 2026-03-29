import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiJson } from "react-icons/si";
import { VscFile } from "react-icons/vsc";
import { TbFileDescription } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";

function Explorer({ openFile, activeTab }) {

  const files = [
    { name: "home.tsx", icon: <FaReact className="text-blue-400" /> },
    { name: "about.html", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "skills.tsx", icon: <SiJson className="text-green-400" /> },
    { name: "projects.js", icon: <FaJs className="text-yellow-400" /> },
    { name: "experience.ts", icon: <SiTypescript className="text-blue-500" /> },
    { name: "contact.css", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "README.md", icon: <TbFileDescription className="text-pink-400" /> }
  ];

  return (
    <div className="w-60 bg-[#252526] text-sm">
      <p className="text-gray-400 px-3 py-2">PORTFOLIO</p>

      <div className="space-y-1 px-2">
        {files.map((file) => (
          <div style={{ cursor: "none" }}
            key={file.name}
            onClick={() => openFile(file.name)}
            className={`flex items-center gap-2 px-2 py-1 rounded cursor-none
              ${activeTab === file.name
                ? "bg-[#37373d] text-white"
                : "hover:bg-[#2a2d2e] text-gray-300"
              }`}
          >
            {file.icon}
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;