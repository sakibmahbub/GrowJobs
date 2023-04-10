import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleJob from "./SingleJob";
import Banner from "./Banner";
import { addToDb } from "../utility/fakeDB";

const JobDetails = () => {
  const { id } = useParams();

  const jobData = useLoaderData();
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (jobData) {
      const detailsObject = jobData.find((job) => job.id == id);
      setDetails(detailsObject);
    }
  }, [id]);

  const addToApply = (id) => {
    addToDb(id);
  };

  return (
    <>
      <Banner pageTitle="Job Details" />
      <SingleJob details={details} addToApply={addToApply} />
    </>
  );
};

export default JobDetails;
