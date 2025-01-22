
import project1 from "../../assets/image7.png";
import project2 from "../../assets/image8.png";
import project3 from "../../assets/image9.png";
import React, { useEffect, useState } from "react";

const FirstProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for the slides
  const slides = [
    {
      id: 1,
      image: project1,
      alt: "Slide 1",
    },
    {
      id: 2,
      image: project2,
      alt: "Slide 2",
    },
    {
      id: 3,
      image: project3,
      alt: "Slide 3",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8 ">

        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
      <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full"
            style={{ width: "100%" }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
         </div>
      </div> 
      </div>
      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-black tracking-wider">
        Pokédex 411{" "}
          <span className="text-sm text-gray-700">
            {"{"}Information Hub{"}"}
          </span>
        </h2>
        <p className="text-gray-600 text-sm tracking-wide">
          I built a full-stack web application combining React for an
          interactive and responsive frontend,This project was built to showcase a modern, functional Pokédex with a sleek user interface. The app fetches data dynamically from a local JSON file and displays relevant information about Pokémon in an organized and visually appealing way.{" "}
        </p>

        {/* Link Icon */}
        <div>
          <a
            href="https://pokedex411.netlify.app/"
            className="inline-flex items-center text-blue-800 text-lg hover:underline"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
            Pokédex 411
          </a>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Parcel",
            "Netlify",
            "Javascript",
            "TailwindCSS",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default FirstProject;
