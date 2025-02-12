import React, { useEffect, useState } from "react";

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
    // Get saved theme or use system preference
    const selectedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day");

    document.documentElement.setAttribute("data-theme", selectedTheme);
    setLight(selectedTheme);
  }, []);

  return (
    <div>
      <div className="w-auto hidden sm:flex md:pr-16 gap-2 font-semibold">
        {["about", "skills", "work", "experience", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="hover:text-white hover:bg-gray-800 px-5 py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}

        {/* Theme Toggle Button */}
        <div
          className="h-9 w-9 flex justify-center items-center cursor-pointer"
          onClick={() => changeTheme(light === "day" ? "night" : "day")}
        >
          {light === "day" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </div>

        {/* CV Download Button */}
        <a
          className="relative px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 ease-in-out"
          href="https://drive.google.com/file/d/1UOiK6XUcRbSdwS7o1XP2pwA-0CFIehLB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu */}
      <div onClick={() => setShow((prev) => !prev)} className="sm:hidden relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-gray-800 mr-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        {show && (
          <div className="absolute flex flex-col bg-slate-700/70 p-2 rounded-lg top-8 right-2 z-20 gap-2 font-semibold">
            {["about", "skills", "work", "experience", "contact"].map((section) => (
              <a key={section} href={`#${section}`} className="text-white hover:text-gray-300">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a
              className="relative px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              href="https://drive.google.com/file/d/1UOiK6XUcRbSdwS7o1XP2pwA-0CFIehLB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Right;
