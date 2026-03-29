import { useEffect, useState } from "react";
import { FaCodeBranch, FaExclamationCircle } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function StatusBar() {
  const [time, setTime] = useState("");

  // Live time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-7 bg-[#007acc] text-white flex items-center justify-between px-3 text-xs">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <div className="flex items-center gap-1">
          <FaExclamationCircle size={12} />
          <span>0</span>
        </div>

        <div className="flex items-center gap-1">
          <FaCodeBranch size={12} />
          <span>main</span>
        </div>

        <div>
          Rohan's Portfolio
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div className="flex items-center gap-1">
          <SiJavascript size={12} />
          <span>JavaScript</span>
        </div>

        <div>UTF-8</div>

        <div>Prettier</div>

        <div>{time}</div>

      </div>
    </div>
  );
}

export default StatusBar;