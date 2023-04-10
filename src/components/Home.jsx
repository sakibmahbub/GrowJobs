import React from "react";
import Hero from "./Hero";
import JobCategories from "./JobCategories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <Hero />
      <JobCategories categories={categories} />
    </>
  );
};

export default Home;
