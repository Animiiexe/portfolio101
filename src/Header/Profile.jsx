import { useState, useEffect } from "react";

import pic from "../assets/photoid.png";
import { ChevronDown, Download } from "lucide-react";
import { cn } from "../lib/utils";

export default function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm{" "}
              <span className="text-primary text-blue-500">Animesh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              I design and build exceptional digital experiences that are
              modern, responsive, and intuitive.
            </p>
            <div className="mb-10">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <div className="pl-3 font-semibold ">Mumbai, India</div>
              </div>

              <div className="flex">
                🔹
                <div className="pl-3 font-semibold">
                  Available for new projects
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://drive.google.com/file/d/1AfpDCvEoPtCjRuaJz10xPr9w6vFOqg-L/view?usp=sharing">
                <button className="flex items-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </button>
              </a>
              <a href="#work">
                <button className="flex items-center px-5 py-2.5 rounded-full border border-gray-500 bg-transparent text-sm font-medium hover:bg-gray-50 hover:text-black transition-colors duration-200">
                  View My Work
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </a>
            </div>
          </div>

          <div
            className={cn(
              "relative aspect-square max-w-md mx-auto md:ml-auto transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative w-64 h-70 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background rounded-full animate-pulse duration-100"></div>
              <div className="relative z-10 h-full">
                <img
                  src={pic}
                  alt="Profile"
                  className="object-cover w-100 h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
