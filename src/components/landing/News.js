import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import { Newsdata } from "@/static/NewsData";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(Newsdata.length / itemsPerPage);

  const currentItems = Newsdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateText = (text) => {
    const words = text.split(" ");
    return words.length > 25 ? `${words.slice(0, 25).join(" ")}...` : text;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div style={{ paddingTop: Clamp(3.7, 7.5) }} className="bg-[#c4cad0]">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[16px] xl:text-[18px] text-white bg-black w-auto xl:w-[350px] p-[5px] text-center rounded-3xl">
            The Latest Blog & News
          </h1>
          <p className="text-[16px] font-medium ">
            Updates, policy changes, and other newsworthy items from Valleyview
            Medical Centre
          </p>
        </div>
        <div className="padding-x py-[50px]">
          <div className="flex flex-row flex-wrap justify-center w-full gap-6">
            {currentItems.map((news) => (
              <div
                key={news.id}
                className="bg-white backdrop-blur-sm p-8 shadow-lg rounded-lg min-w-[100%] md:min-w-[320px] w-full md:w-[31%] h-auto flex flex-col justify-between hover:transf"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-gray-500 text-sm pb-2">{news.date}</p>
                  <span className="text-[12px] text-white bg-blue-700 w-[250px] px-5 py-2 text-center rounded-3xl">
                    {news.tag}
                  </span>
                  <h2
                    className="font-bold text-black my-2"
                    style={{ fontSize: Clamp(1, 1.5) }}
                  >
                    {news.title}
                  </h2>
                </div>
                <p className="text-[16px] mb-4">
                  {truncateText(news.description)}
                </p>
                <Link href={`/news/${news.id}`} className="w-full">
                  <button
                    className="bg-transparent text-black border-black border-[1px]
                   px-4 py-2 rounded-full mt-[40px] w-full hover:bg-black hover:border-black hover:text-white duration-200"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div
            className="flex justify-start md:justify-center mt-8 gap-4"
            style={{ fontSize: Clamp(1, 1.15) }}
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-2 md:px-4 py-1 md:py-2 bg-white text-black rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-2 md:px-4 py-1 md:py-2 bg-white text-black rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
