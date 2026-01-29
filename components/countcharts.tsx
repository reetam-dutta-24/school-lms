"use client";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { MoreHorizontal } from "lucide-react";

const CountChart = () => {
  const data = [
    {
      name: "Boys",
      value: 55,
      fill: "#C3EBFA", // blue
    },
    {
      name: "Girls",
      value: 45,
      fill: "#FAE27C", // pink
    },
  ];

  return (
    <div className="w-1/3  bg-white rounded-xl p-3  shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-black font-semibold ">Students</h1>
        <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Chart */}
      <RadialBarChart
        width={260}
        height={260}
        cx="50%"
        cy="50%"
        innerRadius="40%"
        outerRadius="90%"
        barSize={14}
        data={data}
        className="items-center"
      >
        <RadialBar
          dataKey="value"
          background
          cornerRadius={10}
        />
        <Tooltip />
      </RadialBarChart>

      {/* Bottom stats */}
      <div className="flex justify-around mt-4">
        {/* Boys */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#C3EBFA] mb-1" />
          <h1 className="text-black font-bold">1224</h1>
          <p className="text-gray-500 text-xs">Boys (55%)</p>
        </div>

        {/* Girls */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#FAE27C] mb-1" />
          <h1 className="text-black font-bold">1001</h1>
          <p className="text-gray-500 text-xs">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

