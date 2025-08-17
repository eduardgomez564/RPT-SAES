"use client";
import { useState } from "react";
import TableList from "@/components/Common/Tables/TableList";
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";

export default function AttendanceTab() {
  const [view, setView] = useState("Daily");
  
  const attendanceData = [
    { id: 1, name: "John Doe", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "absent", "THU, 4": "present", "FRI, 5": "late" },
    { id: 2, name: "Jane Smith", "MON, 1": "present", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" },
    { id: 3, name: "Peter Jones", "MON, 1": "absent", "TUE, 2": "absent", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" },
    { id: 4, name: "Mary Jane", "MON, 1": "present", "TUE, 2": "late", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "absent" },
    { id: 5, name: "Sam Wilson", "MON, 1": "-", "TUE, 2": "present", "WED, 3": "present", "THU, 4": "present", "FRI, 5": "present" }
  ];
  
  const columns = [
    { key: "name", title: "NAME" },
    { key: "MON, 1", title: "MON, 1" },
    { key: "TUE, 2", title: "TUE, 2" },
    { key: "WED, 3", title: "WED, 3" },
    { key: "THU, 4", title: "THU, 4" },
    { key: "FRI, 5", title: "FRI, 5" }
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
          <PrimaryButton small className="ml-2">
            + Add Record
          </PrimaryButton>
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