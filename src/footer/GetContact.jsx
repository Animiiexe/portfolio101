import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.jpg";
import discord from "../assets/discord1.png";
import ContactForm from "./Contactform";

const GetContact = () => {
  return (
    <div className="pt-3">
      <div className="items-center flex justify-center font-semibold">
        <h1 className="bg-blue-600 text-white w-[125px] h-[28px] justify-center items-center flex size-3 md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-xl">
          Get In Touch
        </h1>
      </div>

      <div className="text-lg pt-4 md:text-xl mt-14 ">
        <div className="mb-10">
          <p className="flex items-center justify-center text-gray-600 ">
            The What's Next? Feel Free to reach out
          </p>
          <p className="flex items-center justify-center text-gray-600 ">
            to me if you'r looking for a
          </p>
          <p className="flex items-center justify-center text-gray-600 ">
            developer, have a query, or simply want
          </p>
          <p className="flex items-center justify-center text-gray-600 ">
            to connect.
          </p>
        </div>

        <ContactForm />

        <div className="pt-10 flex items-center justify-center gap-3  md:text-3xl">
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
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <p className=" font-semibold">animesh2325@gmail.com</p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3  md:text-3xl">
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

          <p className=" font-semibold">+91 9009009000</p>
        </div>

        <div>
          <p className="flex items-center justify-center pt-10">
            You may also find me on this platforms.
          </p>
          <div className="flex w-full items-center justify-center gap-5 pt-5">
            <div>
              <a href="https://github.com/Animiiexe" target="_blank">
                <img
                  src={github}
                  alt="GitHub Logo"
                  className="w-[px50] h-[50px]"
                />
              </a>
            </div>
            <div>
              <a href="https://discord.com/users/lordxoxo" target="_blank">
                <img
                  src={discord}
                  alt="GitHub Logo"
                  className="w-[px50] h-[50px]"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/animesh-sawant-4b6a4a265/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="GitHub Logo"
                  className="w-[px50] h-[50px]"
                />
              </a>
            </div>

            <div>
              <a href="https://x.com/ANIMESHSAWANT1" target="_blank">
                <img
                  src={twitter}
                  alt="GitHub Logo"
                  className="w-[px50] h-[50px]"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-36 gap-4 text-sm p-3">
            <h1 className="text-gray-500">
              2025 | Designed and Coded with ❤ by Animesh..
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetContact;
