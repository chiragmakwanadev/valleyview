import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Clamp from "@/components/Clamp";

const Footer = () => {
  return (
    <div className="text-blue-600 flex flex-col">
      <div
        className="border-t-[4px] border-blue-600 flex flex-col md:flex-row items-start gap-3 justify-around py-[50px] 
      mt-[80px] mx-[15px] sm:mx-[60px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[250px]"
        style={{ marginLeft: Clamp(1, 15), marginRight: Clamp(1, 15) }}
      >
        <img src="/images/logo.png" alt="" style={{ width: Clamp(10, 18) }} />
        <div className="flex gap-2 flex-col pl-0 xl:pl-[50px]">
          <h1 className="font-semibold" style={{ fontSize: Clamp(1.5, 2.5) }}>
            Location
          </h1>
          <h1
            className="text-[20px] font-semibold"
            style={{ fontSize: Clamp(0.75, 1.25) }}
          >
            ADDRESS <br />
            <span className="font-normal">
              1916 Dundas St E Unit 6
              <br />
              Whitby, ON L1N 2L6
            </span>
          </h1>
          <ul style={{ fontSize: Clamp(0.75, 1.25) }}>
            <li>
              <span className=" font-semibold">CALL US:</span>
              <Link href="" className="hover:text-red-600">
                +1 905-434-1662
              </Link>
            </li>
            <li>
              FAX US: <span className="font-semibold">+1 905-747-0999</span>
            </li>
            <li className="font-semibold">
              <span>EMAIL US:</span>
              <Link href="" className="hover:text-red-600">
                info@valleyviewmedical.ca
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4  pl-0 xl:pl-[50px]">
          <h1
            className="text-[40px] font-semibold"
            style={{ fontSize: Clamp(1.5, 2.5) }}
          >
            Information
          </h1>
          <ul style={{ fontSize: Clamp(0.75, 1.25) }}>
            <li className="hover:text-red-600">
              <Link href="/policy/clinic-policies">Clinic Policies</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/prescription-renewal-policy">
                Prescription Renewals
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/patient-responsibility">
                Patient Responsibilites
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/patient-rights">Patient Rights</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/test-results-notification">
                Test Result Notifications
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/health-card-policy">Health Card Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-blue-600 text-white text-center px-[15px] sm:px-[60px] md:px-[120px] xl:px-[200px] 2xl:px-[250px] py-[40px] flex flex-col items-center gap-4"
        style={{ fontSize: Clamp(0.75, 1.25) }}
      >
        <p>
          © 2024 Valleyview Medical Centre | Powered by{" "}
          <Link
            href="https://www.tallshipsmedia.com"
            className="hover:text-red-600"
          >
            Tallships Media
          </Link>
        </p>
        <ul className="flex gap-4">
          <li>
            <Link href="https://x.com/vmcwhitby">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/profile.php?id=100094622814558">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/valleyviewmedical/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
