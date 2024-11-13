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

const Registration = () => {
  return (
    <>
      <div className="px-[250px] py-[50px]">
        <div className="flex flex-col items-center gap-4 py-[40px]">
          <h1 className="text-[36px] font-bold text-blue-600">
            New Patient Registration
          </h1>
          <p className="text-[18px] text-center">
            Due to high demand, we are temporarily suspending online patient
            registrations. We are still accepting new patients, please register
            in-person at the clinic.
          </p>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex flex-col w-[50%]">
            <p className="text-[16px] font-thin">
              Accessible Parking Available
            </p>
            <h1 className="text-[36px] font-medium text-blue-600">Location</h1>
            <p className="text-[16px] font-light pb-[30px]">
              1916 Dundas St E Unit 6, Whitby
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1347128752056!2d-78.901594!3d43.889603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d525cd06d2595d%3A0x9f6c4a3af69bb80d!2s1916%20Dundas%20St%20E%2C%20Whitby%2C%20ON%20L1N%202L6%2C%20Canada!5e0!3m2!1sen!2sca!4v1699633078210!5m2!1sen!2sca"
              width="600"
              height="550"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col w-[50%]">
            <p className="text-[16px] font-thin">Valleyview Medical Centre</p>
            <h1 className="text-[36px] font-medium text-blue-600">
              Visit a Doctor
            </h1>
            <p className="text-[24px] font-light pb-[30px] text-blue-600">
              +1 905-434-1662
            </p>
            <div className="text-[18px]">
              {Object.entries(Dates[0]).map(([day, time]) => (
                <div key={day} className="flex  gap-4 pb-2">
                  <p className="font-bold">{day}:</p>
                  <p className="font-normal">{time}</p>
                </div>
              ))}
            </div>
            <span className="flex items-end">
              <h1 className="font-bold text-[18px]">NOTE:</h1>
              Times may vary depending on doctor’s availability
            </span>
            <p className="pt-[30px] text-[18px]">
              As a community-oriented medical clinic in Whitby, we offer a wide
              range of services designed to address all of your health care
              needs. From routine check-ups, scheduled appointments to see your
              family doctor, walk-in patient assessments and preventive care, we
              aim to be your one-stop solution for maintaining and enhancing
              your well-being.{" "}
            </p>
            <button
              className="bg-blue-600 px-[20px] py-[8px] w-[250px] mt-[40px] text-white
           hover:text-blue-600 border-[1px] border-transparent hover:border-blue-600 hover:bg-white duration-500"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white px-[250px] py-[80px] flex gap-5 items-center">
        <h1 className="text-[36px] text-right font-semibold leading-[40px]">
          Appointment <br /> Cancellation <br /> Policy
        </h1>
        <p className="text-[20px]">
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
