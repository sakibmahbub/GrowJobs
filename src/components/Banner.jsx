import React from "react";

const Banner = ({ pageTitle }) => {
  return (
    <div>
      <div className="bg-blue-50 w-full h-80 -mt-20 mx-auto relative">
        <img
          className="absolute bottom-0 left-0 object-cover"
          src="/src/assets/All Images/Vector.png"
          alt=""
        />
        <div className="flex h-full my-auto items-center justify-center">
          <h2 className="text-2xl font-bold tracking-wide text-gray-800">
            {pageTitle}
          </h2>
        </div>
        <img
          className="absolute top-0 right-0 object-cover"
          src="/src/assets/All Images/Vector-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
