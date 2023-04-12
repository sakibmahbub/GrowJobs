import React from "react";

const Hero = () => {
  return (
    <div className="my-container">
      <div class="flex flex-col lg:flex-row justify-center items-center">
        <div class="mx-auto lg:ml-28 lg:w-1/2">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6 lg:mb-8 text-center lg:text-left">
            One Step <br /> Closer To Your <br />
            <span class="text-primary">Dream Job</span>
          </h1>
          <p class="text-gray-500 lg:w-4/6 mb-8 lg:mb-12 text-center lg:text-left">
            Explore thousands of job opportunities with all the information you
            need. It's your future. Come find it. Manage all your job
            applications from start to finish.
          </p>
          <div class="flex justify-center lg:justify-start">
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div class="mx-auto lg:w-1/2">
          <img
            src="https://i.ibb.co/q1MfdrZ/P3-OLGJ1-copy-1.png"
            alt=""
            class="mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
