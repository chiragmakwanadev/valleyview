import React from "react";

const Banner = ({
  subtitle,
  backgroundImage = "/images/banner.jpg",
  buttonText,
}) => {
  return (
    <div className="relative w-full h-[450px]">
      <img
        src={backgroundImage}
        alt="Banner Background"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path d="M0,0 C720,100 720,0 1440,0 V100 H0 Z" fill="white" />
        </svg>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[18px] font-normal mb-2">
          Your health connected with care!
        </h1>
        <p className="text-[56px] font-bold mb-2">{subtitle}</p>
        <a
          href="mailto:info@example.com"
          className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
