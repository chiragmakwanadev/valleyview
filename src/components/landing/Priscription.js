import Link from "next/link";
import React from "react";

const hours = {
  "Monday-Thursday": "9am-7pm",
  Friday: "9am-5pm",
  Saturday: "9am-2pm",
  Sunday: "Closed",
};

const Prescription = () => {
  return (
    <div className="px-[250px] py-[80px] flex flex-row-reverse items-center gap-5">
      <div
        className="flex flex-col gap-4 w-[40%] border-[1px] p-[50px] rounded-xl"
        style={{ boxShadow: "0px 0px 48px -19px rgba(0,0,0,0.75)" }}
      >
        <div className="text">
          <p className="text-[18px] font-extralight">EAST WHITBY IDA</p>
          <h1 className="text-[36px] font-bold text-red-600">
            Fill a Prescription
          </h1>
          <p className="text-[24px] font-light text-red-600">905-435-1100</p>
        </div>
        <div>
          {Object.entries(hours).map(([days, time]) => (
            <div key={days} className="flex flex-row gap-4 pb-2">
              <p className="font-bold">{days}:</p>
              <p className="font-normal">{time}</p>
            </div>
          ))}
        </div>
        <p className="text-[18px]">
          At East Whitby Pharmacy, we are dedicated to providing exceptional
          health care services to improve the well-being of our community.
        </p>
        <p className="text-[18px]">
          Our knowledgeable and friendly team of pharmacists and staff are
          committed to meeting the unique needs of each of our patients.{" "}
          <Link
            href="/staff"
            className="text-red-600 hover:text-blue-600 cursor-pointer duration-300"
          >
            Our multilingual staff
          </Link>{" "}
          can help you in English, Gujrati, Punjabi, Hindi, and Urdu.
        </p>
        <p className="text-[18px]">
          We look forward to serving you and being a partner in your healthcare
          journey.
        </p>
        <Link href="https://www.bookmyshot.com/9054351100">
          <button
            className="bg-red-600 px-[20px] py-[8px] mt-[40px] text-white
           hover:text-red-600 border-[1px] border-transparent hover:border-red-600 hover:bg-white duration-500"
          >
            FILL A PRISCRIPTION
          </button>
        </Link>
      </div>
      <div className="w-[60%] flex flex-col gap-2 items-center">
        <img
          src="/images/ida.png"
          alt=""
          className="w-[150px] h-[100px] object-cover"
        />
        <img src="/images/hospital.jpg" alt="" />
        <p className="bg-blue-600 p-[15px] text-[30px] text-white text-center w-full">
          SAVE 20% on over-the-counter items
        </p>
      </div>
    </div>
  );
};

export default Prescription;
