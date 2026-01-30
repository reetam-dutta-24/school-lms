"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

// #region Sample data
const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908
  },
  {
    name: "May",
    income: 1890,
    expense: 4800
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300
  },
   {
    name: "Sep",
    income: 5090,
    expense: 3300
  },
   {
    name: "Oct",
    income: 1490,
    expense: 3300
  },
   {
    name: "Nov",
    income: 6000,
    expense: 2375
  },
   {
    name: "Dec",
    income: 5000,
    expense: 1300
  }
   
];
// #endregion
function Finchart() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mt-4">
      <div className="flex  justify-between items-center mb-16">
        <h1 className="text-black font-bold ">Financial chart</h1>
        <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
      <LineChart
        style={{
          width: "80%",
          maxWidth: "700px",
          height: "70%",
          maxHeight: "70vh",
          aspectRatio: 2,
          alignItems: "center"
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#C3EBFA"
          activeDot={{ r: 8 }}
          strokeWidth={5}
        />
        <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        
      </LineChart>
    </div>
  );
}

export default Finchart;
