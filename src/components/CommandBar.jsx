import { useEffect, useRef, useState } from "react";

const files = [
  "home.tsx",
  "about.html",
  "projects.js",
  "skills.tsx",
  "experience.ts",
  "contact.css",
  "README.md",
];

function CommandBar({ openFile, focusTrigger }) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  // ✅ Filtered files (MUST be above useEffect)
  const filtered = files.filter((file) =>
    file.toLowerCase().includes(query.toLowerCase())
  );

  // ✅ Keyboard controls
  useEffect(() => {
    if (focusTrigger) {
    inputRef.current?.focus();
    setShowResults(true);
  }
    const handleKey = (e) => {

      // Ctrl + P → focus search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        inputRef.current?.focus();
        setShowResults(true);
      }

      // Only allow navigation when dropdown open
      if (!showResults) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
      }

      if (e.key === "Enter") {
        if (filtered[activeIndex]) {
          openFile(filtered[activeIndex]);
          setQuery("");
          setShowResults(false);
        }
      }

      if (e.key === "Escape") {
        setShowResults(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [filtered, activeIndex, showResults, openFile,focusTrigger]);

  return (
    <div className="relative">

      {/* TOP BAR */}
      <div className="h-[30px] bg-[#1a1a2e] flex items-center px-4 gap-4">

        {/* Mac buttons */}
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
        </div>

        {/* SEARCH BOX */}
        <div className="flex-1 flex justify-center relative h-[22px]">

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
              setActiveIndex(0);
            }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            placeholder="🔎 Search (Ctrl + P)"
            className="w-[300px] bg-[#2d2d2d] text-xs text-white px-4 text-center py-2 
                       rounded border border-[#3c3c3c] 
                       outline-none focus:border-blue-500"
          />

          {/* DROPDOWN */}
          {showResults && (
            <div className="absolute top-12 w-[500px] bg-[#252526] border border-[#3c3c3c] rounded shadow-xl z-[10000] overflow-hidden">

              {filtered.length > 0 ? (
                filtered.map((file, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      openFile(file);
                      setQuery("");
                      setShowResults(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-none
                      ${activeIndex === index
                        ? "bg-[#094771] text-white"
                        : "text-gray-300 hover:bg-[#2a2d2e]"
                      }`}
                  >
                    📄 {file}
                  </div>
                ))
              ) : (
                <p className="px-4 py-2 text-gray-500 text-sm">
                  No results
                </p>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default CommandBar;