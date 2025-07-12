import React, { useEffect, useRef } from "react";
import FirstProject from "./First-p/FirstProject";
import SecondProject from "./Second-p/SecondProject";
import ThirdProject from "./Third-p/ThirdProject";
import FourthProject from "./Fourth-p/FourthProject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  const workRef = useRef(null);
  const gridRef = useRef(null);
  const projectsRef = useRef([]);

  // Function to add project refs
  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Clear previous refs
    projectsRef.current = [];
    
    // Wait for refs to be collected and DOM to be ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Use whichever method gives us elements
        let projects = projectsRef.current.length > 0 
          ? projectsRef.current 
          : gsap.utils.toArray(".project-card", gridRef.current);

        if (!projects || projects.length === 0) {
          console.warn("No project elements found");
          return;
        }

        console.log("Animating projects:", projects.length);

        // Clear any existing styles that might interfere
        gsap.set(projects, { clearProps: "all" });

        // Set initial state
        gsap.set(projects, { 
          opacity: 0, 
          y: 50,
          // Force hardware acceleration
          willChange: "opacity, transform" 
        });

        // Create stagger animation
        projects.forEach((project, i) => {
          gsap.to(project, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15, // Manual stagger
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%", // When top of project hits 80% of viewport
              end: "top 30%",
              toggleActions: "play none none none",
              // markers: true, // Useful for debugging
              id: `project-${i}` // Unique ID for each
            }
          });
        });

      }, workRef);

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, 300); // Slightly longer delay to ensure DOM is ready

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={workRef} className="w-full p-10 md:px-28">
      <div className="flex flex-col items-center justify-center font-sans">
        <h2 className="text-4xl md:text-5xl font-bold mt-16 mb-4 text-center">
          My{" "}
          <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
            Projects
          </span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          Explore my recent creations. Each project showcases my passion for{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            innovative solutions
          </span>{" "}
          and{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            cutting-edge technologies
          </span>
          .
        </p>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div ref={addToRefs} className="project-card">
          <FirstProject />
        </div>
        <div ref={addToRefs} className="project-card">
          <SecondProject />
        </div>
        <div ref={addToRefs} className="project-card">
          <ThirdProject />
        </div>
        <div ref={addToRefs} className="project-card">
          <FourthProject />
        </div>
      </div>
    </div>
  );
};

export default Work;