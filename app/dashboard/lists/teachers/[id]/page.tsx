import Announcements from "@/components/Announcements";
import Schedule from "@/components/schedule";
import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  CalendarDays,
  Mail,
  Phone,
} from "lucide-react";
import { CalendarCheck, Building2, BookOpen,  } from "lucide-react";
import Image from "next/image";

function singleTeacherPage() {
  return (
    <div className="flex  w-full h-[130vh] p-4 m-2 gap-3">
      <div className="w-[66%]">
        <div className="flex flex-col h-full gap-4">
          <div className="h-[20%]  flex w-full gap-4">
            <div className="w-[60%] bg-[#C3EBFA] rounded-md flex items-center  gap-3 ">
              <div className="w-[35%] object-cover p-3">
                <img src = "/demo.png" alt = "Profile Photo" className="rounded-full object-cover"></img>
              </div>
              <div className="w-[70%] flex flex-col gap-3 p-3">
                <h1 className="text-gray-900 font-bold text-lg">Reetam Dutta</h1>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ratione dicta repellat. Quibusdam, distinctio?</p>
                <div className="flex flex-wrap text-xs text-gray-500 gap-3">
                    <span className="flex gap-1"><GraduationCap size={18}/> Phd in gender studies</span>
                    <span className="flex gap-1"><CalendarDays size={18}/> 18th Jan, 2025</span>
                    <span className="flex gap-1"><Mail size={18}/> reetam2308@gmail.com</span>
                    <span className="flex gap-1"><Phone size={18} /> +91 8285849011</span>
                </div>

              </div>
            </div>
            <div className="w-[40%] rounded-md">
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-md flex gap-2 p-4">
                    <CalendarCheck size = {18}/>
                    <div className="flex flex-col gap-1">
                        <span>Attendance</span>
                        <span className="text-gray-500">90%</span>
                    </div>
                </div>
                                <div className="bg-white rounded-md flex gap-2 p-4">
                    <CalendarCheck size = {18}/>
                    <div className="flex flex-col gap-1">
                        <span>Attendance</span>
                        <span className="text-gray-500">90%</span>
                    </div>
                </div>
                                <div className="bg-white rounded-md flex gap-2 p-4">
                    <CalendarCheck size = {18}/>
                    <div className="flex flex-col gap-1">
                        <span>Attendance</span>
                        <span className="text-gray-500">90%</span>
                    </div>
                </div>
                                <div className="bg-white rounded-md flex gap-2 p-4">
                    <CalendarCheck size = {18}/>
                    <div className="flex flex-col gap-1">
                        <span>Attendance</span>
                        <span className="text-gray-500">90%</span>
                    </div>
                </div>
                                <div className="bg-white rounded-md flex gap-2 p-4">
                    <CalendarCheck size = {18}/>
                    <div className="flex flex-col gap-1">
                        <span>Attendance</span>
                        <span className="text-gray-500">90%</span>
                    </div>
                </div>
    
              </div>
            </div>
          </div>
          <div className="h-[80%] bg-white rounded-md p-3">
            <div>
                <h1 className="font-bold text-lg">Teacher's Schedule</h1>
            </div>
            <div>
                <Schedule/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[33%] h-full flex flex-col gap-3">
        <div className="h-[20%] bg-white rounded-md p-3 flex flex-col gap-3">
            <h1 className="font-semibold text-gray-900 text-lg">Shortcuts</h1>
            <div className="flex flex-wrap text-gray-500 gap-4 text-sm ">
                <Link href = "/" className="bg-[#EDF9FD] p-3 hover:cursor-pointer">Classes</Link>
                <Link href = "/" className="bg-[#F1F0FF] p-3 hover:cursor-pointer">Students</Link>
                <Link href = "/" className="bg-[#FEFCE8] p-3 hover:cursor-pointer">Lessons</Link>
                <Link href = "/" className="bg-[#EDF9FD] p-3 hover:cursor-pointer">Exams</Link>
                <Link href = "/" className="bg-[#F1F0FF] p-3 hover:cursor-pointer">Assignments</Link>
            </div>

        </div>
        <div className="h-[36%] bg-white rounded-md p-3">
            <h1 className="text-gray-900 font-semibold text-lg">Performance</h1>
        </div>
        <div className="h-[36%] bg-white rounded-md">
            <Announcements/>
        </div>
      </div>
    </div>
  );
}

export default singleTeacherPage;
