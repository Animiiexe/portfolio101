import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo1.png";

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="w-full h-screen flex items-center justify-center bg-black fixed top-0 left-0 z-50"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          <motion.img
            src={logo}
            alt="Loading..."
            className="w-20 h-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              rotate: 360,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;