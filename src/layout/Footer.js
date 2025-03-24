import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Clamp from "@/components/Clamp";

const Footer = () => {
  const locationAccess = localStorage.getItem("location", location);

  return (
    <div className="text-white flex flex-col bg-gray-800">
      <div
        className="flex flex-col md:flex-row items-start gap-3 justify-around
      mt-[50px] margin-x pb-[20px] border-b-[2px] border-gray-500"
        style={{ marginLeft: Clamp(1, 15), marginRight: Clamp(1, 15) }}
      >
        <div className="flex flex-col gap-10">
          <img src="/images/logo-nobg.png" alt="" className="w-[250px]" />
          <h1
            className="text-[20px] font-semibold"
            style={{ fontSize: Clamp(0.75, 1.25) }}
          >
            ADDRESS <br />
            {locationAccess === "Whitby" ? (
              <span className="font-normal">
                1916 Dundas St E Unit 6
                <br />
                Whitby, ON L1N 2L6
              </span>
            ) : (
              <span className="font-normal">
                991 Taunton Rd E B3, Oshawa,
                <br />
                ON L1K 0Z7, Canada
              </span>
            )}
          </h1>
        </div>
        <div className="flex gap-7 flex-col pl-0 xl:pl-[50px]">
          <h1 className="font-medium" style={{ fontSize: Clamp(1.5, 2.5) }}>
            Contact Us
          </h1>
          <ul
            className="gap-4 hidden xl:flex"
            style={{ fontSize: Clamp(0.75, 1.5) }}
          >
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
          <ul style={{ fontSize: Clamp(0.75, 1.25) }}>
            <li>
              <span className=" font-semibold">CALL US:</span>
              {locationAccess === "Whitby" ? (
                <Link href="tel:+19054341662" className="hover:text-red-600">
                  +1 905-434-1662
                </Link>
              ) : (
                <Link href="tel:+19053678510" className="hover:text-red-600">
                  +1 905-367-8510
                </Link>
              )}
            </li>
            {locationAccess === "Whitby" ? (
              <li>
                FAX US: <span className="font-semibold">+1 905-747-0999</span>
              </li>
            ) : (
              <li>
                FAX US: <span className="font-semibold">289-764-1231</span>
              </li>
            )}

            <li className="font-semibold">
              <span>EMAIL US:</span>
              {locationAccess === "Whitby" ? (
                <Link
                  href="mailto:info@valleyviewmedical.ca"
                  className="hover:text-red-600"
                >
                  info@valleyviewmedical.ca
                </Link>
              ) : (
                <Link
                  href="mailto:info@valleyviewmedical.ca"
                  className="hover:text-red-600"
                >
                  valleyviewharmony@gmail.com
                </Link>
              )}
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
              <Link href="/service-fee">Uninsured Service Fee</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/policy/clinic-policies">Clinic Policies</Link>
            </li>
            {locationAccess === "Whitby" && (
              <li className="hover:text-red-600">
                <Link href="/policy/prescription-renewal-policy">
                  Prescription Renewals
                </Link>
              </li>
            )}
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
        className="bg-gray-800 text-white text-center px-[15px] sm:px-[60px] md:px-[120px] 
        xl:px-[200px] 2xl:px-[250px] py-[40px] flex flex-col items-center gap-4 "
        style={{ fontSize: Clamp(0.75, 1.25) }}
      >
        <p>
          © 2024 Valleyview Medical Centre | Powered by{" "}
          <Link href="https://www.Vtechedge.com" className="hover:text-red-600">
            VTECH Edge
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
