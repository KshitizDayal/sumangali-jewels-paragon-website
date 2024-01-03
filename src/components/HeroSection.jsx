import React from "react";
import sjLogo from "../assets/cover2.jpg";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${sjLogo})` }}
      className="h-[85vh] bg-cover bg-left-top relative text-white"
    >
      <div className="bg-black opacity-25 absolute inset-0"></div>
      <div className="h-[80vh] flex flex-col justify-center items-center relative">
        <h1 className="text-center py-3 border font-bold text-3xl absolute top-0 left-0 right-0">
          Sumangali Jewels Paragon
        </h1>

        <h1 className="text-6xl font-bold w-[37rem] text-center pb-5">
          Unleash Your Inner Shine
        </h1>
        <h3 className="text-xl">
          Explore our exquisite selection of fine jewellery
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
