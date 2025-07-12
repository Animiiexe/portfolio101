import { useState, useEffect } from "react";
import RotatingText from '../ui/RotatingText';
import pic from "../assets/photoid.png";
import { ChevronDown, Download } from "lucide-react";
import { cn } from "../lib/utils";
import Photo from "./Photo";

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
              "relative aspect-square max-w-md mx-auto md:ml-auto transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative ">
              <div className="relative z-10 h-full ">
                <Photo />
              </div>
            </div>
          </div>
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
            <div className="flex">
              <RotatingText

                texts={["Frontend Developer",
                  "Designing in Code",
                  "Always Learning",
                  "Minimal by Default",
                  "React, Tailwind, Repeat"]}

                mainClassName="rounded text-3xl pl-2 pr-2 bg-blue-600 text-yellow-500 font-bold tracking-tight mb-4 "

                staggerFrom={"last"}

                initial={{ y: "100%" }}

                animate={{ y: 0 }}

                exit={{ y: "-120%" }}

                staggerDuration={0.025}

                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"

                transition={{ type: "spring", damping: 30, stiffness: 400 }}

                rotationInterval={2000}

              /></div>

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
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
