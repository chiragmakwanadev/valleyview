import React, { useEffect, useRef } from "react";
import Clamp from "../Clamp";
import { Rating } from "@mui/material";

const Data = [
  {
    reviewer: "Vic Tyrer",
    rating: 5,
    date: "3 months ago",
    review:
      "If you are looking for a doctor we highly recommend Valleyview Medical Centre. My wife and I registered in person and we're assigned a doctor immediately. We met with Dr. Francis Aluh. He is amazing. He took his time with us, has excellent communication skills, and is very easy to speak with. The Clinic reception staff are well organized, pleasant and efficient in calling patient to see their doctor.",
  },
  {
    reviewer: "Saad Faize",
    rating: 5,
    date: "2 months ago",
    review:
      "Exceptional care at Valleyview Medical Centre! Dr. Emmanuel Erdogan is incredibly supportive, going above and beyond for patient well-being. The help desk and pharmacy staff are professional, efficient, and caring. The quality of care far exceeded my expectations. Highly recommend this clinic and its services!",
  },
  {
    reviewer: "telugammayi Dhanasree",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Valley View hospital exceeded our expectations! Dr. Emmanuel Adeogun provided thorough care during my pregnancy, closely monitoring my health and ensuring the best outcomes. The staff is kind, patient, and accommodating despite the hospital being busy. We’re beyond grateful for their support!",
  },
  {
    reviewer: "Bhakti Patel",
    rating: 5,
    date: "5 months ago",
    review:
      "I visited as a walk-in and met Dr. Francis, who is an amazing doctor. The administrator was incredibly helpful and made the whole process smooth and easy for me. I didn’t have to wait long, which was a big plus. Overall, a great experience, and I would definitely go there again! If you need any help, Musab is your guy—his expertise in IT and admin tasks really stands out.",
  },
  {
    reviewer: "areebah iq8",
    rating: 5,
    date: "a month ago",
    review:
      "Been going here ever since I was 6 and the current staff and environment are the best yet. Reception has improved, pharmacy is great (still have the same pharmacist since my first time there) and doctors are on top of it. The best part though is that any concerns you have regarding staff, appointments, rescheduling etc. are all taken seriously and changes are made. Good work Valleyview!",
  },
];

const Testimonial = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame;
    let step = 0;

    const scrollMarquee = () => {
      step += 1;
      if (step >= marquee.scrollWidth / 2) {
        step = 0;
      }
      marquee.style.transform = `translateX(-${step}px)`;
      animationFrame = requestAnimationFrame(scrollMarquee);
    };

    animationFrame = requestAnimationFrame(scrollMarquee);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-[80px]">
      <p className="text-[16px] xl:text-[18px] text-blue-600 bg-blue-100 w-auto xl:w-[350px] p-[5px] my-10 text-center rounded-3xl">
        Testimonials.
      </p>
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          style={{ display: "flex", willChange: "transform" }}
        >
          {[...Data, ...Data].map((data, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] p-5 mx-2 bg-gray-100 rounded-lg"
            >
              <div className="flex flex-col">
                <h1 className="font-medium text-lg">{data.reviewer}</h1>
                <h4 className="text-gray-600">{data.date}</h4>
                <Rating value={data.rating} readOnly size="small" />
              </div>
              <p className="mt-3 text-gray-800 text-[14px] md:text-[16px] text-wrap">
                {data.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
