"use client";
import { useState } from "react";
import TableList from "@/components/Common/Tables/TableList";
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";

export default function AttendanceTab() {
  const [view, setView] = useState("Daily");
  const [isEditing, setIsEditing] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "absent", "THU, 4": "present", "FRI, 5": "present" },
    { id: 2, name: "Jane Smith", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" },
    { id: 3, name: "Peter Jones", "MON, 1": "absent", "TUE, 2": "absent", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" }
  ]);

  const toggleAttendance = (studentId: number, day: string) => {
    setAttendanceData(prev => prev.map(student => {
      if (student.id === studentId) {
        const currentStatus = student[day];
        const newStatus = currentStatus === "present" ? "absent" : "present";
        return { ...student, [day]: newStatus };
      }
      return student;
    }));
  };

  const getAttendanceDisplay = (status: string, studentId: number, day: string) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case "present": return "bg-green-100 text-green-800";
        case "absent": return "bg-red-100 text-red-800";
        default: return "bg-gray-100 text-gray-800";
      }
    };

    const icon = status === "present" ? (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );

    if (isEditing) {
      return (
        <button
          onClick={() => toggleAttendance(studentId, day)}
          className={`p-2 rounded-full transition-all hover:scale-105 ${
            getStatusColor(status)
          }`}
        >
          {icon}
        </button>
      );
    }

    return (
      <span className={`p-2 rounded-full inline-flex ${
        getStatusColor(status)
      }`}>
        {icon}
      </span>
    );
  };
  
  const columns = [
    { key: "name", title: "NAME" },
    { 
      key: "MON, 1", 
      title: "MON, 1",
      render: (row: any) => getAttendanceDisplay(row["MON, 1"], row.id, "MON, 1")
    },
    { 
      key: "TUE, 2", 
      title: "TUE, 2",
      render: (row: any) => getAttendanceDisplay(row["TUE, 2"], row.id, "TUE, 2")
    },
    { 
      key: "WED, 3", 
      title: "WED, 3",
      render: (row: any) => getAttendanceDisplay(row["WED, 3"], row.id, "WED, 3")
    },
    { 
      key: "THU, 4", 
      title: "THU, 4",
      render: (row: any) => getAttendanceDisplay(row["THU, 4"], row.id, "THU, 4")
    },
    { 
      key: "FRI, 5", 
      title: "FRI, 5",
      render: (row: any) => getAttendanceDisplay(row["FRI, 5"], row.id, "FRI, 5")
    }
  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <SecondaryHeader title="July 2024" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            {["Daily", "Weekly", "Monthly"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 text-sm rounded-lg font-semibold transition-all duration-150 shadow-sm border border-transparent ${
                  view === v
                    ? "bg-[#013300] text-white shadow-md"
                    : "bg-gray-100 text-[#013300] hover:ring-2 hover:ring-[#013300] hover:scale-[1.03] hover:shadow-md"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          {isEditing ? (
            <div className="flex gap-2 ml-2">
              <UtilityButton small onClick={() => setIsEditing(false)}>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </span>
              </UtilityButton>
              <PrimaryButton small onClick={() => setIsEditing(false)}>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Save
                </span>
              </PrimaryButton>
            </div>
          ) : (
            <UtilityButton small onClick={() => setIsEditing(true)}>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="hidden sm:inline">Edit</span>
              </span>
            </UtilityButton>
          )}
        </div>
      </div>
      
      <TableList
        columns={columns}
        data={attendanceData}
        pageSize={10}
      />
    </div>
  );
}