import React from "react";
import JobCategory from "./JobCategory";

const JobCategories = ({ categories }) => {
  return (
    <div className="my-container">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-5">Job Category List</h2>
        <p className=" text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex items-center justify-center gap-10 mt-10">
        {categories.map((category) => (
          <JobCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
