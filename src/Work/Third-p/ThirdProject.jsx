"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import project1 from "../../assets/image7.png";
import project2 from "../../assets/image8.png";
import project3 from "../../assets/image9.png";

const ThirdProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: project1, alt: "Slide 1" },
    { id: 2, image: project2, alt: "Slide 2" },
    { id: 3, image: project3, alt: "Slide 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));

  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl space-y-8 lg:space-y-0 lg:space-x-8 transition-colors duration-300">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-full" style={{ width: "100%" }}>
                <img src={slide.image || "/placeholder.svg"} alt={slide.alt} width={500} height={300} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400 bg-opacity-50"}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-wider">
          Pokédex 411{" "}
          <span className="text-sm text-gray-600 dark:text-gray-400">{"{Information Hub}"}</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base tracking-wide leading-relaxed">
          I built a full-stack web application combining React for an interactive and responsive frontend. This project showcases a modern, functional Pokédex with a sleek user interface. The app fetches data dynamically from a local JSON file and displays relevant information about Pokémon in an organized and visually appealing way.
        </p>

        {/* External Link */}
        <div>
          <a
            href="https://pokedex411.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 text-lg hover:underline transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Pokédex 411
          </a>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {["React", "Parcel", "Netlify", "Javascript", "TailwindCSS", "Git"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdProject;
