import React from "react";
import Hero from "./Hero";
import JobCategories from "./JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <Hero />
      <JobCategories categories={categories} />
      <FeaturedJobs />
    </>
  );
};

export default Home;
