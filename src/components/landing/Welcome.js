import React from "react";
import Clamp from "../Clamp";

const Welcome = () => {
  return (
    <div className="bg-[#f2f0f0] padding-x py-[100px]">
      <div className=" text-black flex flex-col xl:flex-row gap-10 bg-white p-10 rounded-xl">
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <p className="text-[18px] text-blue-600 bg-blue-100 w-[350px] p-[5px] text-center rounded-3xl">
            Your health connected with care!
          </p>
          <h1 className="font-light" style={{ fontSize: Clamp(1.5, 2.5) }}>
            Welcome to Valleyview Medical Centre
          </h1>
          <img
            src="/images/reception.jpg"
            alt=""
            className="w-full xl:w-[50%] object-cover block xl:hidden h-[300px] md:h-[400px] rounded-2xl"
          />
          <div
            style={{ fontSize: Clamp(1, 1.25) }}
            className="flex flex-col gap-4 text-gray-700"
          >
            <p>
              Welcome to Valleyview Medical Center, where your health and
              well-being are our top priorities. As you step into our
              state-of-the-art facility, you’ll discover a team of dedicated
              medical professionals who are committed to providing you with
              exceptional care and personalized attention
            </p>
            <p>
              We’re here to empower you with knowledge, support you through your
              medical decisions, and celebrate your progress toward a healthier
              life.
            </p>
            <p>
              At Valleyview Medical Center, we believe that every patient
              deserves the highest standard of medical treatment. Our advanced
              technology and modern amenities at our medical clinic in Whitby to
              support our compassionate approach to healthcare.
            </p>
            <p>
              Whether you’re visiting for routine check-ups, specialized
              treatments, or seeking answers to your health concerns, our
              experienced doctors and support staff are here to guide you every
              step of the way.
            </p>
            <p>
              We take the time to understand your unique needs and tailor our
              services to ensure you receive the best possible care. From our
              comfortable waiting areas to our well-equipped examination rooms,
              we’ve designed our centre with your comfort and convenience in
              mind.
            </p>
            <p>
              We also have a pharmacy onsite to make it very easy to fill your
              prescriptions.
            </p>
            <p>
              Thank you for choosing Valleyview Medical Center – where your
              well-being is our mission and your trust is our privilege.
            </p>
          </div>
        </div>
        <img
          src="/images/reception.jpg"
          alt=""
          className="w-full xl:w-[50%] object-cover hidden xl:block rounded-xl"
        />
      </div>
    </div>
  );
};

export default Welcome;
