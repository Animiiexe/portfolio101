import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import project1 from "../../assets/image1.png";
import project2 from "../../assets/image2.png";
import project3 from "../../assets/image3.png";

const FirstProject = () => {
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
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-xl space-y-6 lg:space-y-0 lg:space-x-6 transition-all duration-500">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-auto object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:bg-white/50 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/30 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-md hover:bg-white/50 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {slides.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 shadow-md scale-110" : "bg-gray-400 bg-opacity-50"}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold dark:text-yellow-400 tracking-wider">
          Edumate <span className="text-sm text-gray-600 dark:text-gray-400">{"{College Portal}"}</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm tracking-wide leading-relaxed">
          College Portal is a web application that allows users to view information about various colleges and add new colleges to the list. Built with HTML, CSS, and JavaScript, it features a simple and intuitive interface that makes accessing college details easy and user-friendly. Designed for smooth navigation, the app provides an efficient way to explore college data and manage the list effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex space-x-3">
          <a
            href="https://animiiexe.github.io/Edumate/Edumate/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md text-sm transition-all duration-300"
          >
            Visit Website
          </a>
          <a
            href="https://github.com/animiiexe/Edumate"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md shadow-md text-sm transition-all duration-300"
          >
            View Source
          </a>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-1">
          {["React", "Parcel", "Netlify", "JavaScript", "TailwindCSS", "Git"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstProject;
