import React from "react";
import Banner from "./Banner";

const Blog = () => {
  return (
    <>
      <Banner pageTitle="Blog" />
      <div className="flex min-h-screen items-center justify-center my-10  text-gray-900">
        <div className="flex flex-col  lg:w-2/3 p-6 sm:p-10 ">
          <div className="border-2 border-blue-100 rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              1. When should you use context API?
            </h3>
            <p className="text-lg">
              Answer : Context api is a alternative to props.We should use
              context api when we have some data that have to share in many
              components at different levels of the project. In that case,
              contents api helps us to get rid of prop drilling.
            </p>
          </div>
          <div className="border-2 border-blue-100 rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">
              2. What is a custom hook? ?
            </h3>
            <p className="text-lg">
              Answer : Custom hook is a reusable function. We write a logic in
              it, example fetching data from api. Then we use it on different
              components as needed.{" "}
            </p>
          </div>
          <div className="border-2 border-blue-100 rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">3. What is useRef?</h3>
            <p className="text-lg">
              Answer : useRef helps to create a reference to a html element and
              also in a component so that we can access iit or modify it
              directly from the code.
            </p>
          </div>
          <div className="border-2 border-blue-100 rounded p-5 my-5">
            <h3 className="text-2xl font-bold mb-5">4. What is useMemo?</h3>
            <p className="text-lg">
              Answer : useMemo helps to optimize our code and make the project
              more efficient. It optimizes our code by memoizing the results of
              a function and we can use the in our needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
