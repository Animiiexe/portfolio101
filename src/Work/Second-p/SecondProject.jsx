import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import project1 from "../../assets/image4.png";
import project2 from "../../assets/image5.png";
import project3 from "../../assets/image6.png";

const SecondProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: project1, alt: "Slide 1" },
    { id: 2, image: project2, alt: "Slide 2" },
    { id: 3, image: project3, alt: "Slide 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  return (
    <div className="flex flex-col lg:flex-row items-center bg-blue-900/20 backdrop-blur-lg p-8 rounded-3xl shadow-neon-blue space-y-8 lg:space-y-0 lg:space-x-8 transition-all duration-500">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl  backdrop-blur-md ">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-gray-800 p-2 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-500 shadow-md scale-110"
                    : "bg-gray-400 bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-yellow-600 tracking-tight">
          Playplex.io{" "}
          <span className="text-base  font-medium">
            {"{Gaming web app}"}
          </span>
        </h2>
        <p className="text-base leading-relaxed">
          Playplex.io is a web application featuring six exciting single-player
          games, offering hours of fun and entertainment. Built with HTML, CSS,
          and JavaScript, it delivers a smooth gaming experience with a clean,
          user-friendly interface. Designed for accessibility and responsiveness,
          Playplex.io works seamlessly across devices, catering to both casual
          players and those seeking a challenge.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="https://animiiexe.github.io/playplex/webgame/home/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-md"
          >
            <span>Visit Website</span>
            <ExternalLink size={16} />
          </a>
          <a
            href="https://github.com/animiiexe/playplex"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-md"
          >
            <span>View Source</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Parcel",
            "Netlify",
            "JavaScript",
            "TailwindCSS",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/20 backdrop-blur-md   rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondProject;