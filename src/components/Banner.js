import Link from "next/link";
import React from "react";
import Clamp from "./Clamp";

const Banner = ({
  subtitle,
  backgroundImage = "/images/banner-bg.jpeg",
  buttonText,
}) => {
  return (
    <div className="relative w-full" style={{ height: Clamp(22, 35) }}>
      <img
        src={backgroundImage}
        alt="Banner Background"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-10"></div>
      {/* 
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path d="M0,0 C720,100 720,0 1440,0 V100 H0 Z" fill="white" />
        </svg>
      </div> */}

      <div className="absolute top-[20%] inset-0 flex flex-col items-center justify-center text-center text-black px-4 border-none">
        <h1 className="text-[18px] font-normal mb-2 bg-white px-5 py-2 rounded-full">
          Your health connected with care!
        </h1>
        <p className="font-bold mb-2" style={{ fontSize: Clamp(1.4, 3) }}>
          {subtitle}
        </p>
        <Link
          href="mailto:info@valleyviewmedical.ca"
          className="px-3 md:px-6 py-1 md:py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition duration-300 text-[14px]"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
