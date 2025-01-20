import Banner from "@/components/Banner";
import React from "react";
import { AssistantData } from "../../static/AssistantData";

const Index = () => {
  return (
    <div>
      <Banner subtitle="ADMINISTRATIVE TEAM" buttonText="Have a question?" />
      <div className="padding-x">
        {AssistantData.map((data, index) => (
          <div
            key={index}
            className="py-10 border-b-2 border-gray-200 my-0 flex flex-col gap-5"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-[75px] md:w-[150px] h-[75px] md:h-[150px] object-cover rounded-full"
                src={
                  data?.image ? data.image : "/images/blackperson.png" // Placeholder image if no image is provided
                }
                alt={data.name}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-[20px] md:text-[28px] font-semibold">
                  {data.name}
                </h1>
                <h2 className="text-[12px] md:text-[16px] text-gray-500">
                  {data.position}
                </h2>
              </div>
            </div>
            {data.description && (
              <div className="text-[14px] md:text-[18px]">
                <p
                  style={{
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                    whiteSpace: "pre-line",
                  }}
                >
                  {data.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
