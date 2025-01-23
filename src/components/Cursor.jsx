import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) return;

    const handleMouseMove = (e) => {
      const { target, x, y } = e;
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        x: x + 8,
        y: y + 8,
        duration: 0.9,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        scale: isTargetLinkOrBtn ? 3.5 : 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full opacity-0 pointer-events-none z-[10000] select-none"
    />
  );
}
