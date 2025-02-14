import React from "react";
import Text from "./Text";
import Image from "./Image";

const Header = () => {
  return (
    <div className="w-full flex justify-center pt-20 flex-col md:flex-row md:pl-32 md:pr-32 mb-10">
      <div className="w-full flex items-center justify-center">
        <Image />
      </div>
      <div>
        <Text />
      </div>
    </div>
  );
};

export default Header;