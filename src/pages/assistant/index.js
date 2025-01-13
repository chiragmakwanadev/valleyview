import Banner from "@/components/Banner";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, createClient } from "next-sanity";
import React, { useEffect, useState } from "react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-23",
});

const Index = () => {
  const [staffData, setStaffData] = useState([]);
  const [showData, setShowData] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`
              *[_type == "assistant"]{
                name,
                image,
                category,
                body
              }
            `);

        setStaffData(data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  const handleShow = (index) => {
    setShowData((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderPortableText = (value) => {
    return value?.map((block, index) => {
      if (block._type === "block") {
        return (
          <p
            key={index}
            style={{
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            {block.children.map((child, idx) => (
              <span key={idx}>{child.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <Banner subtitle="ADMINISTRATIVE TEAM" buttonText="Have a question?" />
      <div className="padding-x">
        {staffData.map((data, index) => (
          <div
            key={index}
            className="py-10 border-b-2 border-gray-200 my-0 flex flex-col gap-5"
          >
            <div
              className="flex items-center gap-5"
              onClick={() => handleShow(index)}
            >
              <img
                className="w-[75px] md:w-[150px] h-[75px] md:h-[150px] object-cover rounded-full"
                src={
                  data?.image?.asset
                    ? urlFor(data.image.asset).url()
                    : "/images/blackperson.png"
                }
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-[20px] md:text-[28px] font-semibold">
                  {data.name}
                </h1>
                <h2 className="text-[12px] md:text-[16px] text-gray-500">
                  {data.category}
                </h2>
              </div>
            </div>
            <div className="text-[14px] md:text-[18px]">
              {renderPortableText(data.body)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
