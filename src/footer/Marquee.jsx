import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-background py-12 md:py-16">
      {/* Gradient overlay - adjusted for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-background dark:to-background z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Number.POSITIVE_INFINITY, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(29 78 216)", // blue-700 for light mode
                textStroke: "1px rgb(29 78 216)",
              }}
            >
              Crafting Digital Experiences
            </span>
          
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;