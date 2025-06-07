import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const themeObserver = useRef(null);
  const animation = useRef(null);

  // Define gradient configurations
  const gradients = {
    night: "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)",
    day: "radial-gradient(circle at 50% 50%, #f0f0f0 0%, #d9d9d9 50%, #ffffff 100%)"
  };

  useEffect(() => {
    const updateGradient = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "day";
      const targetGradient = gradients[theme];
      
      // Kill any ongoing animation before starting new one
      if (animation.current) animation.current.kill();
      
      animation.current = gsap.to(bgRef.current, {
        background: targetGradient,
        duration: 2,
        ease: "power2.inOut",
        overwrite: true
      });
    };

    // Initial setup
    updateGradient();

    // Set up theme change observer
    themeObserver.current = new MutationObserver(updateGradient);
    themeObserver.current.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    // Cleanup
    return () => {
      if (animation.current) animation.current.kill();
      if (themeObserver.current) themeObserver.current.disconnect();
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: gradients.day, // Default fallback
        willChange: "background" // Performance hint
      }}
    />
  );
};

export default AnimatedBackground;