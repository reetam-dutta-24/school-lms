"use client";
import { time } from "console";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MoreHorizontal } from "lucide-react";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  {
    id: 1,
    title: "Math Exam",
    date: new Date(2024, 5, 10),
    time: "10:00 AM",
    description: "Final math exam for grade 10.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: new Date(2024, 5, 15),
    time: "5:00 PM",
    description: "Discuss student progress with parents.",
  },
  {
    id: 3,
    title: "Science Fair",
    date: new Date(2024, 5, 20),
    time: "1:00 PM",
    description: "Annual science fair showcasing student projects.",
  },
  {
    id: 4,
    title: "Sports Day",
    date: new Date(2024, 5, 25),
    time: "9:00 AM",
    description: "Inter-school sports competitions and activities.",
  },
  {
    id: 5,
    title: "Art Exhibition",
    date: new Date(2024, 5, 30),
    time: "3:00 PM",
    description: "Display of student artwork and crafts.",
  },
  {
    id: 6,
    title: "Music Concert",
    date: new Date(2024, 6, 5),
    time: "6:00 PM",
    description: "Evening concert featuring the school band and choir.",
  },
];
function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-2 rounded-lg shadow-md text-black ">
      <Calendar onChange={onChange} value={value} />
      <div className="mt-4 max-h-60 flex flex-col gap-3 overflow-y-auto">
        <div className="flex  justify-between items-center">
          <h1 className="text-black font-bold  ">Events</h1>
          <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 ">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="border-t border-t-2 odd:border-t-[#CFCEFF] even:border-t-[#C3EBFA]  p-2  rounded-md"
            >
              <div className="flex justify-between text-sm">
                <h2 className="font-semibold ">{event.title}</h2>
                <span className="text-gray-500">{event.time}</span>
              </div>
              <p className="text-gray-500 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default EventCalendar;
