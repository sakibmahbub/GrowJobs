import React, { useState, useEffect } from "react";
import Featuredjob from "./Featuredjob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("featured.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="my-container">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-5">Featured Jobs</h2>
        <p className=" text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="w-full mt-10 mx-auto grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2">
        {jobs.map((job) => (
          <Featuredjob key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <button className="btn btn-primary">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
