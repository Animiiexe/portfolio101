import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Skills from "./skills";
import Header from "./Header";
import Experience from "./Experience";
import Work from "./Work";
import Navbar from "./Navbar";
import Contact from "./footer";
import AnimatedBackground from "./AnimatedBackground";
import Loader from "./Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Match this with your loader animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full bg-background"
      >
        {!isLoading && (
          <div className="w-full">
            <AnimatedBackground />
            <Navbar />
            <section id="about">
              <Header />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="work">
              <Work />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default App;