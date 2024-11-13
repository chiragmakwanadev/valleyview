import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { montserrat } from "@/pages";
import Link from "next/link";

import { PolicyData } from "@/static/PolicyData";
import { Data as StaffData } from "@/static/StaffData";

const Header = () => {
  const [isPolicyHovering, setIsPolicyHovering] = useState(false);
  const [isStaffHovering, setIsStaffHovering] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const policyTopics = Object.keys(PolicyData);
  const doctors = StaffData[0].doctors;
  const pharmacists = StaffData[0].pharmacists;

  const handlePolicyMouseEnter = () => {
    clearHoverTimeout();
    setIsStaffHovering(false);
    setIsPolicyHovering(true);
  };

  const startHoverTimeout = (callback) => {
    const timeout = setTimeout(callback, 800);
    setHoverTimeout(timeout);
  };

  const handlePolicyMouseLeave = () => {
    startHoverTimeout(() => setIsPolicyHovering(false));
  };

  const handleStaffMouseEnter = () => {
    clearHoverTimeout();
    setIsPolicyHovering(false);
    setIsStaffHovering(true);
  };

  const handleStaffMouseLeave = () => {
    startHoverTimeout(() => setIsStaffHovering(false));
  };

  const clearHoverTimeout = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  useEffect(() => {
    return () => clearHoverTimeout();
  }, []);

  return (
    <div
      className={`bg-[#0f68df] text-white flex items-center px-[40px] py-[20px] justify-between fixed w-full z-50  ${montserrat.className}`}
    >
      <div className="flex gap-3 items-center">
        <Link href="/">
          <img src="/images/logo2.jpg" alt="logo" className="h-[80px]" />
        </Link>
      </div>
      <ul className="flex gap-2 font-medium">
        <li
          className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px] relative"
          onMouseEnter={handleStaffMouseEnter}
          onMouseLeave={handleStaffMouseLeave}
        >
          <Link href="/staff">OUR STAFF</Link>
          {isStaffHovering && (
            <div className="absolute left-0 top-[100%] bg-[#0f68df] text-white shadow-lg rounded-md mt-2 w-[200px] z-10">
              <ul className="space-y-2">
                {doctors.map((doctor) => (
                  <li
                    key={doctor.slug}
                    className="hover:text-gray-400 px-4 py-2"
                  >
                    <Link href={`/staff/${doctor.slug}`}>{doctor.name}</Link>
                  </li>
                ))}
                {pharmacists.map((pharmacist) => (
                  <li
                    key={pharmacist.slug}
                    className="hover:text-gray-400 px-4 py-2"
                  >
                    <Link href={`/staff/${pharmacist.slug}`}>
                      Pharmacist {pharmacist.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li
          className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px] relative"
          onMouseEnter={handlePolicyMouseEnter}
          onMouseLeave={handlePolicyMouseLeave}
        >
          <Link href="/policy/">CLINIC POLICIES</Link>
          {isPolicyHovering && (
            <div className="absolute left-0 top-[100%] bg-[#0f68df] text-white shadow-lg rounded-md mt-2 w-[200px] z-10">
              <ul className="space-y-2">
                {policyTopics.map((topic) => (
                  <li key={topic} className="hover:text-gray-400 px-4 py-2">
                    <Link href={`/policy/${PolicyData[topic][0].slug}`}>
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="border border-transparent hover:border-white duration-500 rounded-md px-[15px] py-[5px]">
          <Link href="/news">NEWS</Link>
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
