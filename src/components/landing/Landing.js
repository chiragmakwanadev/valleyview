import Link from "next/link";
import React, { useEffect, useState } from "react";
import Clamp from "../Clamp";
import { DiCssdeck } from "react-icons/di";
import { GoDotFill } from "react-icons/go";
import { LiaDotCircleSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";

const linkData = [
  {
    href: "https://www.bookmyrefill.com/new/9054351100",
    text: "New Prescription",
  },
  {
    href: "https://www.bookmyrefill.com/refill/9054351100",
    text: "Refill Prescription",
  },
  {
    href: "https://www.bookmypharmacy.com/transfer/9054351100",
    text: "Transfer Prescription",
  },
  {
    href: "https://www.bookmyshot.com/flu/9054351100",
    text: "Book Flu Shot",
  },
  {
    href: "https://www.bookmypharmacy.com/minorailment/9054351100",
    text: "Minor Ailments",
  },
  {
    href: "https://www.bookmyshot.com/(905)435-1100",
    text: "Visit Website",
  },
];

const cityOptions = [
  { name: "Whitby", display: "(Dundas)" },
  { name: "Oshawa", display: "(Harmony)" },
];

const Landing = ({ location }) => {
  const [activeCity, setActiveCity] = useState("Whitby");
  const router = useRouter();

  const handleCityChange = (city) => {
    localStorage.setItem("location", city);
    setActiveCity(city);
    router.push({
      pathname: router.pathname,
      query: { location: city },
    });
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("location");
    setActiveCity(savedCity);
  }, []);

  return (
    <div className="w-full relative">
      {activeCity === "Whitby" ? (
        <img
          src="/images/landing3.jpg"
          alt=""
          className="w-full object-cover h-[92vh]"
        />
      ) : (
        <img
          src="/images/landing.jpeg"
          alt=""
          className="w-full object-cover h-[92vh]"
        />
      )}
      <div className="absolute bottom-[45%] md:bottom-[30%] xl:bottom-[22%] left-[20px] xl:left-[50px] flex flex-col justify-center text-white gap-5">
        <div className="flex flex-col gap-6 xl:gap-4">
          <p className="flex items-center  text-[16px] xl:text-[20px] gap-3">
            <DiCssdeck size={30} />
            Consult top doctors in Durham Region.
          </p>
        </div>
        <h1
          className={`font-semibold`}
          style={{ fontSize: Clamp(2.4, 4.6), lineHeight: Clamp(2.5, 4.6) }}
        >
          WELCOME TO VALLEYVIEW <br /> MEDICAL CENTRE ({activeCity})
        </h1>
        <p className="text-[24px]" style={{ fontSize: Clamp(1, 1.5) }}>
          Your health connected with care!
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full">
          {cityOptions.map(({ name, display }) => (
            <button
              key={name}
              onClick={() => handleCityChange(name)}
              className={`py-[5px] rounded-full border-[1px] text-[18px] 
                ${activeCity === name ? "bg-white text-black" : "bg-transparent text-white hover:bg-white hover:text-black"} 
                border-white duration-200 flex flex-col items-center justify-center w-[200px]`}
            >
              <h2>{name}</h2>
              <h6 className="text-[14px]">{display}</h6>
            </button>
          ))}
        </div>
      </div>
      <div className="xl:absolute bottom-[-120px] xl:bottom-[-70px] right-0 xl:right-[7%] left-0 xl:left-[7%] bg-white p-[30px] rounded-none xl:rounded-[10px] shadow-xl">
        <div className="flex flex-col">
          <h1
            className="font-medium text-black text-center"
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            EAST <span className="uppercase">{activeCity}</span> IDA PHARMACY
          </h1>
        </div>
        <div className="flex pt-[20px] gap-3 xl:gap-2 w-full justify-center">
          <div
            className={`flex flex-row flex-wrap gap-2 font-medium items-center justify-center`}
            style={{ fontSize: Clamp(0.75, 1) }}
          >
            {linkData.map(({ href, text }, index) => (
              <Link
                key={index}
                href={href}
                className="flex items-center justify-center text-center w-full md:w-auto"
              >
                <h1
                  className="bg-red-700 border-transparent hover:bg-red-600
              px-[20px] py-[10px] text-white hover:text-white rounded-full
              border-[1px] duration-200 
              gap-2 text-[16px] w-full md:w-auto"
                >
                  {text}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
