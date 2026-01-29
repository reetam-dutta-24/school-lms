"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// #region Sample data
const gray600 = "#6B7280";
const data = [
  {
    name: "Monday",
    present: 90,
    absent: 20
  },
  {
    name: "Tuesday",
    present: 85,
    absent: 25
  },
  {
    name: "Wednesday",
    present: 80,
    absent: 30
  },
  {
    name: "Thursday",
    present: 88,
    absent: 22
  },
  {
    name: "Friday",
    present: 92,
    absent: 18
  },
];
function Attendance() {
  return (
    <div className="bg-white  w-2/3 h-full p-3 rounded-xl shadow-md">
      {/*Header*/}
      <div className="flex  justify-between items-center mb-16">
        <h1 className="text-black font-semibold ">Students</h1>
        <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
      {/* Bar Chart */}
      <BarChart
        style={{
          width: "90%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.5,
        }}
        barCategoryGap= "75%"
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tick={{ color: gray600 }} />
        <YAxis width="auto" tick={{ color: gray600 }}/>
        <Tooltip
  contentStyle={{ color: gray600 }}
  labelStyle={{ color: gray600 }}
/>
        <Legend wrapperStyle={{ color: gray600 }}/>
        <Bar
          dataKey="present"
          fill="#C3EBFA"
          radius={[10, 10, 0, 0]}
        
        />
        <Bar
          dataKey="absent"
          fill="#FAE27C"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default Attendance;
