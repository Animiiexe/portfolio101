

// components/WorkShowcaseSnapping.tsx
import { useState, useRef, useEffect } from 'react';


import { motion, AnimatePresence } from 'framer-motion';


import yapster from "../assets/yapster.png";
import DrawIo from '../assets/Image12.png';

import DealsOfAgroImage from '../assets/image5.png';
import HeyDropImage from '../assets/image2.png';
import framermotion from '../assets/framermotion.png';
import nextjs from '../assets/nextjs.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';
import restapi from '../assets/restapi.webp';
import tailwindcss from '../assets/tailwindcss.png';
import expressjs from '../assets/expressjs.png';
import socketio from '../assets/socket.png';
import typescript from '../assets/typescript.svg';



import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';



export default function WorkShowcaseSnapping() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const componentRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
  id: 1,
  link: "https://draw-io-opal.vercel.app/",
  title: "Draw.io",
  tagline: "A modern, intuitive collaborative drawing platform for real-time creativity and teamwork.",
  description: "Draw.io is a real-time collaborative drawing platform that empowers teams and individuals to create together seamlessly from anywhere in the world. Featuring professional-grade tools, instant synchronization, and a smooth cross-platform experience, it redefines online creative collaboration.",
  techStack: [
    { name: "Next.js 14", icon: nextjs },
    { name: "React 18", icon: react },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Socket.IO", icon: socketio },
  ],
  features: [
    "Custom color picker with 256 colors and custom palettes",
    "Multiple brush types: Brush, Pencil, Marker, Smart Eraser",
    "Undo/Redo for mistake-free creativity",
    "Instant synchronization across devices",
    "Responsive design for desktop, tablet, and mobile",
    "Touch-optimized mobile drawing",
  ],
  image: DrawIo,
  accentColor: "bg-blue-500",
  bgGradient: "from-blue-800 to-blue-600"
},

    {
      id: 2,
      link: "https://yapsterv2.vercel.app/",
      title: "Yapster",
      tagline: "Anonymous real-time chat with AI replies, threading, and safe moderation.",
      description: "Yapster is an AI-enhanced chat app that revolutionizes real-time communication with intelligent features and seamless user experience.",
      techStack: [
        { name: "React", icon: react },
        { name: "Node.js", icon: nodejs },
        { name: "Express.js", icon: expressjs },
        { name: "Rest API", icon: restapi },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Socket.IO", icon: socketio }
      ],
      features: [
        "Live conversations with typing indicators",
        "AI-powered contextual replies",
        "Modern, sleek interface",
        "Responsive across all devices",
      ],
      image: yapster,
      accentColor: "bg-green-500",
      bgGradient: "from-green-800 to-green-600"
    },
    {
      id: 3,
      link: "https://cover-ai-ruby.vercel.app/",
      title: "Cover AI",
      tagline: "Cover AI — Create, Transform, and Generate Stunning Images in Seconds.",
      description: "Cover AI is a fun SaaS-level image editing and generation tool powered by the Cloudinary API.It allows users to effortlessly enhance, transform, or generate new images with a seamless interface and real-time previews.",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "TypeScript", icon: typescript },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Framer Motion", icon: framermotion },
        { name: "React", icon: react },
      ],
      features: [
        "Image upload, cropping, and transformation with Cloudinary",
        "AI-based style and filter presets",
        "Live image generation previews",
        "Clean UI with responsive design",
        "Fast, API-driven performance optimized for modern browsers"
      ],
      image: HeyDropImage, // Replace this with your imported image reference
      accentColor: "bg-orange-500",
      bgGradient: "bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]"
    },
    {
      id: 4,
      link: "https://project-nine-weld.vercel.app/",
      title: "My Movie List",
      tagline: "Streamlined movie discovery — browse, search, and explore films with ease.",
      description: " A sleek TMDB-powered movie platform that showcases trending films with detailed data, search functionality, and smooth transitions for a fluid user experience.Built with modern frontend tools, it's fully responsive and optimized for performance..",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "TypeScript", icon: typescript },

      ],
      features: [
        "Discover trending movies instantly",
        "View trailers, ratings, and summaries",
        "Real-time search with suggestions",
        "Fully responsive modern UI",
        "Designed UI prototypes using Figma before development"
      ],
      image: DealsOfAgroImage,
      accentColor: "bg-green-600",
      bgGradient: "from-green-700 to-lime-600"
    }

  ];

  // Toggle mobile expanded project view
  const toggleExpandedMobile = (index) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  // Handle scroll events to update active project based on visibility
  useEffect(() => {
    const handleScroll = () => {
      // Calculate which project is most visible in the viewport
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestProject = 0;
      let closestDistance = Number.MAX_VALUE;

      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const rect = projectRef.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(projectCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestProject = index;
        }
      });

      // Update active project for the right panel display
      if (closestProject !== activeProject) {
        setActiveProject(closestProject);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeProject]);

  return (
    <div
      ref={componentRef}
      className="pt-20 md:pt-32 w-full"
    >
      <div className="pt-5 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
          >
            Code Meets Creativity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="">Crafted </span>
            <span className="bg-clip-text text-blue-600">Projects</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row">
            {/* Left side - smoothly scrollable projects */}
            <div className="w-full md:w-1/2">
              {/* Mobile Project Cards */}
              <div className="md:hidden space-y-8 my-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-50px" }}
                  >
                    <div className={`bg-gradient-to-b ${project.bgGradient} rounded-xl`}>
                      {/* Project Image */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm  mb-3">{project.tagline}</p>

                        {/* Tech Stack - Mobile */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <div
                              key={i}
                              className="rounded-full py-1 px-2 flex items-center gap-1 border border-gray-700 bg-black/30"
                            >
                              <span className="w-3 h-3 flex items-center justify-center">
                                <img src={tech.icon} alt={tech.name} />
                              </span>
                              <span className="text-xs font-medium">{tech.name}</span>
                            </div>
                          ))}
                          {project.techStack.length > 4 && (
                            <div className="rounded-full py-1 px-2 flex items-center border border-gray-700 bg-black/30">
                              <span className="text-xs font-medium">+{project.techStack.length - 4}</span>
                            </div>
                          )}
                        </div>

                        {/* Expandable Section */}
                        <div className="mt-2">
                          <button
                            onClick={() => toggleExpandedMobile(index)}
                            className="flex items-center text-xs  font-medium"
                          >
                            {expandedMobile === index ? "Show less" : "Show more"}
                            {expandedMobile === index ? (
                              <ChevronUp className="w-4 h-4 ml-1" />
                            ) : (
                              <ChevronDown className="w-4 h-4 ml-1" />
                            )}
                          </button>

                          {/* Expanded Content */}
                          {expandedMobile === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-3"
                            >
                              <p className="text-xs ">{project.description}</p>

                              <div className="space-y-2">
                                <h4 className="text-sm font-medium ">Key Features:</h4>
                                {project.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <span className={`${project.accentColor.replace('bg-', 'text-')} text-xs mt-1`}>•</span>
                                    <p className="text-xs">{feature}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Link Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 flex justify-center items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm w-full py-2 text-sm font-medium transition-colors"
                        >
                          View Project <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Project Cards */}
              <div className="hidden md:block">
                {projects.map((project, index) => {
                  const isHovered = hoveredProject === index;

                  return (
                    <div
                      key={project.id}
                      ref={el => {
                        projectRefs.current[index] = el;
                      }}
                      className="py-24 flex items-center relative"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <a href={`${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                          className="w-full cursor-pointer"
                        >
                          <div className={`bg-gradient-to-b ${project.bgGradient} overflow-hidden rounded-3xl px-8 pt-10 flex flex-col`}>
                            <div className=" flex flex-row text-2xl font-bold mb-6">
                              {project.tagline}

                              <div
                                className="ml-auto flex items-center justify-center">
                                <motion.div
                                  className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm  text-sm font-medium px-6 py-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: isHovered ? 1 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ArrowRight className="w-5 h-5" />
                                </motion.div>
                              </div>
                            </div>

                            <div className={`relative h-80 w-full overflow-hidden transition-transform duration-300 rounded-xl mt-4 group ${isHovered ? 'scale-110 -rotate-5' : 'scale-100'} `}>
                              <img
                                src={project.image}
                                alt={project.title}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side - fixed content for desktop only */}
            <div className="hidden md:block md:w-1/2 sticky top-0 h-screen items-center">
              <div className="h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 h-full flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-1 w-10 ${projects[activeProject].accentColor}`}></div>
                      <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                    </div>
                    <p className=" mb-6">{projects[activeProject].description}</p>

                    <div className="space-y-4">
                      {projects[activeProject].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`${projects[activeProject].accentColor.replace('bg-', 'text-')} mt-1`}>+</span>
                          <p>{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].techStack.slice(0, 12).map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className={`rounded-full py-1 px-2 flex items-center gap-2 border border-gray-700`}
                          >
                            <span className="w-5 h-5 flex items-center justify-center">
                              <img src={tech.icon} alt={tech.name} />
                            </span>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}