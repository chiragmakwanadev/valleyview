import { Newsdata } from "@/static/NewsData";
import { useRouter } from "next/router";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaPhone, FaLink, FaXTwitter } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const getStaticPaths = async () => {
  const paths = Newsdata.map((news) => ({
    params: { id: news.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const newsItem = Newsdata.find((item) => item.id === parseInt(params.id, 10));

  return {
    props: {
      newsItem,
    },
  };
};

const NewsDetail = ({ newsItem }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div className="pb-[50px] px-[350px] flex pt-[180px]">
      <div className="w-[65%] min-h-[90vh] border-r-[1px] border-blue-600 pl-[100px] overflow-y-auto">
        <h1 className="text-[32px] font-bold text-blue-600">
          {newsItem.title}
        </h1>
        <p className="text-gray-500 text-sm my-2">{newsItem.date}</p>
        <span className="text-blue-600 text-sm font-normal">
          {newsItem.tag}
        </span>
        <p
          className="text-[16px] mt-4 w-[70%]"
          style={{ whiteSpace: "pre-line" }}
        >
          {newsItem.description}
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-[40px]">
          <Link href="">CONTACT US</Link>
        </button>
      </div>
      <div className="w-[35%] ml-[20px] px-[50px] flex flex-col gap-5 sticky top-[180px] h-fit">
        <img src="/images/valley-banner.jpg" alt="" />
        <div>
          <h1 className="text-[40px] font-semibold text-blue-600">
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
          <h1 className="text-[40px] font-semibold text-blue-600">Follow Us</h1>
          <ul className="flex gap-4 text-[20px] text-white">
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
  );
};

export default NewsDetail;
