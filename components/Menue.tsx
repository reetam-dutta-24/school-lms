import React from 'react'
import Link from 'next/link'
import {
    Home, //Home
    User, //Parent
    Presentation, //Teacher
    Users, //classes
    GraduationCap, //student
    BookOpen, //lesson
    ClipboardCheck, //Exam
    FileText, //Assignment
    CalendarCheck,   //Attendance
    Calendar,  //Calendar
    MessageSquare, //Messages
    Megaphone,  //Announcements
    User2,  //profile
    Settings, //settings
    LogOut, //logout
    BarChart3, //for results
    Icon
} from 'lucide-react'
function Menue() {
    const menueItems = [
        {
            title: "Menu",
            items:[
                {
                    icon: Home,
                    label: "Home",
                    href: "/",
                },
                {
                    icon: Presentation,
                    label: "Teachers",
                    href: "/dashboard/lists/teachers",
                },
                {
                    icon: GraduationCap,
                    label: "Students",
                    href: "/dashboard/lists/students",
                },
                {
                    icon: User,
                    label: "Parents",
                    href: "/dashboard/lists/parents",
                },
                {
                    icon: BookOpen,
                    label: "Subjects",
                    href: "/dashboard/lists/subjects",
                },
                {
                    icon: Users,
                    label: "Classes",
                    href: "/dashboard/lists/sections",
                    

                },
                {
                    icon: ClipboardCheck,
                    label: "Exams",
                    href: "/dashboard/lists/exams",

                },
                {
                    icon: FileText,
                    label: "Assignments",
                    href: "/dashboard/lists/assignments",
                },
                {
                    icon: BarChart3,
                    label: "Results",
                    href: "/dashboard/lists/results"
                },
                {
                    icon: CalendarCheck,
                    label: "Attendance",
                    href: "/attendance",
                },
                {
                    icon: Calendar,
                    label: "Calendar",
                    href: "/calndar",

                },
                {
                    icon: MessageSquare,
                    label: "Messages",
                    href: "/messages",
                },
                {
                    icon: Megaphone,
                    label: "Announcements",
                    href: "/announcements",
                }

            ]
            

        },
        {
            title: "Other",
            items: [
                {
                    icon: User2,
                    label: "Profile",
                    href: "/profile",
                
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/settings",  
                },
                {
                    icon: LogOut,
                    label: "Logout",
                    href: "/logout",
                }
            ]
        }
    ]
    return (
  <div className="flex text-sm flex-col gap-8 items-center mt-5 ">
    {menueItems.map((index) => (
      <div className="flex flex-col" key={index.title}>
        <span className="text-gray-700 mb-2">{index.title}</span>

        {index.items.map((item) => {
          const Icon = item.icon; // 👈 important

          return (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-4 p-2 text-gray-500 hover:text-black hover:bg-[#EDF9FD] rounded-md transition-all"
            >
              <Icon size={18} className="shrink-0" /> {/* 👈 icon size here */}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    ))}
  </div>
);

}

export default Menue
