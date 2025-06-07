import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Left from "./Left";
import { SunIcon, MoonIcon, DownloadIcon } from "./Svg"; // Ensure these icons are imported correctly

const Right = () => {
  const [show, setShow] = useState(false);
  const [light, setLight] = useState("day");

  // Function to change theme
  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setLight(theme);
  };

  useEffect(() => {
    const selectedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day");

    document.documentElement.setAttribute("data-theme", selectedTheme);
    setLight(selectedTheme);
  }, []);

  return (
    <motion.div
      className="flex justify-between items-center w-full py-4 px-6 top-0 left-0 right-0 z-50 transition-all duration-300 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Side (Logo) */}
    <h2 className="text-blue-500 font-bold text-4xl pl-3 md:pl-14">
  <a
    href="https://github.com/Animiiexe"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition-all duration-300 ease-in-out"
  >
    <Left />
  </a>
</h2>

      {/* Right Side (Navigation + Theme Toggle + CV Button) */}
      <div className="w-auto hidden sm:flex items-center gap-6">
        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {["about", "skills", "work", "experience", "contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className="relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-3/4 group-hover:left-2"></span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

        {/* Theme Toggle Button */}
          <motion.button
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 relative overflow-hidden"
          onClick={() => changeTheme(light === "day" ? "night" : "day")}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle dark mode"
          style={{
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: `
              0 2px 4px rgba(0,0,0,0.05),
              inset 0 1px 2px rgba(255,255,255,0.1)
            `
          }}
        >
          {/* Animated background for depth */}
          <motion.span 
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          
          {light === "night" ? (
            <SunIcon />
          ) : (
            <MoonIcon />
          )}
        </motion.button>

        {/* CV Download Button */}
        <motion.a
          className="px-4 py-2 font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
          href="https://drive.google.com/file/d/1AfpDCvEoPtCjRuaJz10xPr9w6vFOqg-L/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Resume
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center gap-4">
        <motion.button
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          onClick={() => changeTheme(light === "day" ? "night" : "day")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle dark mode"
        >
          {light === "night" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </motion.button>

        <motion.button
          onClick={() => setShow((prev) => !prev)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </motion.button>

        {show && (
          <motion.div
            className="absolute flex flex-col bg-white dark:bg-gray-800 p-6 rounded-xl top-16 right-6 z-50 gap-3 shadow-xl border border-gray-100 dark:border-gray-700 w-64"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {["about", "skills", "work", "experience", "contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShow(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            <motion.a
              className="mt-2 px-4 py-3 font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center gap-2"
              href="https://drive.google.com/file/d/1ztXzJ8zkf9CyaFrnolUeJeINrYKU4Ang/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Right;