import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Appliedjob from "./Appliedjob";

const AppliedJobs = () => {
  const { initialJob } = useLoaderData();

  return (
    <>
      <Banner pageTitle="Applied Jobs" />
      <div className="flex min-h-screen items-center justify-center my-10  text-gray-900">
        <div className="flex flex-col w-3/4 p-6 space-y-4 sm:p-10">
          <ul className="flex flex-col">
            {initialJob.map((job) => (
              <Appliedjob key={job.id} job={job} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;
