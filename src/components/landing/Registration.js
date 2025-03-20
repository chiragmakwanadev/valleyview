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
  const locationAccess = localStorage.getItem("location", location);

  return (
    <div className="bg-[#c4cad0] pt-[50px] md:pt-[100px] xl:pt-[150px]">
      <div className="bg-white margin-x mb-[50px] p-4 xl:p-7 rounded-xl flex flex-col gap-1 shadow-xl">
        <div className="flex flex-col xl:flex-row-reverse bg-white rounded-xl gap-[40px]">
          <div className="flex flex-col w-full xl:w-[50%]">
            {locationAccess === "Whitby" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509406!2d144.96305761531715!3d-37.81627977975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzU4LjYiUyAxNDTCsDU3JzQ2LjgiRQ!5e0!3m2!1sen!2sus!4v1617183837195!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ height: Clamp(15, 28) }}
              ></iframe>
            )}
          </div>
          <div className="flex flex-col  gap-4 w-full xl:w-[50%] justify-between">
            <div className="flex flex-col gap-5">
              <h1
                className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-200 w-auto
               p-[5px] text-center rounded-3xl"
              >
                Accepting New Patients in Durham Region
              </h1>
              <p style={{ fontSize: Clamp(0.8, 1) }}>
                You can easily register as a new patient through our convenient
                online platform, allowing you to complete the process from the
                comfort of your home. Alternatively, you are welcome to visit us
                in person at the clinic, where our friendly staff will be happy
                to assist you with your registration. At Valleyview Medical
                Centre, we are committed to providing a smooth and hassle-free
                experience as you begin your healthcare journey with us. We look
                forward to welcoming you and meeting your medical needs with
                compassionate, high-quality care.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className=" font-medium text-blue-600 text-[24px]">
                Location
              </h1>
              {locationAccess === "Whitby" ? (
                <p className="font-light " style={{ fontSize: Clamp(1, 1.5) }}>
                  1916 Dundas St E Unit 6, Whitby
                </p>
              ) : (
                <p className="font-light " style={{ fontSize: Clamp(1, 1.5) }}>
                  991 Taunton Rd E B3, Oshawa, ON L1K 0Z7, Canada
                </p>
              )}
              <p className="text-[16px] font-thin">
                Accessible Parking Available
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full gap-10 pt-[50px]">
          <img
            src="/images/hospital.jpg"
            alt=""
            className="w-full xl:w-[50%] object-cover rounded-xl"
            style={{ height: Clamp(15, 35) }}
          />
          <div className="flex flex-col gap-2 w-full xl:w-[50%]">
            <h1 className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-200 w-auto xl:w-[250px] p-[5px] text-center rounded-3xl">
              Clinic Timings
            </h1>

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
            <p style={{ fontSize: Clamp(1, 1.25) }}>
              As a community-oriented medical clinic in {locationAccess}, we
              offer a wide range of services designed to address all of your
              health care needs. From routine check-ups, scheduled appointments
              to see your family doctor, walk-in patient assessments and
              preventive care, we aim to be your one-stop solution for
              maintaining and enhancing your well-being.{" "}
            </p>
            {/* <button
              className="bg-blue-600 px-[20px] py-[8px] w-full md:w-[250px] text-white
           hover:text-blue-600 border-[1px] border-transparent hover:border-blue-600 hover:bg-white duration-500 rounded-xl mt-[10px]"
            >
              BOOK APPOINTMENT
            </button> */}
          </div>
        </div>
      </div>
      <div className="bg-white text-black padding-x py-[80px] flex flex-col xl:flex-row gap-5 items-center xl:items-center">
        <h1
          className=" text-center xl:text-right font-semibold leading-[40px]"
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
    </div>
  );
};

export default Registration;
