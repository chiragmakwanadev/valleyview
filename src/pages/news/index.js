import Banner from "@/components/Banner";
import { Newsdata } from "@/static/NewsData";
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
    <div className="pt-[120px]">
      <Banner
        subtitle="The Latest News & Updates"
        buttonText="Have a question?"
      />
      <div className="px-[250px] py-[50px">
        <div className="flex flex-row w-full gap-6">
          {currentItems.map((news) => (
            <div
              key={news.id}
              className="bg-white p-8 shadow-lg rounded-lg w-[33%] min-h-[400px] flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-500 text-sm">{news.date}</p>
                <span className="text-blue-600 text-sm font-normal">
                  {news.tag}
                </span>
                <h2 className="text-[32px] font-bold text-blue-600 my-2">
                  {news.title}
                </h2>
              </div>
              <p className="text-[16px] mb-4">
                {truncateText(news.description)}
              </p>
              <Link href={`/news/${news.id}`}>
                <h5 className="text-black font-bold">Read More</h5>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
