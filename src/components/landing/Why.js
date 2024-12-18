import React from "react";
import Clamp from "../Clamp";

const Why = () => {
  return (
    <div className="padding-x py-[100px] bg-[#f2f0f0]">
      <div className="bg-white text-black flex flex-col xl:flex-row gap-10 p-10 rounded-xl">
        <img
          src="/images/why.jpg"
          alt=""
          className="w-full xl:w-[50%] object-cover h-auto hidden xl:block rounded-xl"
        />
        <img
          src="/images/why2.jpg"
          alt=""
          className="w-full xl:w-[50%] object-cover h-[300px] xl:h-auto rounded-2xl xl:rounded-none block xl:hidden"
        />
        <div className="w-full xl:w-[50%] flex flex-col gap-5">
          <p className="text-[18px] text-blue-600 bg-blue-100 w-[350px] p-[5px] text-center rounded-3xl">
            Your health connected with care!
          </p>
          <h1 className="font-normal" style={{ fontSize: Clamp(1.5, 2.5) }}>
            Why Choose Valleyview Medical?
          </h1>
          <div
            style={{ fontSize: Clamp(1, 1.25) }}
            className="flex flex-col gap-3"
          >
            <p>
              Patient Care and Support: We are committed to delivering
              exceptional care in a compassionate and supportive setting. We
              uphold integrity, respect, and confidentiality, valuing the
              well-being and dignity of each patient.
            </p>
            <p>
              Evidence-Based Medicine: We adhere to the principles of
              evidence-based medicine,
            </p>
            <p>
              incorporating proven outcomes to prevent illness, restore health,
              and alleviate suffering.
            </p>
            <p>
              Service Excellence: We optimize our resources to provide efficient
              and effective treatment for our patients. By continually improving
              access and the quality of our services, we strive to exceed
              patient expectations.
            </p>
            <p>
              Team Collaboration: We foster a culture of collaboration,
              recognizing the vital role of our physicians in serving patients.
              Our dedicated staff are our most valuable asset, and we create a
              workplace that attracts and rewards compassionate individuals who
              perform at their best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
