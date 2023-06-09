import React from "react";

const SingleJob = ({ details, addToApply }) => {
  return (
    <div className="my-container">
      <div className="lg:flex  items-start gap-10 justify-center ">
        <div className="p-10">
          <h5 className="my-8 text-lg">
            <span className="font-bold ">Job Description : </span>{" "}
            {details.job_description}
          </h5>
          <h5 className="my-8 text-lg">
            <span className="font-bold ">Job Responsibility : </span>{" "}
            {details.job_responsibility}
          </h5>
          <h5 className="my-8 text-lg">
            <span className="font-bold ">Educational Requirements :</span>{" "}
            <br /> {details.educational_requirements}
          </h5>
          <h5 className="my-8 text-lg">
            <span className="font-bold ">Experiences :</span> <br />{" "}
            {details.experiences}
          </h5>
        </div>
        <div className="bg-blue-50 p-10 rounded">
          <h5 className="text-lg font-bold mb-5">Job Details</h5>
          <hr />
          <div>
            <div className="flex items-center justify-start gap-3 mt-5 mb-3">
              <img src="https://i.ibb.co/HCMJwCr/Frame.png" alt="" />
              <p>
                <span className="font-bold">Salary : </span>
                {details.salary}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img src="https://i.ibb.co/t3PRhf4/Frame-1.png" alt="" />
              <p>
                <span className="font-bold">Job Title : </span>
                {details.job_title}
              </p>
            </div>
          </div>
          <h5 className="text-lg font-bold mt-10 mb-5">Contact Information</h5>
          <hr />
          <div>
            <div className="flex items-center justify-start gap-3 mt-5 mb-3">
              <img src="https://i.ibb.co/M8gQBK8/Frame-2.png" alt="" />
              <p>
                <span className="font-bold">Phone : </span>
                {details.phone}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-5 mb-3">
              <img src="https://i.ibb.co/cb78cC1/Frame-3.png" alt="" />
              <p>
                <span className="font-bold">Email : </span>
                {details.email}
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 mt-5 mb-3">
              <img src="https://i.ibb.co/3CvCn62/Frame-4.png" alt="" />
              <p>
                <span className="font-bold">Address : </span>
                {details.location}
              </p>
            </div>
          </div>
          <button
            onClick={() => addToApply(details.id)}
            className="btn btn-primary mt-8 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
