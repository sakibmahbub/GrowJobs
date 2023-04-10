import React from "react";

const Hero = () => {
  return (
    <div className="my-container">
      <div className="flex items-center justify-center">
        <div className="lg: ml-28">
          <h1 className="text-6xl font-bold leading-tight">
            One Step <br /> Closer To Your <br />
            <span className="text-primary">Dream Job</span>
          </h1>
          <p className="lg:w-3/6 my-6 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div>
          <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
