"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { useMemo } from "react";

// Types
type Teacher = {
  id: number;
  name: string;
  subject?: string[];
  email?: string;
  qualification?: string;
  grade?: string[];
  phoneno: string | number;
  address: string;
};

type Student = {
  id: number;
  name: string;
  grade: string;
  phoneno: string | number;
  address: string;
};

type Parent = {
  parentName: string;
  students: string[];
  email: string;
  phoneno: string | number;
  address: string;
};

type Subject = {
  subjectName: string;
  teachers: string[];
  description: string;
};

type Section = {
  className: string;
  strength: number;
  noOfBoys: number;
  noOfGirls: number;
  classTeacher: string;
  classLeader: string;
  location: string;
};

type Exam = {
  subjectName: string;
  date: string;
  time: string;
  examType: string;
  totalMarks: number;
  examSeat: string;
};

// FIX: kept "subject" here because that's what your actual data uses
type Assignment = {
  assignmentTitle: string;
  subject: string;
  description: string;
  marks: number;
  deadline: string;
};

type Results = {
  resultName: string;
  resultDate: string;
  resultExamType: string;
  resultTotalMarks: number;
  resultMarksObtained: number;
  resultGrade: string;
};

// Avatar Component
const ColorAvatar = ({ name }: { name: string }) => {
  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const getColorIndex = (name: string) => name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`w-8 h-8 rounded-full ${
        colors[getColorIndex(name)]
      } flex items-center justify-center text-sm font-semibold text-white`}
    >
      {getInitials(name)}
    </div>
  );
};

