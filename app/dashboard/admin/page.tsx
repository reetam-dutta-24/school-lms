import React from "react";
import UserCard from "@/components/UserCard";
import CountChart from "@/components/countcharts";
import Attendance from "@/components/Attendance";
import Finchart from "@/components/Finchart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
function Admin() {
  return (
    <div className="flex w-full ">
      {/* Left side*/ }
      <div className="flex flex-col w-[66%] p-3 mt-1 ">
        <div className="flex flex-wrap justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="mt-4  flex gap-3">
          <CountChart />
          <Attendance />

        </div>
        <div >
          <Finchart/>
        </div>
      </div>
      {/* Right side*/ }
      <div className="w-[33%]  mt-3 flex flex-col gap-5 ">
        <EventCalendar/>
        <Announcements/>
      </div>
      
    </div>
  );
}

export default Admin;
