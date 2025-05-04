import React, { useEffect, useRef } from "react";
import FirstProject from "./First-p/FirstProject";
import SecondProject from "./Second-p/SecondProject";
import ThirdProject from "./Third-p/ThirdProject";
import FourthProject from "./Fourth-p/FourthProject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  const workRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray(".project-card");

      projects.forEach((project, index) => {
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: workRef.current,
              start: "top 75%",
              end: "+=100",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    }, workRef);

    return () => ctx.revert();
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <FirstProject />
        <SecondProject />
        <ThirdProject />
        <FourthProject />
      </div>
    </div>
  );
};

export default Work;
