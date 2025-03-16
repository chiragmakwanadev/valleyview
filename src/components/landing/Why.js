import React from "react";
import Clamp from "../Clamp";

const Why = () => {
  return (
    <div className="padding-x py-[100px] bg-[#c4cad0]">
      <div className="bg-white text-black flex flex-col gap-10 p-5 xl:p-10 rounded-xl">
        {/* <img
          src="/images/why.jpg"
          alt=""
          className="w-full  object-cover h-[400px] hidden xl:block rounded-xl"
        /> */}
        <img
          src="/images/why2.jpg"
          alt=""
          className="w-full  object-cover h-[400px] rounded-2xl block"
        />
        <div className="w-full  flex flex-col gap-5">
          <p className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-100 w-full xl:w-[350px] p-[5px] text-center rounded-3xl">
            Your health connected with care!
          </p>
          <h1 className="font-normal" style={{ fontSize: Clamp(1.5, 2.5) }}>
            Why Choose Valleyview Medical?
          </h1>
          <div
            style={{ fontSize: Clamp(0.75, 1) }}
            className="flex flex-col gap-3"
          >
            <p>
              At Valleyview Medical Centre, we go beyond just treating
              symptoms—we focus on your long-term health and well-being. Our
              goal is to provide high-quality, patient-centered care in a
              welcoming and comfortable environment. With a team of dedicated
              medical professionals and state-of-the-art technology, we ensure
              that every visit is met with expertise, compassion, and
              efficiency.
            </p>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              1. Comprehensive & Personalized Healthcare
            </h2>
            <p>
              Every patient is unique, and so is their healthcare journey. We
              take the time to listen, assess, and tailor our services to meet
              your specific medical needs. Whether you’re here for preventive
              care, chronic disease management, urgent medical concerns, or
              specialist referrals, our team is committed to delivering
              personalized treatment plans designed to support your long-term
              wellness.
            </p>
            <ul className="text-[14px]">
              <li>
                ✅ Routine Check-ups & Preventive Care – Early detection and
                proactive care for a healthier future.
              </li>
              <li>
                ✅ Chronic Disease Management – Support for diabetes,
                hypertension, and other long-term conditions.
              </li>
              <li>
                ✅ Specialist Referrals – Direct access to leading specialists
                for advanced care.
              </li>
              <li>
                ✅ Emergency & Walk-In Services – Immediate care when you need
                it most.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              2. Advanced Technology for Accurate & Efficient Care
            </h2>
            <p>
              We invest in cutting-edge medical technology to ensure precise
              diagnostics, faster treatment, and better patient outcomes. Our
              clinic is equipped with modern examination rooms, digital medical
              records, and diagnostic tools, ensuring seamless and efficient
              healthcare services.
            </p>
            <ul className="text-[14px]">
              <li>
                ✅ State-of-the-art diagnostic equipment for accurate
                assessments.
              </li>
              <li>
                ✅ Electronic Medical Records (EMR) for streamlined patient
                history tracking.
              </li>
              <li>
                ✅ Telemedicine Services for convenient virtual consultations.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              3. A Patient-Centered Approach
            </h2>
            <p>
              We understand that healthcare can sometimes feel overwhelming.
              That’s why we prioritize clear communication, compassionate
              support, and a stress-free experience from the moment you walk in.
              Our multilingual staff is here to ensure that every patient feels
              heard, valued, and cared for.
            </p>
            <ul className="text-[14px]">
              <li>✅ Multilingual team to assist diverse communities.</li>
              <li>
                ✅ Friendly & welcoming staff dedicated to making your
                experience smooth.
              </li>
              <li>
                ✅ Comfortable and modern clinic environment designed with
                patients in mind.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              4. On-Site Pharmacy for Your Convenience
            </h2>
            <p>
              Healthcare should be simple and accessible. Our on-site pharmacy
              ensures that you can fill your prescriptions quickly and
              conveniently without the hassle of making multiple trips.
            </p>
            <ul className="text-[14px]">
              <li>✅ Immediate access to prescribed medications.</li>
              <li>✅ Professional guidance from our expert pharmacists.</li>
              <li>
                ✅ Quick refills and medication management for chronic
                conditions.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              5. Commitment to Your Family’s Health
            </h2>
            <p>
              From newborns to seniors, we offer comprehensive family medicine
              services to ensure that every member of your household receives
              the best possible care. Our team of experienced physicians,
              nurses, and healthcare professionals are here to provide lifelong
              care for you and your loved ones.
            </p>
            <ul className="text-[14px]">
              <li>✅ Pediatric care to keep your little ones healthy.</li>
              <li>
                ✅ Women’s health services, including routine exams and prenatal
                care.
              </li>
              <li>
                ✅ Geriatric care to support aging with dignity and
                independence.
              </li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              6. Convenient & Accessible Location
            </h2>
            <p>
              We believe quality healthcare should be accessible to everyone.
              Our centrally located clinic makes it easy for patients from
              Whitby and surrounding areas to receive the care they need without
              long wait times or unnecessary travel.
            </p>
            <ul className="text-[14px]">
              <li>✅ Ample parking & wheelchair accessibility.</li>
              <li>
                ✅ Flexible appointment scheduling & walk-in availability.
              </li>
              <li>✅ Easy access by public transport.</li>
            </ul>
            <h2 className="font-bold" style={{ fontSize: Clamp(1, 1.5) }}>
              7. A Team That Truly Cares
            </h2>
            <p>
              At Valleyview Medical Centre, our team is more than just
              healthcare providers—we are your partners in health. We are
              passionate about helping you live your healthiest life, and we
              work tirelessly to ensure that your healthcare experience is
              positive, seamless, and empowering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
