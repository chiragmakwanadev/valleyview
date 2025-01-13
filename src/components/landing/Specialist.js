import Banner from "@/components/Banner";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import { PortableText, createClient } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-23",
});

const Index = () => {
  const [activeTab, setActiveTab] = useState("doctors");
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "author"]{
            name,
            slug,
            image,
            "categories": categories[]->title,
            body
          }
        `);

        // Filter out doctors and pharmacists based on categories
        const doctors = data.filter((item) =>
          item.categories.includes("Family Physician")
        );
        const pharmacists = data.filter(
          (item) =>
            item.categories.includes("Pharmacist") ||
            item.categories.includes("Pharmacist Manager")
        );

        setStaffData({ doctors, pharmacists });
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  const renderData = (category) => {
    const staffList = staffData[category];

    return staffList?.map((item, index) => (
      <Link
        key={index}
        href={`/staff/${item.slug.current}`}
        className="min-w-[300px] w-full sm:w-[31%] p-4 bg-white text-center flex flex-col h-[500px] rounded-xl shadow-xl"
      >
        <img
          src={urlFor(item.image.asset).url()}
          alt={item.name}
          className="w-[100%] h-[370px] object-cover rounded-lg overflow-hidden"
        />
        <div className="flex flex-col gap-2 pt-3">
          <h3 className="text-[14px] font-normal">
            {item.categories.join(", ")}
          </h3>
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
          Whitby Doctors at Valleyview Medical | Valleyview Medical Centre
        </title>
      </Head>
      <div className="padding-x py-[50px] flex flex-col bg-white">
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

        <div className="flex flex-wrap items-center gap-5 w-full">
          {activeTab === "doctors"
            ? renderData("doctors")
            : renderData("pharmacists")}
        </div>
      </div>
    </>
  );
};

export default Index;
