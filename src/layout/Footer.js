import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-blue-600 flex flex-col">
      <div className="border-t-[4px] border-blue-600 flex items-start pt-[50px] mt-[80px] mx-[250px]">
        <img src="/images/logo.png" alt="" className="w-[300px]" />
        <div className="flex gap-2 flex-col pl-[50px]">
          <h1 className="text-[40px] font-semibold">Location</h1>
          <h1 className="text-[20px] font-semibold">
            ADDRESS <br />
            1916 Dundas St E Unit 6
            <br />
            Whitby, ON L1N 2L6
          </h1>
          <ul>
            <li className="text-[20px]">
              <span className=" font-semibold">CALL US:</span>{" "}
              <Link href="" className="hover:text-red-600">
                +1 905-434-1662
              </Link>
            </li>
            <li className="text-[20px]">
              FAX US: <span className="font-semibold">+1 905-747-0999</span>
            </li>
            <li className="text-[20px] font-semibold">
              <span>EMAIL US:</span>{" "}
              <Link href="" className="hover:text-red-600">
                info@valleyviewmedical.ca
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 pl-[50px]">
          <h1 className="text-[40px] font-semibold">Information</h1>
          <ul className="text-[18px]">
            <li className="hover:text-red-600">
              <Link href="">Clinic Policies</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="">Prescription Renewals</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="">Patient Responsibilites</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="">Patient Rights</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="">Test Result Notifications</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="">Health Card Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-600 text-white px-[250px] py-[40px] flex flex-col items-center gap-4">
        <p>
          © 2024 Valleyview Medical Centre | Powered by{" "}
          <Link
            href="https://www.tallshipsmedia.com"
            className="hover:text-red-600"
          >
            Tallships Media
          </Link>
        </p>
        <ul className="flex gap-4 text-[16px]">
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
    </div>
  );
};

export default Footer;
