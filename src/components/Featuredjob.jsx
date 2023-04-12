import React from "react";
import { useNavigate } from "react-router-dom";

const Featuredjob = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div className="mt-5 border border-blue-200 rounded p-20">
      <img className="object-cover mb-3" src={company_logo} alt="" />
      <h3 className="text-base font-bold mb-1">{job_title}</h3>
      <p className=" text-gray-500">{company_name}</p>
      <div
        className="flex items-center justify-start gap-2 my-3
      "
      >
        <p className="px-2 py-1 text-blue-600 text-sm font-semibold border-blue-500 border rounded">
          {remote_or_onsite}
        </p>
        <p className="px-2 py-1 text-blue-600 text-sm font-semibold border-blue-500 border rounded">
          {fulltime_or_parttime}
        </p>
      </div>
      <div className="lg:flex items-center justify-start gap-10">
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/3CvCn62/Frame-4.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/HCMJwCr/Frame.png" alt="" />

          <p>
            Salary : <span>{salary}</span>
          </p>
        </div>
      </div>
      <button
        onClick={handleViewDetails}
        className="px-3 py-2 mt-4 text-sm text-white rounded font-semibold bg-primary "
      >
        View Details
      </button>
    </div>
  );
};

export default Featuredjob;
