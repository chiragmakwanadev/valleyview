import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaPhone, FaLink, FaXTwitter } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import { PortableText } from "next-sanity";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
});

export const getStaticPaths = async () => {
  const allPosts = await client.fetch(
    '*[_type == "post"]{ "slug": slug.current }'
  );
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug }, // Use the `slug` as the dynamic route parameter
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const newsItem = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      "categories": categories[]->title, 
      publishedAt,
      body
    }`,
    { slug: params.slug }
  );
  return {
    props: {
      newsItem,
    },
  };
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

const renderPortableText = (value) => {
  return value.map((block, index) => {
    if (block._type === "block") {
      return (
        <p key={index} style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          {block.children.map((child, idx) => (
            <span key={idx}>{child.text}</span>
          ))}
        </p>
      );
    }
    return null;
  });
};

const NewsDetail = ({ newsItem }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{newsItem.title} | Vallewview Medical Centre</title>
      </Head>
      <div
        className="pb-[50px] padding-x flex flex-col xl:flex-row gap-10"
        style={{ paddingTop: Clamp(5, 10.5) }}
      >
        <div className="w-full xl:w-[65%] border-none xl:border-r-[1px] border-blue-600 pl-0 xl:pl-[100px] overflow-y-auto">
          <h1
            className="font-bold text-blue-600"
            style={{ fontSize: Clamp(1.5, 2.25) }}
          >
            {newsItem.title}
          </h1>
          <p
            className="text-gray-500 my-2"
            style={{ fontSize: Clamp(0.75, 1.15) }}
          >
            {formatDate(newsItem.publishedAt)}
          </p>
          <div className="text-blue-600 bg-blue-200 w-[250px] px-5 py-2 text-center rounded-3xl">
            {newsItem.categories && newsItem.categories.join(", ")}
          </div>
          <div
            className="text-[16px] mt-4 w-[90%]"
            style={{ whiteSpace: "pre-line" }}
          >
            {renderPortableText(newsItem.body)}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-[40px]">
            <Link href="">CONTACT US</Link>
          </button>
        </div>
        <div className="w-full xl:w-[35%] ml-0 xl:ml-[20px] px-0 xl:px-[50px] flex flex-col gap-5 sticky top-[180px] h-fit">
          <img src="/images/valley-banner.jpg" alt="" />
          <div>
            <h1
              className="font-semibold text-blue-600"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Contact Us
            </h1>
            <ul className="flex flex-col gap-5 pt-4 text-gray-600">
              <li className="flex gap-5 items-center">
                <IoPersonSharp />
                <p>Valleyview Medical Centre</p>
              </li>
              <li className="flex gap-5 items-center">
                <AiFillHome />
                <p>1916 Dundas St E Unit 6, Whitby</p>
              </li>
              <li className="flex gap-5 items-center">
                <FaPhone />
                <p>+1 905-434-1662</p>
              </li>
              <li className="flex gap-5 items-center">
                <BiSolidMessage />
                <Link href="" className="hover:text-red-600">
                  info@valleyviewmedical.ca
                </Link>
              </li>
              <li className="flex gap-5 items-center">
                <FaLink />
                <Link href="" className="hover:text-red-600">
                  www.valleyviewmedical.ca
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1
              className="font-semibold text-blue-600 pb-5"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Follow Us
            </h1>
            <ul
              className="flex gap-4 text-white"
              style={{ fontSize: Clamp(0.75, 1.15) }}
            >
              <li className="bg-blue-600 p-4 rounded-full">
                <Link href="https://x.com/vmcwhitby">
                  <FaXTwitter />
                </Link>
              </li>
              <li className="bg-blue-600 p-4 rounded-full">
                <Link href="https://www.facebook.com/profile.php?id=100094622814558">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="bg-blue-600 p-4 rounded-full">
                <Link href="https://www.instagram.com/valleyviewmedical/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
