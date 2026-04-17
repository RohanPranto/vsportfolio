import { useState, useRef, useEffect } from "react";
import {
  FaRegFile,
  FaSearch,
  FaCodeBranch,
  FaFileDownload,
} from "react-icons/fa";

function Sidebar({ onSearchClick, onFilesClick, showExplorer = true }) {
  const [showGit, setShowGit] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const popupRef = useRef();
  const downloadRef = useRef();
  const resumeLink =
    "https://drive.google.com/file/d/1M5VQl90DPHgkdc2Fup8V31Tg1IWSgemJ/view";

  // Close popups on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowGit(false);
      }

      if (downloadRef.current && !downloadRef.current.contains(e.target)) {
        setShowDownload(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-12 h-full bg-[#333333] flex flex-col items-center ">
      {/* Files */}
      <div
        onClick={onFilesClick}
        className={`p-3 hover:bg-[#444] border-l-2 cursor-none ${
          showExplorer
            ? "border-white bg-[#444]"
            : "border-transparent hover:border-white"
        }`}
      >
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

      {/* GIT POPUP */}
      {showGit && (
        <div
          ref={popupRef}
          className="absolute left-14 top-32 w-72 bg-[#252526] border border-[#3c3c3c] rounded shadow-xl z-[9999] p-3 text-xs text-gray-300 animate-fadeIn"
        >
          <p className="text-gray-400 mb-2">Source Control</p>
          <div className="border-t border-[#3c3c3c] mb-2"></div>

          <p className="text-white font-medium flex justify-between items-center">
            <span className="flex gap-1 items-center">
              <FaCodeBranch color="#4fc1ff" /> main
            </span>

            <span className="text-green-400 text-xs">1 commit ahead</span>
          </p>

          <div className="mt-3 grid grid-cols-3 text-center">
            <p className="text-white font-semibold">3</p>
            <p className="text-cyan-400 font-semibold">1</p>
            <p className="text-red-400 font-semibold">0</p>

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
            View on GitHub
          </a>
        </div>
      )}

      {/* DOWNLOAD POPUP */}
      {showDownload && (
        <div
          ref={downloadRef}
          className="absolute left-14 top-44 w-72 bg-[#252526] border border-[#3c3c3c] rounded shadow-xl z-[9999] p-3 text-xs text-gray-300 animate-fadeIn"
        >
          <p className="text-gray-400 mb-2">Resume</p>
          <div className="border-t border-[#3c3c3c] mb-3"></div>

          <div className="border border-[#3c3c3c] bg-[#1e1e1e] rounded overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#3c3c3c] bg-[#2d2d30]">
              <span className="flex items-center gap-2 text-white font-medium">
                <FaRegFile className="text-[#519aba]" />
                resume.pdf
              </span>
              <span className="text-[10px] uppercase tracking-wide text-green-400">
                Ready
              </span>
            </div>

            <div className="px-3 py-3 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="border border-[#3c3c3c] rounded px-2 py-2 bg-[#252526]">
                  <p className="text-gray-500">Source</p>
                  <p className="text-white mt-1">Google Drive</p>
                </div>
                <div className="border border-[#3c3c3c] rounded px-2 py-2 bg-[#252526]">
                  <p className="text-gray-500">Status</p>
                  <p className="text-white mt-1">Latest Copy</p>
                </div>
              </div>

              <p className="text-gray-400 leading-5">
                Open the latest resume in a new tab for quick preview.
              </p>

              <a
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-[#0e639c] text-white text-center px-3 py-2 rounded hover:bg-[#1177bb]"
              >
                Preview Resume
              </a>

              <p className="text-[11px] text-gray-500">
                Opens externally, similar to viewing a file outside the workspace.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
