import React, { useState } from "react";
import { Data } from "@/static/StaffData";
import Link from "next/link";
import Clamp from "../Clamp";

const Specialist = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const renderData = (category) => {
    return Data[0][category].map((item, index) => (
      <Link
        key={index}
        href={`/staff/${item.slug}`}
        className="min-w-[250px] md:min-w-[300px] w-full sm:w-[31%] p-6 bg-[#f2f0f0] rounded-xl flex flex-col shadow-xl "
      >
        <img
          src={item.image || "/default-image.jpg"} // use a default image if no image is provided
          alt={item.name}
          className="w-[120px] h-[120px] object-cover rounded-full overflow-hidden"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pt-3">
            <p className="text-[12px] font-normal bg-white px-2 py-1 rounded-full w-[120px] text-center">
              {item.title}
            </p>
            <h1 className="text-[16px] font-medium break-words overflow-hidden text-ellipsis text-blue-600">
              {item.name}
            </h1>
          </div>
          <div>
            {item.description
              .split(/\n\s*\n/) // Splits paragraphs by double line breaks with optional spaces/tabs
              .slice(0, 1) // First two paragraphs
              .map((paragraph, index) => (
                <p key={index} className="mb-3 text-[14px]">
                  {paragraph.trim()} {/* Removes extra spaces */}
                </p>
              ))}
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="padding-x py-[50px] flex flex-col">
      <div className="text-center mb-8 flex flex-col items-center">
        <p className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-100 px-5 py-2 text-center rounded-3xl">
          Your health connected with care!
        </p>
        <h1
          className="font-bold text-blue-600 pt-[20px]"
          style={{ fontSize: Clamp(1.5, 2.5) }}
        >
          Our Health Care Specialists
        </h1>
      </div>

      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab("doctors")}
          className={`px-6 py-2 ${
            activeTab === "doctors"
              ? "bg-[#f2f0f0] p-10 rounded-xl text-black"
              : "text-gray-500"
          }`}
          style={{ fontSize: Clamp(1, 1.5) }}
        >
          Doctors
        </button>
        <button
          onClick={() => setActiveTab("pharmacists")}
          className={`px-6 py-2 ${
            activeTab === "pharmacists"
              ? "bg-[#f2f0f0] p-10 rounded-xl text-black"
              : "text-gray-500"
          }`}
          style={{ fontSize: Clamp(1, 1.5) }}
        >
          Pharmacists
        </button>
      </div>

      <div className="flex flex-wrap gap-5 w-full">
        {activeTab === "doctors"
          ? renderData("doctors")
          : renderData("pharmacists")}
      </div>
    </div>
  );
};

export default Specialist;
