import React from "react";
import Clamp from "../Clamp";

const Welcome = () => {
  return (
    <div className="bg-white padding-x py-[100px]">
      <h1
        className="font-semibold text-black py-4 text-center"
        style={{ fontSize: Clamp(1.5, 2.5) }}
      >
        Your Health, Our Priority <br /> – Welcome to Valleyview Medical Centre
      </h1>
      <div className=" text-black flex flex-col xl:flex-row gap-10 bg-white p-5 xl:p-10 rounded-xl shadow-2xl">
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <p className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-100 w-auto xl:w-[350px] p-[5px] text-center rounded-3xl">
            Your health connected with care!
          </p>

          <img
            src="/images/reception.jpg"
            alt=""
            className="w-full xl:w-[50%] object-cover block xl:hidden h-[300px] md:h-[400px] rounded-2xl"
          />
          <div
            style={{ fontSize: Clamp(0.75, 1) }}
            className="flex flex-col gap-4 text-gray-700"
          >
            <p>
              At Valleyview Medical Centre, your health and well-being are at
              the heart of everything we do. As you step into our modern,
              state-of-the-art facility, you’ll be greeted by a team of
              dedicated healthcare professionals committed to providing
              exceptional medical care with a personal touch.
            </p>
            <p>
              We believe in empowering you with knowledge, supporting your
              medical decisions, and guiding you toward a healthier life.
              Whether you're visiting for a routine check-up, specialized
              treatment, or urgent care, our experienced doctors and
              compassionate staff are here to assist you every step of the way.
            </p>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              Comprehensive & Patient-Focused Care
            </h2>
            <p>
              At Valleyview Medical Centre, we are dedicated to delivering the
              highest standard of healthcare in a comfortable and welcoming
              environment. Our clinic is designed with your convenience in mind,
              offering:
            </p>
            <ul className="text-[14px]">
              <li>
                ✅ Advanced technology for accurate diagnostics and effective
                treatment.
              </li>
              <li>
                ✅ Personalized care tailored to your unique health needs.
              </li>
              <li>
                ✅ On-site pharmacy to make it easier for you to access
                prescriptions.
              </li>
              <li>
                ✅ Modern facilities to ensure a seamless and stress-free
                experience.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              A Commitment to Your Well-Being
            </h2>
            <p>
              From our cozy waiting areas to our well-equipped examination
              rooms, every aspect of our clinic is designed with your comfort
              and care in mind. We take the time to listen, understand, and
              provide healthcare solutions that best suit your needs.
            </p>
            <p>
              Thank you for choosing Valleyview Medical Centre—where your health
              is our mission, and your trust is our privilege.
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
