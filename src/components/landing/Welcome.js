import React from "react";

const Welcome = () => {
  return (
    <div className="px-[250px] py-[100px] bg-blue-600 text-white flex gap-10">
      <div className="w-[50%] flex flex-col gap-5">
        <p className="text-[24px]">Your health connected with care!</p>
        <h1 className="text-[40px] font-bold">
          Welcome to Valleyview Medical Centre
        </h1>
        <p className="text-[20px]">
          Welcome to Valleyview Medical Center, where your health and well-being
          are our top priorities. As you step into our state-of-the-art
          facility, you’ll discover a team of dedicated medical professionals
          who are committed to providing you with exceptional care and
          personalized attention
        </p>
        <p className="text-[20px]">
          We’re here to empower you with knowledge, support you through your
          medical decisions, and celebrate your progress toward a healthier
          life.
        </p>
        <p className="text-[20px]">
          At Valleyview Medical Center, we believe that every patient deserves
          the highest standard of medical treatment. Our advanced technology and
          modern amenities at our medical clinic in Whitby to support our
          compassionate approach to healthcare.
        </p>
        <p className="text-[20px]">
          Whether you’re visiting for routine check-ups, specialized treatments,
          or seeking answers to your health concerns, our experienced doctors
          and support staff are here to guide you every step of the way.
        </p>
        <p className="text-[20px]">
          We take the time to understand your unique needs and tailor our
          services to ensure you receive the best possible care. From our
          comfortable waiting areas to our well-equipped examination rooms,
          we’ve designed our centre with your comfort and convenience in mind.
        </p>
        <p className="text-[20px]">
          We also have a pharmacy onsite to make it very easy to fill your
          prescriptions.
        </p>
        <p className="text-[20px]">
          Thank you for choosing Valleyview Medical Center – where your
          well-being is our mission and your trust is our privilege.
        </p>
      </div>
      <img src="/images/welcome.jpg" alt="" className="w-[50%] object-cover" />
    </div>
  );
};

export default Welcome;
