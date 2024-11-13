import React, { useState } from "react";
import { Data } from "@/static/StaffData";
import Link from "next/link";

const Specialist = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const renderData = (category) => {
    return Data[0][category].map((item, index) => (
      <Link
        key={index}
        href={`/staff/${item.slug}`}
        className="w-[32%] p-4 bg-white text-center flex flex-col justify-between h-[450px]"
      >
        <img
          src={item.image || "/default-image.jpg"} // use a default image if no image is provided
          alt={item.name}
          className="w-[100%] h-[320px] object-cover"
        />
        <div className="flex flex-col gap-2 pt-3">
          <h3 className="text-[14px] font-normal">{item.title}</h3>
          <p className="text-blue-600 font-bold text-[24px]">{item.name}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="px-[250px] py-[50px]">
      <div className="text-center mb-8">
        <p className="text-[24px]">Your health connected with care!</p>
        <h1 className="text-[40px] font-bold text-blue-600">
          Our Health Care Specialists
        </h1>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("doctors")}
          className={`px-6 py-2 text-[24px] ${
            activeTab === "doctors"
              ? "border-b-[1px] border-b-blue-600 text-black"
              : "text-gray-500"
          }`}
        >
          Doctors
        </button>
        <button
          onClick={() => setActiveTab("pharmacists")}
          className={`px-6 py-2 text-[24px] ${
            activeTab === "pharmacists"
              ? "border-b-[1px] border-b-blue-600 text-black"
              : "text-gray-500"
          }`}
        >
          Pharmacists
        </button>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {activeTab === "doctors"
          ? renderData("doctors")
          : renderData("pharmacists")}
      </div>
    </div>
  );
};

export default Specialist;
