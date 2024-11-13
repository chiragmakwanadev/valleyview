import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full relative pt-[120px]">
      <img
        src="/images/landing.jpg"
        alt=""
        className="w-full object-cover h-[85vh]"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-white text-center items-center gap-5">
        <h1 className="text-[75px] font-bold leading-[90px]">
          WELCOME TO <br />
          VALLEYVIEW <br /> MEDICAL CENTRE
        </h1>
        <p className="text-[24px]">Your health connected with care!</p>
        <Link href="mailto:info@valleyviewmedical.ca">
          <button className="bg-white px-[20px] py-[8px] text-black w-[150px] rounded-md">
            Email Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
