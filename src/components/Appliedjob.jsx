import React from "react";
import { useNavigate } from "react-router-dom";

const Appliedjob = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`);
  };
  return (
    <li className="lg:flex flex-col border-2 border-blue-100 p-4 rounded mt-10">
      <div className="lg:flex w-full items-center gap-4 sm:gap-10 space-x-2 sm:space-x-4">
        <div className="h-full flex items-center p-3 rounded bg-gray-100">
          <img
            className="object-cover w-24 sm:w-32"
            src={company_logo}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-2">
            <h3 className="text-base font-bold mb-1">{job_title}</h3>
            <p className="text-gray-500">{company_name}</p>
          </div>
          <div className="flex sm:justify-between lg:justify-start items-center gap-2 my-3">
            <p className="px-2 py-1 text-blue-600 text-sm font-semibold border-blue-500 border rounded">
              {remote_or_onsite}
            </p>
            <p className="px-2 py-1 text-blue-600 text-sm font-semibold border-blue-500 border rounded">
              {fulltime_or_parttime}
            </p>
          </div>
          <div className="lg:flex sm:justify-between lg:justify-start items-center gap-4">
            <div className="flex gap-2 items-center">
              <img
                src="/src/assets/Icons/Frame-4.png"
                alt=""
                className="w-4 h-4"
              />
              <p className="text-sm">{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/src/assets/Icons/Frame.png"
                alt=""
                className="w-4 h-4"
              />
              <p className="text-sm">
                Salary: <span>{salary}</span>
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleViewDetails}
          className="px-3 py-2 mt-4 text-sm text-white rounded font-semibold bg-primary"
        >
          View Details
        </button>
      </div>
    </li>
  );
};

export default Appliedjob;
