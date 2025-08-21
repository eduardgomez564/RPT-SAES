import { useState } from "react";
import TableList from "@/components/Common/Tables/TableList";
// Button Components
import UtilityButton from "@/components/Common/Buttons/UtilityButton";
import DangerButton from "@/components/Common/Buttons/DangerButton";
// Text Components
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";

export default function StudentTab() {
  const [students] = useState([
    {
      id: 1,
      studentId: "2024-001",
      name: "John Doe",
      grade: "4",
      section: "A",
      age: "10",
      address: "123 Main St",
      guardian: "Jane Doe",
      guardianContact: "09123456789"
    },
    {
      id: 2,
      studentId: "2024-002", 
      name: "Jane Smith",
      grade: "4",
      section: "A",
      age: "9",
      address: "456 Oak Ave",
      guardian: "John Smith",
      guardianContact: "09987654321"
    },
    {
      id: 3,
      studentId: "2024-003",
      name: "Peter Jones",
      grade: "4", 
      section: "B",
      age: "10",
      address: "789 Pine Rd",
      guardian: "Mary Jones",
      guardianContact: "09111222333"
    }
  ]);

  return (
    <div>
      {/* Top Bar: Total and Actions */}
      <SecondaryHeader title="Student List Table" />
      <div
        className="
        /* Mobile */
        flex flex-row justify-between items-center mb-4
        /* Tablet */
        sm:mb-6
        /* Desktop */
        md:mb-2
      "
      >
        <TertiaryHeader title={`Total: ${students.length}`} />
      </div>

      {/* Student Table Section */}
      <TableList
        columns={[
          { key: "no", title: "No#" },
          { key: "studentId", title: "Student ID" },
          { key: "name", title: "Full Name" },
          { key: "grade", title: "Grade" },
          { key: "section", title: "Section" },
        ]}
        data={students.map((student, idx) => ({
          ...student,
          no: idx + 1,
        }))}
        actions={(row: any) => (
          <>
            <UtilityButton small>See All</UtilityButton>
          </>
        )}
        pageSize={10}
      />
    </div>
  );
}