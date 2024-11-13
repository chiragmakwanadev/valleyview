import React from "react";

const Why = () => {
  return (
    <div className="px-[250px] py-[100px] bg-blue-600 text-white flex gap-10">
      <img
        src="/images/welcome.jpg"
        alt=""
        className="w-[50%] object-cover h-auto"
      />
      <div className="w-[50%] flex flex-col gap-5">
        <p className="text-[24px]">Your health connected with care!</p>
        <h1 className="text-[40px] font-bold">
          Why Choose Valleyview Medical?
        </h1>
        <p className="text-[20px]">
          Patient Care and Support: We are committed to delivering exceptional
          care in a compassionate and supportive setting. We uphold integrity,
          respect, and confidentiality, valuing the well-being and dignity of
          each patient.
        </p>
        <p className="text-[20px]">
          Evidence-Based Medicine: We adhere to the principles of evidence-based
          medicine,
        </p>
        <p className="text-[20px]">
          incorporating proven outcomes to prevent illness, restore health, and
          alleviate suffering.
        </p>
        <p className="text-[20px]">
          Service Excellence: We optimize our resources to provide efficient and
          effective treatment for our patients. By continually improving access
          and the quality of our services, we strive to exceed patient
          expectations.
        </p>
        <p className="text-[20px]">
          Team Collaboration: We foster a culture of collaboration, recognizing
          the vital role of our physicians in serving patients. Our dedicated
          staff are our most valuable asset, and we create a workplace that
          attracts and rewards compassionate individuals who perform at their
          best.
        </p>
      </div>
    </div>
  );
};

export default Why;
