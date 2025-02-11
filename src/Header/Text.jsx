

const Text = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="text-4xl font-bold sm:text-5xl leading-tight">Hi, <span className="text-customBlue">I'm Animesh</span></div>

      <div className="pt-4 tracking-wide ">
      <p>Passionate software developer with a Master’s in Computer Science and a certified MERN stack expertise. Skilled in building dynamic, user-centric applications using <span className="font-bold">ReactJS, NodeJS, ExpressJS, and MongoDB.</span>  I thrive in collaborative environments, love problem-solving, and take pride in writing clean, scalable code. Seeking exciting opportunities to create impactful solutions while continuously learning and growing. Let’s connect and build something amazing!
      </p>
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
