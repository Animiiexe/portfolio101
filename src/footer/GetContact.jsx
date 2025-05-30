import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.jpg";
import discord from "../assets/discord1.png";
import ContactForm from "./Contactform";

const GetContact = () => {
  return (
    <div className="pt-10">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center font-sans">
        <h2 className="text-4xl md:text-5xl font-bold mt-20 mb-4 text-center">
          Get in{" "}<span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
      </div>
      {/* Contact Form */}
      <div className="mt-10">
        <ContactForm />
      </div>

      {/* Contact Details */}
      <div className="pt-10 flex flex-col items-center space-y-3 md:text-3xl">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p className="font-semibold">animesh2325@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <p className="font-semibold">+91 9009009000</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mt-10">
        <p className="text-gray-600">You may also find me on these platforms:</p>
        <div className="flex justify-center gap-5 pt-5">
          <a href="https://github.com/Animiiexe" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-[50px] h-[50px] hover:scale-110 transition-transform" />
          </a>
          <a href="https://discord.com/users/lordxoxo" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="Discord" className="w-[50px] h-[50px] hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/animesh-sawant-4b6a4a265/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-[50px] h-[50px] hover:scale-110 transition-transform" />
          </a>
          <a href="https://x.com/ANIMESHSAWANT1" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-[50px] h-[50px] hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-20 text-sm text-gray-500">
        <p>{new Date().getFullYear()} | Designed and Coded with ❤ by Animesh.</p>
      </div>
    </div>
  );
};

export default GetContact;
