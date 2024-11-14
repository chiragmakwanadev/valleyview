import Link from "next/link";
import React from "react";
import Clamp from "../Clamp";
const Landing = () => {
  return (
    <div className="w-full relative" style={{ paddingTop: Clamp(3.7, 7.5) }}>
      <img
        src="/images/landing.jpg"
        alt=""
        className="w-full object-cover h-[50vh] xl:h-[85vh]"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-white text-center items-center gap-5">
        <h1
          className="font-bold"
          style={{ fontSize: Clamp(2, 4.6), lineHeight: Clamp(2, 4.6) }}
        >
          WELCOME TO <br />
          VALLEYVIEW <br /> MEDICAL CENTRE
        </h1>
        <p className="text-[24px]" style={{ fontSize: Clamp(1, 1.5) }}>
          Your health connected with care!
        </p>
        <Link href="mailto:info@valleyviewmedical.ca">
          <button
            className="bg-white px-[10px] xl:px-[20px] py-[5px] xl:py-[8px] text-black w-[100px] xl:w-[150px] rounded-md"
            style={{ fontSize: Clamp(0.75, 1) }}
          >
            Email Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
