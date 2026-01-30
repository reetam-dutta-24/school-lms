import React from "react";
const announcements = [
  {
    id: 1,
    title: "New Semester Begins",
    date: "2024-09-01",
    description:
      "The new semester will commence on September 1st. Please ensure you are registered for your courses.",
  },
  {
    id: 2,
    title: "Holiday Notice",
    date: "2024-12-24",
    description:
      "The school will be closed from December 24th to January 1st for the winter holidays.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meetings",
    date: "2024-10-15",
    description:
      "Parent-teacher meetings are scheduled for October 15th. Please check your email for appointment times.",
  },
  {
    id: 4,
    title: "Exam Schedule Released",
    date: "2024-11-01",
    description:
      "The exam schedule for the fall semester has been released. Students are advised to check the portal for details.",
  },
  {
    id: 5,
    title: "New Library Resources",
    date: "2024-09-15",
    description:
      "New books and digital resources have been added to the library. Visit the library portal to explore the new additions.",
  },
  {
    id: 6,
    title: "Sports Day Announcement",
    date: "2024-10-05",
    description:
      "Sports Day will be held on October 5th. Students are encouraged to participate in various sports activities and events.",
  },
    {
    id: 7,
    title: "New Semester Begins",
    date: "2024-09-01",
    description:
      "The new semester will commence on September 1st. Please ensure you are registered for your courses.",
  },
  {
    id: 8,
    title: "Holiday Notice",
    date: "2024-12-24",
    description:
      "The school will be closed from December 24th to January 1st for the winter holidays.",
  },
  {
    id: 9,
    title: "Parent-Teacher Meetings",
    date: "2024-10-15",
    description:
      "Parent-teacher meetings are scheduled for October 15th. Please check your email for appointment times.",
  },
  {
    id: 10,
    title: "Exam Schedule Released",
    date: "2024-11-01",
    description:
      "The exam schedule for the fall semester has been released. Students are advised to check the portal for details.",
  },
  {
    id: 11,
    title: "New Library Resources",
    date: "2024-09-15",
    description:
      "New books and digital resources have been added to the library. Visit the library portal to explore the new additions.",
  },
  {
    id: 12,
    title: "Sports Day Announcement",
    date: "2024-10-05",
    description:
      "Sports Day will be held on October 5th. Students are encouraged to participate in various sports activities and events.",
  },
  
];
function Announcements() {
  return (
    <div className="flex flex-col gap-4 p-3 bg-white rounded-lg shadow-md max-h-[420px] overflow-y-auto">
      <div className="flex  justify-between items-center">
        <h1 className="text-black font-bold ">Announcements</h1>
        <span className="text-gray-400 text-sm">View all</span>
      </div>
      <div className=" flex flex-col gap-4 ">
        {announcements.map((x, index) => (
          <div key={x.id} className="p-4 [&:nth-child(3n+1)]:bg-[#F1F0FF] [&:nth-child(3n+2)]:bg-[#EDF9FD] [&:nth-child(3n+3)]:bg-[#FEFCE8] rounded-md flex flex-col gap-3">
            <div className="text-sm flex justify-between">
                <h1 className=" font-semibold text-black">{x.title}</h1>
                <span className="text-gray-400">{x.date}</span>
            </div>
            <p className="text-gray-500 text-sm">{x.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
