import { useRouter } from "next/router";
import React from "react";

const LocationBox = ({ onSelectLocation }) => {
  const router = useRouter();

  const handleLocationSelect = (location) => {
    localStorage.setItem("location", location);

    onSelectLocation(location);
    router.push({
      pathname: "/",
      query: { location },
    });
  };

  return (
    <div className="relative w-full h-[100vh] bg-[#f2f0f0] flex items-center justify-center">
      <div className="bg-white shadow-lg w-[50%] h-[250px] flex flex-col items-center justify-center rounded-lg gap-7">
        <div>
          <h1 className="text-[24px]">Welcome To Valley View Medical.</h1>
        </div>
        <div className="text-center">
          <h2>Select Your Location</h2>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleLocationSelect("Whitby")}
            >
              Whitby
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleLocationSelect("Oshawa")}
            >
              Oshawa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationBox;
