import Banner from "@/components/Banner";
import React, { useState } from "react";
import { Data } from "@/static/StaffData";
import Link from "next/link";
import Clamp from "@/components/Clamp";
import Head from "next/head";

const Index = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const renderData = (category) => {
    const selectedLocation = localStorage.getItem("location") || "Whitby";

    return Data[0][category]
      .filter((item) =>
        selectedLocation === "Oshawa" ? item.oshawa : !item.oshawa
      )
      .map((item, index) => (
        <Link
          href={`/staff/${item.slug}`}
          key={index}
          className="min-w-[250px] w-full sm:w-[22%] text-center flex flex-col h-[400px] rounded-xl"
        >
          <img
            src={item.image || "/images/logo.png"}
            alt={item.name}
            className="w-[100%] h-[300px] object-cover rounded-lg overflow-hidden"
          />
          <div className="flex flex-col gap-2 pt-3">
            <h3 className="text-[14px] font-normal">{item.title}</h3>
            <p
              className="text-blue-600 font-bold"
              style={{ fontSize: Clamp(1, 1.25) }}
            >
              {item.name}
            </p>
          </div>
        </Link>
      ));
  };
  return (
    <>
      <Head>
        <title>
          Whitby Doctors at Valleyview Medical | Vallewview Medical Centre
        </title>
      </Head>
      <Banner subtitle={"Our Health Care Specialists"} buttonText="Email Us" />
      <div className="padding-x py-[50px] flex flex-col bg-[#f2f0f0]">
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("doctors")}
            className={`px-6 py-2 ${
              activeTab === "doctors"
                ? "bg-white p-10 rounded-xl text-black"
                : "text-gray-500"
            }`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Doctors
          </button>
          <button
            onClick={() => setActiveTab("staff")}
            className={`px-6 py-2 ${
              activeTab === "staff"
                ? "bg-white p-10 rounded-xl text-black"
                : "text-gray-500"
            }`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Administrative Team
          </button>
          <button
            onClick={() => setActiveTab("pharmacists")}
            className={`px-6 py-2 ${
              activeTab === "pharmacists"
                ? "bg-white p-10 rounded-xl text-black"
                : "text-gray-500"
            }`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Pharmacists
          </button>
          <button
            onClick={() => setActiveTab("manager")}
            className={`px-6 py-2 ${
              activeTab === "manager"
                ? "bg-white p-10 rounded-xl text-black"
                : "text-gray-500"
            }`}
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Management Team
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-5 w-full">
          {renderData(activeTab)}
        </div>
      </div>
    </>
  );
};

export default Index;
