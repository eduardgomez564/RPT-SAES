"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
// Button Components
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import UtilityButton from "@/components/Buttons/UtilityButton";
import DangerButton from "@/components/Buttons/DangerButton";
// Text Components
import SecondaryHeader from "@/components/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Texts/TertiaryHeader";
import BodyText from "@/components/Texts/BodyText";
import BodyLabel from "@/components/Texts/BodyLabel";
import TableList from "@/components/Tables/TableList";

export default function NonReaderTab() {
  // Example data, replace with real data as needed
  const [students, setStudents] = useState<any[]>([]);

  // Delete individual student
  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Delete all students
  const handleDeleteAll = () => {
    setStudents([]);
  };

  return (
    <div>
      {/* Student Table Section */}
      <SecondaryHeader title="Non Reader Modules" />
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
        <div className="flex gap-2"></div>
      </div>
      <TableList
        columns={[
          { key: "no", title: "No#" },
          { key: "title", title: "Title" },
          { key: "phonemic", title: "Phonemic" },
          { key: "dateToUse", title: "Date to use" },
          { key: "status", title: "Status" },
        ]}
        data={students.map((student, idx) => ({
          ...student,
          no: idx + 1,
        }))}
        actions={(row: any) => (
          <>
            <UtilityButton small>See All</UtilityButton>
            <DangerButton small onClick={() => handleDelete(row.id)}>
              Delete
            </DangerButton>
          </>
        )}
        pageSize={10}
      />
    </div>
  );
}
