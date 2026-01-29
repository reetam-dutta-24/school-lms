import React from "react";
import UserCard from "@/components/UserCard";
import CountChart from "@/components/countcharts";
import Attendance from "@/components/Attendance";
function Admin() {
  return (
    <div className="flex">
      <div className="w-[70%] p-2 mt-3 border h-[20%]">
        <div className="flex flex-wrap justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="mt-4 p-2 h-[30%] flex gap-4">
          <CountChart />
          <Attendance />

        </div>
      </div>
      

      <div className="w-1/3 border"></div>
    </div>
  );
}

export default Admin;
