import { useEffect, useState } from "react";
import project1 from "../../assets/image10.png";
import project2 from "../../assets/image11.png";
import project3 from "../../assets/image12.png";
import { motion } from 'framer-motion';
import { Eye, Snowflake } from "lucide-react";

const FirstProject = () => {
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

  return (
    <div className="project-card min-h-[600px]">
      <motion.div
        whileHover={{
          y: -5,
          boxShadow:
            "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3)",
        }}
        className="h-full flex flex-col justify-between p-6 rounded-xl border border-blue-600 hover:border-blue-600/50 transition-all shadow-sm hover:shadow-lg"
      >
        {/* Title */}
        <motion.h3
          className="text-xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Yapster – AI Chat App
        </motion.h3>

        {/* Image Carousel */}
        <div className="overflow-hidden rounded-lg mb-4">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0 w-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  className="aspect-[8/4] w-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="mb-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Yapster is an AI-enhanced chat app delivering instant, smart responses
          and real-time messaging with smooth interaction cues.
          <br />
          <span className="block mt-2 text-blue-600 font-semibold">
            Features:
          </span>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Live conversations with typing indicators</li>
            <li>AI-powered contextual replies</li>
            <li>Modern, sleek interface</li>
            <li>Responsive across all devices</li>
          </ul>
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Socket.io",
            "OpenAI API",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/Animiiexe/yapster1.0.1"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Snowflake className="w-4 h-4 mr-1" />
            Code
          </a>
          <a
            href="https://yapsterv2.vercel.app/"
            className="flex items-center text-green-600 hover:text-green-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FirstProject;
