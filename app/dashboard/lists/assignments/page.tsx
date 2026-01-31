import React from "react";
import { assignmentList, parentlist, studentlist, teacherslist } from "@/lib/data";
import Searchbar from "@/components/searchbar";
import ColorfulAvatar from "@/components/colorfulavatars";
import DataTable from "@/components/TableList";
import { classesData } from "@/lib/data";
const username = "Reetam"
const x = assignmentList[username]
function Assignment() {
  return (
    <div className="flex flex-col gap-5 h-screen p-5 m-5 rounded-md bg-white shadow-md overflow-auto">
      <div>
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">See your assignment details {username}!</h1>
          <div>
            <Searchbar />
          </div>
        </div>
      </div>
      
      <DataTable data={x.assignments} />
    </div>
  );
}

export default Assignment;