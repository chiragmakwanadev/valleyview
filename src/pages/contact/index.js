import Banner from "@/components/Banner";
import Clamp from "@/components/Clamp";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:info@valleyviewmedical.ca?subject=New Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Message: ${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  const locationAccess = localStorage.getItem("location", location);

  return (
    <>
      <Head>
        <title>Contact Us | Vallewview Medical Centre</title>
      </Head>
      <div>
        <Banner subtitle="Contact Us" buttonText="Email Us" />
        <div className="flex flex-col xl:flex-row w-full gap-10 padding-x py-[50px]">
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
            {locationAccess === "Whitby" ? (
              <p
                className="font-light pb-[30px]"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                1916 Dundas St E Unit 6, Whitby
              </p>
            ) : (
              <p
                className="font-light pb-[30px]"
                style={{ fontSize: Clamp(1, 1.5) }}
              >
                991 Taunton Rd E B3, Oshawa, ON L1K 0Z7, Canada
              </p>
            )}

            {locationAccess === "Whitby" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-[450px]"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509406!2d144.96305761531715!3d-37.81627977975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzU4LjYiUyAxNDTCsDU3JzQ2LjgiRQ!5e0!3m2!1sen!2sus!4v1617183837195!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-[450px]"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            )}
          </div>
          <div className="w-full xl:w-[50%]">
            <h1 className="text-[24px] font-semibold py-5 text-blue-600">
              New Patient Registration Form
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md"
              >
                <option value="">Select City</option>
                <option value="Whitby">Whitby</option>
                <option value="Oshawa">Oshawa</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4 w-full  padding-x pb-[50px]">
          <div className="w-[50%]">
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
            <div className="text-[16px]">
              {Object.entries(Dates[0]).map(([day, time]) => (
                <div
                  key={day}
                  className="grid grid-cols-2 gap-x-1 pb-2 items-center justify-start"
                >
                  <p className="font-bold whitespace-nowrap">{day}:</p>
                  <p>{time}</p>
                </div>
              ))}
            </div>
            <span className="flex items-start xl:items-end">
              <h1 className="font-bold text-[18px]">NOTE:</h1>
              Times may vary depending on doctor’s availability
            </span>
          </div>
          <div className="w-[50%]">
            <p className="pt-[30px]" style={{ fontSize: Clamp(1, 1.25) }}>
              As a community-oriented medical clinic in Whitby, we offer a wide
              range of services designed to address all of your health care
              needs. From routine check-ups, scheduled appointments to see your
              family doctor, walk-in patient assessments and preventive care, we
              aim to be your one-stop solution for maintaining and enhancing
              your well-being.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
