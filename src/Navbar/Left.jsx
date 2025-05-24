import React from "react";
import logo from "../assets/logo1.png";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 360 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className=" text-blue-500 font-bold text-4xl pl-3 md:pl-14">
        <a
          href="https://github.com/Animiiexe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-all duration-300 ease-in-out"
        >
          <motion.img
            src={logo}
            alt="logo"
            width={70}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </a>
      </h2>
    </motion.div>
  );
};

export default Left;