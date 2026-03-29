import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    document.addEventListener("mousemove", move);

    const hoverElements = document.querySelectorAll("button, span, div");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  // sizes
  const dotSize = hover ? 10 : 12;   // 6 or 3 rem px equivalent
  const ringSize = 30;
  const blurSize = 60;

  return (
    <>
      {/* Main dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full
        transition-all duration-150 ease-out
        ${hover ? "bg-pink-500" : "bg-white"}`}
        style={{
          width: dotSize,
          height: dotSize,
          transform: `translate(${position.x - dotSize / 2}px, ${position.y - dotSize / 2}px)`
        }}
      />

      {/* Glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-pink-500 opacity-50"
        style={{
          width: ringSize,
          height: ringSize,
          transform: `translate(${position.x - ringSize / 2}px, ${position.y - ringSize / 2}px)`
        }}
      />

      {/* Trail blur */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full bg-pink-500 opacity-20 blur-xl"
        style={{
          width: blurSize,
          height: blurSize,
          transform: `translate(${position.x - blurSize / 2}px, ${position.y - blurSize / 2}px)`
        }}
      />
    </>
  );
}

export default Cursor;