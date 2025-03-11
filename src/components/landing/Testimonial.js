import React, { useEffect, useRef } from "react";
import Clamp from "../Clamp";
import { Rating } from "@mui/material";

const Data = [
  {
    reviewer: "John Doe",
    rating: 5,
    date: "2 months ago",
    review:
      "We are incredibly fortunate to have Dr. Smith as our family doctor. His expertise, professionalism, and genuine care for his patients make him stand out in the medical field. He listens attentively, diagnoses accurately, and provides clear, effective treatment plans. Dr. Smith takes the time to explain medical issues thoroughly and ensures that you are comfortable with every step of your care. The front desk staff at this clinic are professional and friendly too. Highly recommend!",
  },
  {
    reviewer: "Emily Carter",
    rating: 5,
    date: "a week ago",
    review:
      "I highly recommend Dr. Johnson at Harmony Medical Centre. She is the BEST doctor I've ever had. Dr. Johnson takes the time to truly listen to my concerns and is incredibly knowledgeable about women's health and other medical issues. She's also friendly, approachable, and thorough. For the first time in years, I felt heard and understood, not rushed or dismissed. The entire team and pharmacy staff here are also super helpful and kind. I am so happy and grateful I have found Dr. Johnson and this clinic.",
  },
  {
    reviewer: "Mark Williams",
    rating: 5,
    date: "3 months ago",
    review:
      "I just found a hidden treasure. Dr. Brown is everything I have been hoping to find in a family doctor. I came in as a walk-in since my previous doctor retired. I had been sick for a month! Dr. Brown was friendly and compassionate—she addressed my concerns right away. Lisa and Jake at the front desk were so welcoming and kind. This office is a hidden gem. I am transferring my care to Dr. Brown because she is kind and patient… everything you want in a family doctor.",
  },
  {
    reviewer: "Sophia Lee",
    rating: 4,
    date: "1 month ago",
    review:
      "Dr. Davis is a great doctor who truly cares about his patients. He always takes the time to answer questions and explain everything in detail. The only reason I am giving 4 stars instead of 5 is that the waiting time can be long. Other than that, I highly recommend Dr. Davis and his team. The staff is friendly and professional, and the clinic is well-organized.",
  },
  {
    reviewer: "Alex Martinez",
    rating: 5,
    date: "3 weeks ago",
    review:
      "I have never felt more comfortable at a doctor's office. Dr. Miller is an absolute professional who listens carefully and provides the best medical care. The staff is friendly, the clinic is clean, and I never feel rushed during my visits. If you're looking for a compassionate and knowledgeable doctor, Dr. Miller is the one to see. Thank you for the great care!",
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
