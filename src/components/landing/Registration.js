import React from "react";
import Clamp from "../Clamp";

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

const Registration = () => {
  return (
    <>
      <div className="padding-x py-[50px]">
        <div className="flex flex-col items-start xl:items-center gap-4 py-[40px]">
          <h1
            className="text-[36px] font-bold text-blue-600"
            style={{ fontSize: Clamp(1.5, 2.25) }}
          >
            New Patient Registration
          </h1>
          <p
            className="text-[18px] text-start xl:text-center"
            style={{ fontSize: Clamp(1, 1.5) }}
          >
            Due to high demand, we are temporarily suspending online patient
            registrations. We are still accepting new patients, please register
            in-person at the clinic.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row w-full gap-10 bg-blue-100 p-3 md:p-5 xl:p-10 rounded-xl shadow-xl">
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
      <div className="bg-blue-600 text-white padding-x py-[80px] flex flex-col xl:flex-row gap-5 items-start xl:items-center">
        <h1
          className=" text-start xl:text-right font-semibold leading-[40px]"
          style={{ fontSize: Clamp(1.5, 2.25) }}
        >
          Appointment <br /> Cancellation <br /> Policy
        </h1>
        <p style={{ fontSize: Clamp(1, 1.25) }}>
          We kindly ask that you provide our clinic with a minimum of 24 hours’
          notice if you are unable to attend your appointment. Failure to attend
          or provide proper notice of cancellation of scheduled appointments
          will result in a $40 no-show fee. Please note that three or more
          no-show incidents may result in dismissal at your physician’s
          discretion. Thank you for your understanding and cooperation.
        </p>
      </div>
    </>
  );
};

export default Registration;
