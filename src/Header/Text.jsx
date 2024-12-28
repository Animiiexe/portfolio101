import React from "react";

const Text = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="text-4xl font-bold">Hi, <span className="text-customBlue">I'm Animesh</span></div>

      <div className="pt-4 tracking-wide ">
      <p>
         A passionate software developer with a
        Master's degree in Computer Science and a strong foundation in building
        dynamic, user-centric applications. I am a certified MERN stack
        developer, proficient in developing full-stack web applications using {" "}
        <span className="font-semibold">ReactJS, NodeJS, ExpressJS and MongoDB</span>I am excited to share my expertise and contribute to the ever-evolving tech industry.
        extraordinary digital experiences that are not only fast and accessible
        but also visually stunning and responsive.</p>
      </div>
      <div className="pt-4 tracking-wide ">
        Currently, I am seeking exciting job opportunities where I can leverage
        my skills to create impactful solutions while continuing to grow and
        learn in the tech industry. I thrive in collaborative environments,
        enjoy problem-solving, and take pride in writing clean, efficient, and
        scalable code. When I’m not coding, I enjoy exploring new technologies,
        contributing to projects, and staying updated with the latest trends in
        the web development world. Let’s connect and build something amazing
        together!
      </div>

      <div className="flex pt-7">
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
        <div className="pl-3 font-semibold">Available for new projects</div>
      </div>
      <div></div>
    </div>
  );
};

export default Text;
