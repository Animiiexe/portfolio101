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

    const projects = gsap.utils.toArray(".project-card");

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top 80%", // Adjusted to trigger earlier
            toggleActions: "play none none none", // Stops it from reversing
            once: true, // Ensures animation plays only once
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={workRef}
      className="w-full flex flex-col items-center justify-center p-10 md:pl-28 md:pr-28"
    >
      <div className="items-center flex justify-center font-semibold">
        <h1 className="bg-blue-600 text-white w-[125px] h-[28px] justify-center items-center flex size-3 md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-xl">
          Work
        </h1>
      </div>

      <div className="space-y-28 min-h-screen">
        <div className="project-card md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12">
          <FourthProject />
        </div>
        <div className="project-card md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12">
          <ThirdProject />
        </div>
        <div className="project-card md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12">
          <FirstProject />
        </div>
        <div className="project-card md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12">
          <SecondProject />
        </div>
      </div>
    </div>
  );
};

export default Work;
