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
        className="min-w-[300px] w-[31%] p-4 bg-white text-center flex flex-col h-[450px] "
      >
        <img
          src={item.image || "/default-image.jpg"} // use a default image if no image is provided
          alt={item.name}
          className="w-[100%] h-[370px] object-cover rounded-lg overflow-hidden"
        />
        <div className="flex flex-col gap-2 pt-3">
          <h3 className="text-[14px] font-normal">{item.title}</h3>
          <p className="text-blue-600 font-bold text-[24px]">{item.name}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="padding-x py-[50px] flex flex-col items-center">
      <div className="text-center mb-8">
        <p style={{ fontSize: Clamp(1, 1.5) }}>
          Your health connected with care!
        </p>
        <h1
          className="font-bold text-blue-600"
          style={{ fontSize: Clamp(1.5, 2.5) }}
        >
          Our Health Care Specialists
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("doctors")}
          className={`px-6 py-2 ${
            activeTab === "doctors"
              ? "border-b-[1px] border-b-blue-600 text-black"
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
              ? "border-b-[1px] border-b-blue-600 text-black"
              : "text-gray-500"
          }`}
          style={{ fontSize: Clamp(1, 1.5) }}
        >
          Pharmacists
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 w-full xl:w-[70%]">
        {activeTab === "doctors"
          ? renderData("doctors")
          : renderData("pharmacists")}
      </div>
    </div>
  );
};

export default Specialist;
