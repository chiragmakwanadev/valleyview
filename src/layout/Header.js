import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PolicyData } from "@/static/PolicyData";
import { Data as StaffData } from "@/static/StaffData";
import Clamp from "@/components/Clamp";
import HamburgerMenu from "@/components/Hamburger";

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
      className={`bg-white text-black flex items-center justify-between px-5 py-2 w-auto z-50 rounded-2xl shadow-xl`}
      style={{
        position: "fixed",
        left: "20px",
        top: "20px",
        right: "20px !important",
      }}
    >
      <div className="flex gap-3 items-center w-[22%]">
        <Link href="/">
          <img src="/images/logo.png" alt="logo" className="w-[50px]" />
        </Link>
      </div>
      <div className="flex xl:hidden">
        <HamburgerMenu />
      </div>
      <ul className="hidden xl:flex gap-1 2xl:gap-7 font-medium text-[12px] 2xl:text-[16px]">
        <li
          className="group relative py-[5px] cursor-pointer duration-300"
          onMouseEnter={handleStaffMouseEnter}
          onMouseLeave={handleStaffMouseLeave}
        >
          <Link href="/staff">OUR STAFF</Link>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
          {isStaffHovering && (
            <div className="absolute left-0 top-[100%] backdrop-blur-xl bg-black/70 text-white shadow-lg rounded-md mt-2 w-[200px] z-10 overflow-hidden">
              <ul className="space-y-2">
                {doctors.map((doctor) => (
                  <li
                    key={doctor.slug}
                    className="hover:text-black hover:bg-white  px-4 py-2"
                  >
                    <Link href={`/staff/${doctor.slug}`}>{doctor.name}</Link>
                  </li>
                ))}
                {pharmacists.map((pharmacist) => (
                  <li
                    key={pharmacist.slug}
                    className="hover:text-black hover:bg-white  px-4 py-2"
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
          className="group relative py-[5px] cursor-pointer duration-300"
          onMouseEnter={handlePolicyMouseEnter}
          onMouseLeave={handlePolicyMouseLeave}
        >
          <Link href="/policy/clinic-policies">CLINIC POLICIES</Link>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
          {isPolicyHovering && (
            <div className="absolute left-0 top-[100%] backdrop-blur-xl bg-black/70 overflow-hidden text-white shadow-lg rounded-md mt-2 w-[200px] z-10">
              <ul className="space-y-2">
                {policyTopics.map((topic) => (
                  <li
                    key={topic}
                    className="hover:text-black hover:bg-white  px-4 py-2"
                  >
                    <Link href={`/policy/${PolicyData[topic][0].slug}`}>
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li className="group relative py-[5px] cursor-pointer duration-300">
          <Link href="/news">NEWS</Link>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
        </li>

        <li className="group relative py-[5px] cursor-pointer duration-300">
          <Link href="/contact">CONTACT US</Link>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
        </li>

        <li className="group relative py-[5px] cursor-pointer duration-300">
          <Link href="/news/4">BECOME A PATIENT</Link>
          <span className="absolute bottom-[5px] left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li
          className="group relative px-[20px] py-[5px] bg-transparent border-black border-[1px] hover:bg-black
         hover:text-white cursor-pointer duration-300 rounded-full"
        >
          <Link href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=04f9eeaf-8434-4153-aa26-2d0c910f4020#/online-booking">
            BOOK APPOINTMENT
          </Link>
        </li>

        <li
          className="group relative px-[20px] py-[5px] bg-transparent border-black border-[1px] hover:bg-black
         hover:text-white cursor-pointer duration-300 rounded-full"
        >
          <Link href="https://www.bookmyshot.com/9054351100">PHARMACY</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
