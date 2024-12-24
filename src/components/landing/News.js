import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PortableText, createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-12-23",
});

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [posts, setPosts] = useState([]);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`
        *[_type == "post"]{
          title,
          slug,
          "categories": categories[]->title, // Resolve and fetch category titles
          publishedAt,
          body
        }
      `);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  const currentItems = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // Covers 4th-20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
  };

  const getFirstParagraph = (content) => {
    const firstParagraph = content.find((block) => block._type === "block");

    if (firstParagraph) {
      return [firstParagraph];
    }

    return [];
  };

  return (
    <>
      <Head>
        <title>
          What&apos;s new at Valleyview Medical Centre | Vallewview Medical
          Centre
        </title>
      </Head>
      <div>
        <div className="padding-x py-[50px]">
          <h1
            className="text-center font-bold text-blue-600"
            style={{ fontSize: Clamp(1.5, 2.25) }}
          >
            The Latest News & Updates
          </h1>
          <p
            className="text-center mb-[40px]"
            style={{ fontSize: Clamp(1, 1.15) }}
          >
            Updates, policy changes, and other newsworthy items from Valleyview
            Medical Centre
          </p>
          <div className="flex flex-row flex-wrap justify-center w-full gap-6">
            {currentItems.map((news, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-lg rounded-lg min-w-[100%] md:min-w-[320px] w-full md:w-[32%] h-auto md:h-[400px] flex flex-col justify-between"
              >
                <div className="">
                  <p className="text-gray-500 text-sm pb-2">
                    {formatDate(news.publishedAt)}
                  </p>
                  <span className="text-[12px] text-blue-600 bg-blue-200 w-[250px] px-5 py-2 text-center rounded-3xl">
                    {news.categories}
                  </span>
                  <h2
                    className="font-bold text-blue-600 my-2"
                    style={{ fontSize: Clamp(1, 1.5) }}
                  >
                    {news.title}
                  </h2>
                </div>
                <div className="text-[16px] mb-4">
                  <PortableText
                    value={
                      news.body && news.body.length
                        ? getFirstParagraph(news.body)
                        : news.body
                    }
                  />
                </div>
                <Link href={`/news/${news.slug.current}`} className="w-full">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-[40px] w-full">
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
              className="px-2 md:px-4 py-1 md:py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-2 md:px-4 py-1 md:py-2 bg-blue-600 text-white rounded disabled:opacity-50"
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
