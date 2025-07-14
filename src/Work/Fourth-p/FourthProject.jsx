
import project1 from "../../assets/image4.png";
import project2 from "../../assets/image5.png";
import project3 from "../../assets/image6.png";
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Github, ChevronLeft, ChevronRight } from "lucide-react"

const FourthProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    { id: 1, image: project1, alt: "Yapster Chat Interface" },
    { id: 2, image: project2, alt: "AI Response Features" },
    { id: 3, image: project3, alt: "Mobile Responsive Design" },
  ]

  const techStack = ["React", "TMDB API", "Routing", "Tailwind CSS", "Context API",]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [slides.length, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group"
      >
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/10 border border-blue-600/30  rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 min-h-[650px] flex flex-col">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none" />

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 mb-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Movie List
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mb-6 group/carousel"
          >
            <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="flex-shrink-0 w-full relative">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.alt}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 w-6" : "bg-white/30 hover:bg-white/50"
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 mb-6 flex-grow"
          >
            <p className="leading-relaxed mb-3">
              A sleek TMDB-powered movie platform that showcases trending films with detailed data, search functionality, and smooth transitions for a fluid user experience.
              Built with modern frontend tools, it's fully responsive and optimized for performance..
            </p>

            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
                Key Features
              </p>
              <ul className="space-y-2">
                {[
                  "Discover trending movies instantly",
                  "View trailers, ratings, and summaries",
                  "Real-time search with suggestions",
                  "Fully responsive modern UI"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-sm "
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative z-10 mb-6"
          >
            <p className="text-sm font-medium  mb-3">Built with</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-sm border border-blue-600/30  rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative z-10 flex gap-4"
          >
            <motion.a
              href="https://github.com/Animiiexe/project"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-200 font-medium text-sm flex-1"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>

            <motion.a
              href="https://project-nine-weld.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl text-blue-600 dark:text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-500/40 transition-all duration-200 font-medium text-sm flex-1"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default FourthProject



