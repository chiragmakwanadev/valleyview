import Link from "next/link";
import React, { useEffect, useState } from "react";
import Clamp from "../Clamp";
import { DiCssdeck } from "react-icons/di";
import { GoDotFill } from "react-icons/go";
import { LiaDotCircleSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";

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

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    if (isOpen && !e.target.closest(".modal-box")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);

    if (isOpen) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  return (
    <div className="w-full relative">
      <img
        src="/images/landing3.jpg"
        alt=""
        className="w-full object-cover h-[50vh] xl:h-[92vh]"
      />
      <div className="absolute bottom-[18%] left-[50px] flex flex-col justify-center text-white gap-5">
        <div className="flex items-center gap-4">
          <p className="flex items-center text-[20px] gap-3">
            <DiCssdeck size={30} />
            Consult top doctors anytime, from any location.
          </p>
          <div className="relative">
            <div
              className="flex items-center gap-2 border-white border-[1px] px-3 py-1 rounded-full cursor-pointer modal-box"
              style={{
                backgroundColor: isOpen ? "white" : "transparent",
                color: isOpen ? "black" : "white",
                transition: "0.2s ease-in-out",
              }}
              onClick={HandleOpen}
            >
              <h1>Select City</h1>
              <IoIosArrowUp
                className={`${isOpen ? "rotate-90" : "rotate-0"} duration-500`}
              />
            </div>
            {isOpen && (
              <ul className="absolute bottom-[50px] bg-white text-black w-[200px] rounded-xl overflow-hidden shadow-lg modal-box">
                <li className="border-b-[1px] border-black hover:bg-black hover:text-white cursor-pointer text-center">
                  Toronto
                </li>
                <li className="border-b-[1px] border-black hover:bg-black hover:text-white cursor-pointer text-center">
                  Vancouver
                </li>
                <li className="border-b-[1px] border-black hover:bg-black hover:text-white cursor-pointer text-center">
                  Montreal
                </li>
                <li className="hover:bg-black hover:text-white cursor-pointer text-center">
                  Calgary
                </li>
              </ul>
            )}
          </div>
        </div>
        <h1
          className={`font-medium`}
          style={{ fontSize: Clamp(2, 4.6), lineHeight: Clamp(2, 4.6) }}
        >
          WELCOME TO VALLEYVIEW <br /> MEDICAL CENTRE
        </h1>
        <p className="text-[24px]" style={{ fontSize: Clamp(1, 1.5) }}>
          Your health connected with care!
        </p>
        <Link
          href="mailto:info@valleyviewmedical.ca"
          className="w-[100px] xl:w-[150px]"
        >
          <button
            className="bg-transparent hover:bg-white px-[10px] xl:px-[20px] py-[5px] xl:py-[8px] text-white hover:text-black  rounded-full
            border-[1px] border-white duration-200 flex items-center gap-2 text-center justify-center w-full"
            style={{ fontSize: Clamp(0.75, 1) }}
          >
            <LiaDotCircleSolid size={20} />
            Email Us
          </button>
        </Link>
      </div>
      <div className="absolute bottom-[-70px] right-[12.5%] left-[12.5%] bg-white p-[30px] rounded-[10px] shadow-xl">
        <div className="flex flex-col">
          <h1
            className="font-medium text-black text-center"
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            EAST WHITBY IDA PHARMACY
          </h1>
        </div>
        <div className="flex pt-[20px] gap-3 xl:gap-2 w-full justify-center">
          <div
            className={`flex flex-row flex-wrap gap-2 font-medium items-center justify-center`}
            style={{ fontSize: Clamp(0.75, 1) }}
          >
            {linkData.map(({ href, text }, index) => (
              <Link key={index} href={href}>
                <h1
                  className="bg-transparent border-black hover:bg-black px-[22px] py-[8px] text-black hover:text-white w-full text-center rounded-full
            border-[1px] duration-200 flex items-center gap-2"
                >
                  <GoDotFill />
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
