import { useState, useRef, useEffect } from "react";
import { FaRegFile, FaSearch, FaCodeBranch, FaFileDownload } from "react-icons/fa";

function Sidebar({ onSearchClick }) {
  const [showGit, setShowGit] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const popupRef = useRef();
  const downloadRef = useRef();

  // Close popups on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setShowGit(false);
      }

      if (
        downloadRef.current &&
        !downloadRef.current.contains(e.target)
      ) {
        setShowDownload(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-12 h-full bg-[#333333] flex flex-col items-center py-4">

      {/* Files */}
      <div className="p-3 hover:bg-[#444] border-l-2 border-transparent hover:border-white cursor-none">
        <FaRegFile size={20} />
      </div>

      {/* Search */}
      <div
        onClick={onSearchClick}
        className="p-3 hover:bg-[#444] border-l-2 border-transparent hover:border-white cursor-none"
      >
        <FaSearch size={20} />
      </div>

      {/* Source Control */}
      <div
        onClick={() => {
          setShowGit((prev) => !prev);
          setShowDownload(false);
        }}
        className="p-3 hover:bg-[#444] border-l-2 border-transparent hover:border-white cursor-none"
      >
        <FaCodeBranch size={20} />
      </div>

      {/* Download Resume */}
      <div
        onClick={() => {
          setShowDownload((prev) => !prev);
          setShowGit(false);
        }}
        className="p-3 hover:bg-[#444] border-l-2 border-transparent hover:border-white cursor-none"
      >
        <FaFileDownload size={20} />
      </div>

      {/* 🌿 GIT POPUP */}
      {showGit && (
        <div
          ref={popupRef}
          className="absolute left-14 top-32 w-72 bg-[#252526] border border-[#3c3c3c] rounded shadow-xl z-[9999] p-3 text-xs text-gray-300 animate-fadeIn"
        >
          <p className="text-gray-400 mb-2"> Source Control</p>
          <div className="border-t border-[#3c3c3c] mb-2"></div>

          <p className="text-white font-medium flex justify-between items-center">
            <span className="flex gap-1 items-center">
              <FaCodeBranch color="#4fc1ff" /> main
            </span>

            <span className="text-green-400 text-xs">
              ↑ 1 commit ahead
            </span>
          </p>

          <div className="mt-3 grid grid-cols-3 text-center">

            {/* Numbers */}
            <p className="text-white font-semibold">3</p>
            <p className="text-cyan-400 font-semibold">1</p>
            <p className="text-red-400 font-semibold">0</p>

            {/* Labels */}
            <p className="text-gray-400 text-[10px] mt-1">Modified</p>
            <p className="text-gray-400 text-[10px] mt-1">Added</p>
            <p className="text-gray-400 text-[10px] mt-1">Deleted</p>

          </div>

          <br />
          <div className="border-t border-[#3c3c3c] mb-2"></div>

          <a
            href="https://github.com/rohanpranto"
            target="_blank"
            rel="noreferrer"
            className="block mt-3 text-blue-400 hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>
      )}

      {/* 😂 DOWNLOAD POPUP */}
      {showDownload && (
        <div
          ref={downloadRef}
          className="absolute left-14 top-44 w-64 bg-[#252526] border border-[#3c3c3c] rounded shadow-xl z-[9999] p-3 text-xs text-center text-gray-300 animate-fadeIn"
        >
          <p className="mb-2 text-yellow-400">🚧 Under Construction</p>

          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHAxNTdqaXd5bDE1Zjc4NDV1YXdtcnF3ZWZxaGlhaDFzdzlpMDdyNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cjVsaa7xjfGRYNMQnY/giphy.gif"
            alt="funny"
            className="w-full h-22 object-cover rounded"
          />

          <p className="mt-2 text-gray-400">
            Resume coming soon 😅
          </p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;