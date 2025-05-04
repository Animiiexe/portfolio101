import React from "react";

import Profile from "./Profile";

const Header = () => {
  return (
    <div className="w-full flex justify-center  flex-col md:flex-row md:pl-32 md:pr-32 mb-10">
     <Profile />
    </div>
  );
};

export default Header;