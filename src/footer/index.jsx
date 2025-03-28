import React from "react";
import GetContact from "./GetContact";
import Marquee from "./Marquee";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 md:mt-40 lg:mt-28">
      <Marquee />
      <GetContact />
    </div>
  );
};

export default Contact;
