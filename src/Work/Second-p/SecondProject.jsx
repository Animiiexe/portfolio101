import { useEffect, useState } from "react";
import project1 from "../../assets/image7.png";
import project2 from "../../assets/image8.png";
import project3 from "../../assets/image9.png";
import { motion } from 'framer-motion';
import { Eye } from "lucide-react";
import { Snowflake } from "lucide-react";

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
    <div className="project-card">
      <motion.div
  whileHover={{ 
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3)"
  }}
  className="p-3 rounded-xl border border-blue-600 hover:border-blue-600/50 transition-all shadow-sm hover:shadow-lg"
>

      {/* Project One */}
      <div className="overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">
            Pokédex - A guide for Pokémons
          </h3>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md p-2"
                />
              </div>
            ))}
          </div>
          <p className="m-5">
            A responsive Pokémon encyclopedia with clean UI, fetching data from
            a local JSON for seamless browsing.
            <br />
            <span className="text-blue-600 font-bold">Features:</span>Structured Pokémon details • Fast performance • Visually
            appealing cards • Optimized UX
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Parcel
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
              JSON
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Tailwind CSS
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Animiiexe/pokedex101"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <Snowflake className="w-4 h-4 mr-1" />
              Code
            </a>
            <a
              href="https://pokedex411.netlify.app/"
              className="flex items-center text-green-600 hover:text-green-800 font-medium"
            >
              <Eye className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default SecondProject;
