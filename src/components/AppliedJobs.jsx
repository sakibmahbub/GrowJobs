import React, { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Appliedjob from "./Appliedjob";

const AppliedJobs = () => {
  const { initialJob } = useLoaderData();
  const [filter, setFilter] = useState("all");
  const handleFilter = (type) => {
    setFilter(type);
  };

  return (
    <>
      <Banner pageTitle="Applied Jobs" />
      <div className=" px-36 my-10 flex items-end justify-end">
        <div>
          <button
            className="px-3 py-2 mt-4 text-sm text-white rounded font-semibold bg-primary ml-3"
            onClick={() => handleFilter("remote")}
          >
            Remote
          </button>
          <button
            className="px-3 py-2 mt-4 text-sm text-white rounded font-semibold bg-primary ml-3"
            onClick={() => handleFilter("on-site")}
          >
            On-site
          </button>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center my-10  text-gray-900">
        <div className="flex flex-col w-3/4 p-6 space-y-4 sm:p-10">
          <ul className="flex flex-col">
            {initialJob
              .filter((job) => {
                if (filter == "Remote") {
                  return job.remote_or_onsite == "Remote";
                } else if (filter == "Onsite") {
                  return job.remote_or_onsite == "Onsite";
                } else {
                  return true;
                }
              })
              .map((job) => (
                <Appliedjob key={job.id} job={job} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
