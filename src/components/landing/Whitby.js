import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { montserrat } from "@/pages";
import Link from "next/link";
import Clamp from "../Clamp";

const Whitby = () => {
  return (
    <div className="padding-x py-[50px]">
      <div className="flex flex-col items-center">
        <img
          src="/images/ida.png"
          alt=""
          className="w-[100px] md:w-[150px] h-[100px] object-cover"
        />
        <h1
          className="text-[36px] font-bold text-gray-700 text-center"
          style={{ fontSize: Clamp(1.5, 2.25) }}
        >
          EAST WHITBY IDA PHARMACY
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row pt-[50px] gap-8 xl:gap-2">
        <img src="/images/whitby.jpg" alt="" className="w-full xl:w-[50%]" />
        <div
          className={`w-full xl:w-[50%] flex flex-col gap-4 pl-0 xl:pl-[40px] ${montserrat.className} font-medium`}
          style={{ fontSize: Clamp(1, 1.5) }}
        >
          <Link href="https://www.bookmyrefill.com/new/9054351100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>New Prescription</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
          <Link href="https://www.bookmyrefill.com/refill/9054351100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>Refill Prescription</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
          <Link href="https://www.bookmypharmacy.com/transfer/9054351100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>Transfer Prescription</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
          <Link href="https://www.bookmyshot.com/flu/9054351100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>Book Flu Shot</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
          <Link href="https://www.bookmypharmacy.com/minorailment/9054351100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>Minor Ailments</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
          <Link href="https://www.bookmyshot.com/(905)435-1100">
            <div className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500 cursor-pointer">
              <h1>Visit Website</h1>
              <IoIosArrowRoundForward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Whitby;
