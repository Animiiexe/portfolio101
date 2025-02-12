import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const updateGradient = () => {
      const theme = document.documentElement.getAttribute("data-theme");

      if (theme === "night") {
        // Night mode gradient animation
        gsap.to(bgRef.current, {
          background:
            "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)",
          duration: 2,
          ease: "power2.inOut",
        });
      } else {
        // Day mode gradient animation
        gsap.to(bgRef.current, {
          background:
            "radial-gradient(circle at 50% 50%, #f0f0f0 0%, #d9d9d9 50%, #ffffff 100%)",
          duration: 2,
          ease: "power2.inOut",
        });
      }
    };

    // Initial call
    updateGradient();

    // Listen for changes in theme
    const observer = new MutationObserver(updateGradient);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-1000"
    />
  );
};

export default AnimatedBackground;