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
          Get in{" "}
          <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
            Touch
          </span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <ContactForm />
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
        {/* Contact Details */}


        {/* Social Links + Spotify */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600">You may also find me on:</p>
            <div className="flex justify-center md:justify-start gap-5 pt-5">
              <a
                href="https://github.com/Animiiexe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://discord.com/users/lordxoxo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={discord}
                  alt="Discord"
                  className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/animesh-sawant-4b6a4a265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://x.com/ANIMESHSAWANT1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Spotify Embed */}
          <div className="w-full max-w-sm">
            <iframe
              src="https://open.spotify.com/embed/playlist/1yc74n9S2bqeoaooQUjP4q?utm_source=generator&theme=0&locale=en_US"
              className="w-full h-40 rounded-md shadow-md"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
              title="Spotify Playlist"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-20 text-sm text-gray-500">
        <p>
          {new Date().getFullYear()} | Designed and Coded with ❤ by Animesh.
        </p>
      </div>
    </div>
  );
};

export default GetContact;
