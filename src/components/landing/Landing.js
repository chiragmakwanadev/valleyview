import React from "react";

const Landing = () => {
  return (
    <div className="w-full relative pt-[120px]">
      <img
        src="/images/landing.jpg"
        alt=""
        className="w-full object-cover h-[85vh]"
      />
      <div className="absolute flex flex-col top-[27%] right-[31%] text-white text-center items-center gap-5">
        <h1 className="text-[75px] font-bold leading-[90px]">
          WELCOME TO <br />
          VALLEYVIEW <br /> MEDICAL CENTRE
        </h1>
        <p className="text-[24px]">Your health connected with care!</p>
        <button className="bg-white px-[20px] py-[8px] text-black w-[150px] rounded-md">
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Landing;
