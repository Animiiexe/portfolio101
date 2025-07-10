import { useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";

const AnimatedBackground = ({ 
  duration = 2, 
  ease = "power2.inOut",
  customGradients = null 
}) => {
  const bgRef = useRef(null);
  const themeObserver = useRef(null);
  const animation = useRef(null);

  // Memoize gradient configurations for better performance
  const gradients = useMemo(() => 
    customGradients || {
      night: "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0d0d0d 50%, #000000 100%)",
      day: "radial-gradient(circle at 50% 50%, #f0f0f0 0%, #d9d9d9 50%, #ffffff 100%)",
      // Add more theme options
      sunset: "radial-gradient(circle at 50% 50%, #ff6b6b 0%, #ee5a24 50%, #d63031 100%)",
      ocean: "radial-gradient(circle at 50% 50%, #74b9ff 0%, #0984e3 50%, #2d3436 100%)"
    }, [customGradients]);

  // Memoize the update function to prevent unnecessary re-renders
  const updateGradient = useCallback(() => {
    if (!bgRef.current) return;
    
    const theme = document.documentElement.getAttribute("data-theme") || "day";
    const targetGradient = gradients[theme] || gradients.day;
    
    // Kill any ongoing animation before starting new one
    if (animation.current) {
      animation.current.kill();
    }
    
    animation.current = gsap.to(bgRef.current, {
      background: targetGradient,
      duration,
      ease,
      overwrite: true
    });
  }, [gradients, duration, ease]);

  // Get initial theme for default background
  const initialTheme = useMemo(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "day";
    }
    return "day";
  }, []);

  useEffect(() => {
    // Initial setup
    updateGradient();
    
    // Set up theme change observer with better error handling
    try {
      themeObserver.current = new MutationObserver((mutations) => {
        // Only update if data-theme actually changed
        const hasThemeChange = mutations.some(
          mutation => mutation.attributeName === "data-theme"
        );
        if (hasThemeChange) {
          updateGradient();
        }
      });
      
      themeObserver.current.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
      });
    } catch (error) {
      console.warn("Failed to set up theme observer:", error);
    }
    
    // Cleanup function
    return () => {
      if (animation.current) {
        animation.current.kill();
      }
      if (themeObserver.current) {
        themeObserver.current.disconnect();
      }
    };
  }, [updateGradient]);

  // Handle window resize for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (bgRef.current) {
        // Force a repaint to ensure gradient covers new dimensions
        bgRef.current.style.transform = "translateZ(0)";
        requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = "";
          }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: gradients[initialTheme], // Use initial theme instead of hardcoded 'day'
        willChange: "background",
        backfaceVisibility: "hidden", // Improve performance
        transform: "translateZ(0)" // Create compositing layer
      }}
      aria-hidden="true" // Accessibility improvement
    />
  );
};



export default AnimatedBackground;