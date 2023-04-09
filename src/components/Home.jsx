import React from "react";

const Home = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-center justify-center">
        <div className="lg: ml-28">
          <h1 className="text-5xl font-bold leading-tight">
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

export default Home;
