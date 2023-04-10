import React from "react";

const JobCategory = ({ category }) => {
  const { logo, name, jobs } = category;
  return (
    <div className="bg-blue-50 mt-3 p-5 md:p-10 rounded text-center lg:text-left">
      <img className="mx-auto mb-5 lg:mx-0" src={logo} alt="" />
      <h4 className="text-lg font-bold mb-2">{name}</h4>
      <p className="text-gray-500">{jobs}</p>
    </div>
  );
};

export default JobCategory;