// Main DataTable
export default function DataTable({
  data,
}: {
  data: Array<
    Teacher | Student | Parent | Subject | Section | Exam | Assignment | Results
  >;
}) {
  const columnHelper = createColumnHelper<any>();

  // Detection order matters: check types with overlapping keys AFTER
  // the more-specific type that shares that key has been checked.
  // - Assignment before Teacher (both have "subject")
  // - Exam and Results before Subject (all three have "subjectName")
  const isAssignment =
    data.length > 0 && (data[0] as Assignment).assignmentTitle !== undefined;
  const isExam =
    data.length > 0 && (data[0] as Exam).examType !== undefined;
  const isResults =
    data.length > 0 && (data[0] as Results).resultName !== undefined;
  const isTeacher =
    data.length > 0 && (data[0] as Teacher).subject !== undefined;
  const isParent =
    data.length > 0 && (data[0] as Parent).parentName !== undefined;
  const isSubject =
    data.length > 0 && (data[0] as Subject).subjectName !== undefined;
  const isSection =
    data.length > 0 && (data[0] as Section).className !== undefined;

  const columns = useMemo(() => {
    // FIX: isAssignment checked before isTeacher in the if/else chain too
    if (isAssignment) {
      return [
        columnHelper.accessor("assignmentTitle", {
          header: "Assignment Title",
          cell: (info) => (
            <span className="text-gray-900 font-semibold">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("subject", {
          header: "Subject",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("description", {
          header: "Description",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("marks", {
          header: "Total Marks",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("deadline", {
          header: "Deadline",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
      ];
    } else if (isTeacher) {
      return [
        columnHelper.accessor("name", {
          header: "Teacher",
          cell: (info) => (
            <div className="flex items-center gap-2">
              <ColorAvatar name={info.getValue()} />
              <div>
                <div className="font-semibold text-gray-900">
                  {info.getValue()}
                </div>
                <div className="text-sm text-gray-600">
                  {info.row.original.email}
                </div>
              </div>
            </div>
          ),
        }),
        columnHelper.accessor("id", {
          header: "Teacher ID",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("qualification", {
          header: "Qualification",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("subject", {
          header: "Subjects",
          cell: (info) => (
            <span className="text-sm text-gray-600">
              {info.getValue()?.join(", ") ?? ""}
            </span>
          ),
        }),
        columnHelper.accessor("grade", {
          header: "Classes",
          cell: (info) => (
            <span className="text-sm text-gray-600">
              {info.getValue()?.join(", ") ?? ""}
            </span>
          ),
        }),
        columnHelper.accessor("phoneno", {
          header: "Phone",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("address", {
          header: "Address",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
      ];
    } else if (isParent) {
      return [
        columnHelper.accessor("parentName", {
          header: "Parent",
          cell: (info) => (
            <div className="flex items-center gap-2">
              <ColorAvatar name={info.getValue()} />
              <div className="font-semibold text-gray-900">
                {info.getValue()}
              </div>
            </div>
          ),
        }),
        columnHelper.accessor("students", {
          header: "Students",
          cell: (info) => (
            <span className="text-sm text-gray-600">
              {info.getValue()?.join(", ") ?? ""}
            </span>
          ),
        }),
        columnHelper.accessor("email", {
          header: "Email",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("phoneno", {
          header: "Phone",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("address", {
          header: "Address",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
      ];
    } else if (isExam) {
      return [
        columnHelper.accessor("subjectName", {
          header: "Subject Name",
          cell: (info) => (
            <span className="text-gray-900 font-semibold">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("date", {
          header: "Date",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("time", {
          header: "Time",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("examType", {
          header: "Examination Format",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("totalMarks", {
          header: "Total Marks",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("examSeat", {
          header: "Examination Seat",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
      ];
    } else if (isResults) {
      return [
        columnHelper.accessor("resultName", {
          header: "Subject Name",
          cell: (info) => (
            <span className="text-gray-900 font-semibold">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("resultDate", {
          header: "Date",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("resultExamType", {
          header: "Examination Format",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("resultTotalMarks", {
          header: "Total Marks",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("resultMarksObtained", {
          header: "Marks Obtained",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("resultGrade", {
          header: "Grade obtained",
          cell: (info) => <span className="text-gray-600 text-sm">{info.getValue()}</span>,
        }),
      ];
    } else if (isSubject) {
      return [
        columnHelper.accessor("subjectName", {
          header: "Subject",
          cell: (info) => (
            <div className="font-bold text-gray-900">{info.getValue()}</div>
          ),
        }),
        columnHelper.accessor("teachers", {
          header: "Teachers",
          cell: (info) => (
            <span className="text-sm text-gray-600">
              {info.getValue()?.join(", ") ?? ""}
            </span>
          ),
        }),
        columnHelper.accessor("description", {
          header: "Description",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
      ];
    } else if (isSection) {
      return [
        columnHelper.accessor("className", {
          header: "Class",
          cell: (info) => (
            <span className="text-gray-900 font-semibold">
              {info.getValue()}
            </span>
          ),
        }),
        columnHelper.accessor("strength", {
          header: "Strength",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("noOfBoys", {
          header: "Boys",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("noOfGirls", {
          header: "Girls",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("classTeacher", {
          header: "Class Teacher",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("classLeader", {
          header: "Class Leader",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("location", {
          header: "Location",
          cell: (info) => (
            <span className="text-gray-600 text-sm">{info.getValue()}</span>
          ),
        }),
      ];
    } else {
      // Students
      return [
        columnHelper.accessor("name", {
          header: "Student",
          cell: (info) => (
            <div className="flex items-center gap-2">
              <ColorAvatar name={info.getValue()} />
              <div className="font-semibold text-gray-900">
                {info.getValue()}
              </div>
            </div>
          ),
        }),
        columnHelper.accessor("id", {
          header: "Student ID",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("grade", {
          header: "Class",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("phoneno", {
          header: "Phone",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
        columnHelper.accessor("address", {
          header: "Address",
          cell: (info) => (
            <span className="text-sm text-gray-600">{info.getValue()}</span>
          ),
        }),
      ];
    }
  }, [data]);

  const initialPageSize = useMemo(() => {
    if (isExam || isAssignment || isResults || isSubject || isSection) {
      return 15;
    } else {
      return 9;
    }
  }, [data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: initialPageSize } },
  });

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left px-4 py-2 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? "bg-[#EDF9FD]" : "bg-[#F1F0FF]"}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
        <span className="text-sm text-gray-600">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 text-sm rounded-md border bg-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 text-sm rounded-md border bg-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}