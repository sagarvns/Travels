import React from "react";
import skylineImage from "../../public/images/Banner.png"; 

const SkylineBanner = () => {
  return (
    <div
      className="w-full h-[140px] bg-gray-100 bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${skylineImage})`,
      }}
    />
  );
};

export default SkylineBanner;
