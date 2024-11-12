import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { montserrat } from "@/pages";

const Header = () => {
  return (
    <div
      className={`bg-[#0f68df] text-white flex items-center px-[40px] py-[20px] justify-between ${montserrat.className}`}
    >
      <div className="flex gap-3 items-center">
        <img src="/images/logo2.jpg" alt="" className=" h-[80px]" />
      </div>
      <ul className="flex gap-2 font-medium">
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          OUR STAFF
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          CLINIC POLICIES
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          NEWS
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          CONTACT US
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          BECOME A PATIENT
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px] bg-red-500">
          BOOK APPOINTMENT
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px] bg-red-500">
          PHARMACY
        </li>
      </ul>
      <ul className="flex gap-4 text-[20px]">
        <li>
          <FaXTwitter />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
};

export default Header;
