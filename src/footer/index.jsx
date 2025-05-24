import React from "react";
import GetContact from "./GetContact";
import Marquee from "./Marquee";

const Contact = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 md:mt-40 lg:mt-28">

<Marquee 
  className="text-center text-4xl tracking-tight font-bold md:text-7xl md:leading-[5.5rem] px-6"
  text={
    <>
      Crafting{' '}
      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)] mx-1 md:mx-2">
        Digital
      </span>{' '}
      Experience 🌏
    </>
  }
  default_velocity={4}  // Slightly slower for better readability
  style={{
    letterSpacing: '-0.025em',  // Slightly tighter tracking
    wordSpacing: '0.25em'       // Added space between words
  }}
/>


      <GetContact />
    </div>
  );
};

export default Contact;
