import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { montserrat } from "@/pages";

const Whitby = () => {
  return (
    <div className="px-[250px] py-[50px]">
      <div className="flex flex-col items-center">
        <img
          src="/images/ida.png"
          alt=""
          className="w-[150px] h-[100px] object-cover"
        />
        <h1 className="text-[36px] font-bold text-gray-700">
          EAST WHITBY IDA PHARMACY
        </h1>
      </div>
      <div className="flex pt-[50px]">
        <img src="/images/whitby.jpg" alt="" className="w-[50%]" />
        <ul
          className={`w-[50%] flex flex-col gap-4 pl-[40px] ${montserrat.className} font-medium`}
        >
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">New Prescription</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">Refill Prescription</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">Transfer Prescription</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">Book Flu Shot</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">Minor Ailments</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
          <li className="flex items-center border-b-[1px] border-black pb-4 justify-between px-4 pr-[40px] hover:pr-4 duration-500">
            <h1 className="text-[24px]">Visit Website</h1>
            <IoIosArrowRoundForward size={40} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Whitby;
