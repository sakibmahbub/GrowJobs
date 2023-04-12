import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import Banner from "./Banner";

const data = [
  { name: "Assignment 1", value: 56 },
  { name: "Assignment 2", value: 60 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 60 },
  { name: "Assignment 7", value: 60 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

const PieChartExample = () => {
  return (
    <>
      <Banner pageTitle="Statistics" />
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white shadow-md rounded p-10 mb-4">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default PieChartExample;
