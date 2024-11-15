import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Dates = [
  {
    Monday: "9am to 7pm",
    Tuesday: "9am to 7pm",
    Wednesday: "9am to 7pm",
    Thursday: "9am to 7pm",
    Friday: "9am to 5pm",
    Saturday: "9am to 2pm",
    "Sunday/Stat Holidays": "Closed",
  },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Vallewview Medical Centre</title>
      </Head>
      <div style={{ paddingTop: Clamp(3.7, 7.5) }}>
        <Banner subtitle="Contact Us" buttonText="Email Us" />
        <div className="flex flex-col xl:flex-row w-full gap-10 padding-x">
          <div className="flex flex-col w-full xl:w-[50%]">
            <p className="text-[16px] font-thin">
              Accessible Parking Available
            </p>
            <h1
              className=" font-medium text-blue-600"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Location
            </h1>
            <p
              className="font-light pb-[30px]"
              style={{ fontSize: Clamp(1, 1.5) }}
            >
              1916 Dundas St E Unit 6, Whitby
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl w-full h-[450px]"
              style={{ height: Clamp(15, 28) }}
            ></iframe>
          </div>
          <div className="flex flex-col w-full xl:w-[50%]">
            <p className="text-[16px] font-thin">Valleyview Medical Centre</p>
            <h1
              className=" font-medium text-blue-600"
              style={{ fontSize: Clamp(1.5, 2.25) }}
            >
              Visit a Doctor
            </h1>
            <p
              className=" font-light pb-[30px] text-blue-600"
              style={{ fontSize: Clamp(1, 1.5) }}
            >
              +1 905-434-1662
            </p>
            <div className="text-[18px]">
              {Object.entries(Dates[0]).map(([day, time]) => (
                <div key={day} className="flex  gap-4 pb-2 items-center">
                  <p className="font-bold">{day}:</p>
                  <p style={{ fontSize: Clamp(1, 1.25) }}>{time}</p>
                </div>
              ))}
            </div>
            <span className="flex items-start xl:items-end">
              <h1 className="font-bold text-[18px]">NOTE:</h1>
              Times may vary depending on doctor’s availability
            </span>
            <p className="pt-[30px]" style={{ fontSize: Clamp(1, 1.25) }}>
              As a community-oriented medical clinic in Whitby, we offer a wide
              range of services designed to address all of your health care
              needs. From routine check-ups, scheduled appointments to see your
              family doctor, walk-in patient assessments and preventive care, we
              aim to be your one-stop solution for maintaining and enhancing
              your well-being.{" "}
            </p>
            <button
              className="bg-blue-600 px-[20px] py-[8px] w-full md:w-[250px] mt-[40px] text-white
           hover:text-blue-600 border-[1px] border-transparent hover:border-blue-600 hover:bg-white duration-500 rounded-xl"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
